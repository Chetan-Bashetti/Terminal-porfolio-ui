// review.js
const fetch = require("node-fetch");
const { execSync } = require("child_process");

// GitHub provides these automatically in Actions
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
const REPO = process.env.GITHUB_REPOSITORY;
const PR_NUMBER = process.env.GITHUB_REF?.split("/")[2]; // refs/pull/123/merge

if (!CLAUDE_API_KEY) {
  console.error("❌ CLAUDE_API_KEY not set. Please set it as a secret.");
  process.exit(1);
}

if (!GITHUB_TOKEN) {
  console.error("❌ GITHUB_TOKEN not set.");
  process.exit(1);
}

async function reviewPR() {
  try {
    // Get diff of PR
    const diff = execSync("git diff origin/main...HEAD", { encoding: "utf-8" });
    if (!diff) {
      console.log("No changes detected. Skipping AI review.");
      return;
    }

    // Call Anthropic Claude
    const response = await fetch("https://api.anthropic.com/v1/complete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": CLAUDE_API_KEY
      },
      body: JSON.stringify({
        model: "claude-2",
        prompt: `Please review the following code changes and provide suggestions, potential bugs, or improvements:\n${diff}`,
        max_tokens_to_sample: 1000
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error("❌ Claude API Error:", data.error);
      process.exit(1);
    }

    const reviewText = data.completion;
    if (!reviewText) {
      console.error("❌ AI did not return content. Check API key/quota.");
      process.exit(1);
    }

    console.log("AI Review completed successfully:\n", reviewText);

    // Post comment on PR
    const ghResponse = await fetch(`https://api.github.com/repos/${REPO}/issues/${PR_NUMBER}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${GITHUB_TOKEN}`
      },
      body: JSON.stringify({ body: `### 🤖 AI PR Review by Claude\n\n${reviewText}` })
    });

    if (!ghResponse.ok) {
      const errText = await ghResponse.text();
      throw new Error(`Failed to post PR comment: ${errText}`);
    }

    console.log("✅ AI review posted as PR comment successfully.");
  } catch (err) {
    console.error("❌ Unexpected error:", err);
    process.exit(1);
  }
}

reviewPR();