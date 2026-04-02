// review.js
const fs = require("fs");

// Read the PR diff
const diffFile = "pr.diff";
if (!fs.existsSync(diffFile)) {
  throw new Error(`Diff file not found: ${diffFile}`);
}

const diff = fs.readFileSync(diffFile, "utf-8");

// Ensure API key is set
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OpenAI API key. Set OPENAI_API_KEY as a secret in your GitHub repo.");
}

async function reviewPR() {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a senior frontend reviewer. Provide concise, actionable feedback with severity levels (Critical/Suggestion/Improvement).",
        },
        {
          role: "user",
          content: `Review this PR diff:\n\n${diff}`,
        },
      ],
    }),
  });

  const data = await response.json();

  // Fail if API returned an error
  if (data.error) {
    throw new Error(`OpenAI API Error: ${data.error.message} (Code: ${data.error.code || "N/A"})`);
  }

  // Fail if response structure is unexpected
  if (!data.choices || !data.choices[0] || !data.choices[0].message) {
    throw new Error(`Unexpected API response structure: ${JSON.stringify(data)}`);
  }

  const reviewContent = data.choices[0].message.content.trim();

  if (!reviewContent) {
    throw new Error("AI returned empty review content.");
  }

  // Save review to file for GitHub Actions to read
  fs.writeFileSync("review.txt", reviewContent, "utf-8");
  console.log("✅ AI Review completed and saved to review.txt");
}

// Run the review
reviewPR().catch(err => {
  console.error("❌ AI Review failed:", err);
  process.exit(1); // Fail the GitHub Action
});