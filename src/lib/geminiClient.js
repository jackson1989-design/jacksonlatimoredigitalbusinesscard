import { GoogleGenAI } from '@google/genai'

const DEFAULT_MODEL = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.5-flash-preview-09-2025"

/**
 * Returns { text } for a single-turn or multi-turn contents array.
 * 
 * Modes:
 * - Proxy mode: set VITE_AI_PROXY_URL (recommended for production).
 * - Direct mode: set VITE_GEMINI_API_KEY (key will be exposed in client build).
 */
export async function generateGeminiText({ systemInstruction, contents, model = DEFAULT_MODEL }) {
  const proxyUrl = import.meta.env.VITE_AI_PROXY_URL
  if (proxyUrl) {
    const res = await fetch(proxyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model, systemInstruction, contents }),
    })
    if (!res.ok) {
      const msg = await safeText(res)
      throw new Error(msg || `Proxy error: ${res.status}`)
    }
    const data = await res.json()
    return { text: data.text ?? "" }
  }

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  if (!apiKey) {
    throw new Error("Missing API key. Set VITE_GEMINI_API_KEY (or use VITE_AI_PROXY_URL).")
  }

  const ai = new GoogleGenAI({ apiKey })
  const response = await ai.models.generateContent({
    model,
    contents,
    config: {
      systemInstruction,
      temperature: 0.7,
    },
  })

  return { text: response.text ?? "" }
}

async function safeText(res) {
  try { return await res.text() } catch { return "" }
}
