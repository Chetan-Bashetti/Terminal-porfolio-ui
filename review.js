const fs = require("fs");
const fetch = require("node-fetch");

const diff = fs.readFileSync("pr.diff", "utf-8");

async function reviewPR() {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a senior frontend reviewer. Give concise actionable feedback."
        },
        {
          role: "user",
          content: `Review this PR diff:\n\n${diff}`
        }
      ]
    })
  });

  const data = await response.json();
  const review = data.choices[0].message.content;

  fs.writeFileSync("review.txt", review);
}

reviewPR();