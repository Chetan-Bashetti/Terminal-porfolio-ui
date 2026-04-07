// review.js
const fetch = require("node-fetch");
const { execSync } = require("child_process");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
const REPO = process.env.GITHUB_REPOSITORY;
const PR_NUMBER = process.env.GITHUB_REF?.split("/")[2];
const BASE_REF = process.env.GITHUB_BASE_REF;

if (!CLAUDE_API_KEY) {
  console.error("❌ CLAUDE_API_KEY not set.");
  process.exit(1);
}

if (!GITHUB_TOKEN) {
  console.error("❌ GITHUB_TOKEN not set.");
  process.exit(1);
}

if (!BASE_REF) {
  console.error("❌ GITHUB_BASE_REF not found.");
  process.exit(1);
}

async function reviewPR() {
  try {
    console.log(`Fetching base branch: ${BASE_REF}`);

    execSync(`git fetch origin ${BASE_REF}`, { stdio: "inherit" });

    let diff = execSync(`git diff origin/${BASE_REF}...HEAD`, {
      encoding: "utf-8",
    });

    if (!diff) {
      console.log("No changes detected. Skipping review.");
      return;
    }

    // 🔥 Trim large diffs
    const MAX_CHARS = 12000;
    if (diff.length > MAX_CHARS) {
      console.log("Diff too large, trimming...");
      diff = diff.slice(0, MAX_CHARS);
    }

    console.log("Sending diff to Claude (messages API)...");

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": CLAUDE_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307", // ✅ fast & cheap
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: `You are a senior frontend reviewer. Review this PR diff and give concise, actionable feedback with severity (Critical/Suggestion/Improvement):\n\n${diff}`
          }
        ]
      }),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(`Claude API Error: ${data.error.message}`);
    }

    const reviewText = data?.content?.[0]?.text;

    if (!reviewText) {
      throw new Error("AI returned empty response.");
    }

    console.log("AI Review generated successfully");

    // Post comment to PR
    const ghResponse = await fetch(
      `https://api.github.com/repos/${REPO}/issues/${PR_NUMBER}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${GITHUB_TOKEN}`,
        },
        body: JSON.stringify({
          body: `### 🤖 AI PR Review (Claude)\n\n${reviewText}`,
        }),
      }
    );

    if (!ghResponse.ok) {
      const err = await ghResponse.text();
      throw new Error(`GitHub comment failed: ${err}`);
    }

    console.log("✅ Comment posted successfully");
  } catch (err) {
    console.error("❌ AI Review failed:", err.message);
    process.exit(1);
  }
}

reviewPR();