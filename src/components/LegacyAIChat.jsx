import React, { useEffect, useMemo, useRef, useState } from "react"
import { Bot, Send } from "lucide-react"
import { generateGeminiText } from "../lib/geminiClient"

export default function LegacyAIChat({ bookingUrl, phone, services, bio }) {
  const [chatInput, setChatInput] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "model",
      text:
        "Strategic Legacy Engine active. I am Jackson’s expert consultant. I specialize in the DIME Method, X‑Curve Theory, and the Power of Indexing. How can I help you architect your family’s future today?",
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const systemPrompt = useMemo(() => {
    const portfolio = services
      .map((s) => `PILLAR: ${s.title}\nTAGLINE: ${s.desc}\nDETAIL: ${s.detail || s.desc}`)
      .join("\n\n")

    return `
You are the "Legacy AI" — a strategic consultant for Jackson M. Latimore Sr. (Founder & CEO of Latimore Life & Legacy LLC).

CORE MISSION:
"${bio}"

PORTFOLIO CONTEXT:
${portfolio}

EXPERT FRAMEWORKS (must use when relevant):
- DIME Method (Debt, Income, Mortgage, Education)
- X‑Curve Theory (Responsibility down, wealth up)
- Rule of 72
- Tax context: IRC 101(a), 72(e), 7702 + 2026 TCJA sunset (high level, non-legal advice)

STYLE:
- Authoritative, consultative, calm (no fear-based selling).
- Use short paragraphs + bullets when technical.
- If the user needs a meeting, suggest booking at ${bookingUrl}.

LIMIT:
180–250 words unless user asks for more.
`
  }, [services, bio, bookingUrl])

  const toGeminiContents = (msgs) => {
    return msgs.map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    }))
  }

  const handleSend = async () => {
    if (!chatInput.trim() || isTyping) return

    const userMsg = chatInput.trim()
    setMessages((prev) => [...prev, { role: "user", text: userMsg }])
    setChatInput("")
    setIsTyping(true)

    try {
      const contents = toGeminiContents([
        ...messages,
        { role: "user", text: userMsg },
      ])

      const { text } = await generateGeminiText({
        systemInstruction: systemPrompt,
        contents,
      })

      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text:
            text ||
            `System recalibrating. For immediate assistance, call ${phone} or book at ${bookingUrl}.`,
        },
      ])
    } catch (e) {
      const msg =
        String(e?.message || "") ||
        `Strategic link disrupted. Please call ${phone} or book at ${bookingUrl}.`

      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text:
            msg.includes("Missing API key")
              ? "AI is not connected yet. Add your API key (or enable the /api proxy) and reload."
              : "Strategic link disrupted. Please use Call or Email for immediate assistance.",
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="flex flex-col h-[80vh]">
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-900/50 custom-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={[
                "max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed font-semibold whitespace-pre-wrap",
                m.role === "user"
                  ? "bg-[#C9A25F] text-[#0B0F17] rounded-tr-none shadow-xl"
                  : "bg-slate-800 text-slate-100 border border-slate-700 rounded-tl-none shadow-md",
              ].join(" ")}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-800 p-5 rounded-3xl rounded-tl-none border border-slate-700 flex gap-2">
              <div className="w-2 h-2 bg-[#C9A25F] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#C9A25F] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-[#C9A25F] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="p-6 bg-slate-950 border-t border-slate-800">
        <div className="flex gap-3 bg-slate-900 border-2 border-slate-800 p-2.5 rounded-[2rem] focus-within:border-[#C9A25F]/50 transition-all shadow-inner">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about DIME, X‑Curve, or Tax‑Free growth..."
            className="flex-1 bg-transparent px-4 py-2 text-sm text-white focus:outline-none placeholder:text-slate-600 font-semibold"
          />
          <button
            onClick={handleSend}
            disabled={!chatInput.trim() || isTyping}
            className="bg-[#C9A25F] text-[#0B0F17] p-3.5 rounded-2xl disabled:opacity-30 disabled:grayscale transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#C9A25F]/20"
            aria-label="Send"
          >
            <Send size={20} strokeWidth={2.5} />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500 font-semibold">
          <span className="flex items-center gap-2">
            <Bot size={14} className="text-[#C9A25F]" />
            AI replies are educational; book for personalized planning.
          </span>
        </div>
      </div>
    </div>
  )
}
