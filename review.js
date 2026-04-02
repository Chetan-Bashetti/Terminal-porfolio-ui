const fs = require("fs");

const diff = fs.readFileSync("pr.diff", "utf-8");

async function reviewPR() {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a senior frontend reviewer. Give concise actionable feedback." },
          { role: "user", content: `Review this PR diff:\n\n${diff}` }
        ]
      })
    });

    const data = await response.json();

    // Log the full response for debugging
    console.log("API Response:", JSON.stringify(data, null, 2));

    if (data.choices && data.choices[0] && data.choices[0].message) {
      fs.writeFileSync("review.txt", data.choices[0].message.content);
      console.log("Review saved to review.txt");
    } else if (data.error) {
      console.error("OpenAI API Error:", data.error);
      fs.writeFileSync("review.txt", `OpenAI API Error: ${JSON.stringify(data.error)}`);
    } else {
      console.error("Unexpected API response structure");
      fs.writeFileSync("review.txt", `Unexpected API response structure: ${JSON.stringify(data)}`);
    }
  } catch (err) {
    console.error("Request failed:", err);
    fs.writeFileSync("review.txt", `Request failed: ${err}`);
  }
}

reviewPR();