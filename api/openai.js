// Vercel Serverless Function — Node.js
export default async function handler(req, res) {
  const apiKey = process.env.OPENAI_API_KEY;
  const body = req.body;

  const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await openaiRes.json();
  res.status(openaiRes.status).json(data);
}
