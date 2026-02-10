export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" })
    return
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    res.status(500).json({ error: "Missing GEMINI_API_KEY on server" })
    return
  }

  try {
    const { model, systemInstruction, contents } = req.body || {}
    if (!model || !contents) {
      res.status(400).json({ error: "Missing model or contents" })
      return
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`
    const upstream = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        contents,
        systemInstruction: systemInstruction
          ? { parts: [{ text: String(systemInstruction) }], role: "system" }
          : undefined,
      }),
    })

    const text = await upstream.text()
    if (!upstream.ok) {
      res.status(upstream.status).json({ error: text })
      return
    }

    const data = JSON.parse(text)
    const out =
      data?.candidates?.[0]?.content?.parts?.map(p => p.text).filter(Boolean).join("") ||
      data?.text ||
      ""

    res.status(200).json({ text: out })
  } catch (e) {
    res.status(500).json({ error: e?.message || "Server error" })
  }
}
