import React, { useMemo, useState } from "react"
import { Sparkles } from "lucide-react"
import { generateGeminiText } from "../lib/geminiClient"

export default function LegacyBlueprint({ services, bookingUrl }) {
  const [goal, setGoal] = useState("")
  const [out, setOut] = useState("")
  const [loading, setLoading] = useState(false)

  const systemInstruction = useMemo(() => {
    const ctx = services
      .map((s) => `${s.title.toUpperCase()}: ${s.detail || s.desc}`)
      .join("\n")
    return `You are the lead Senior Legacy Architect for Latimore Life & Legacy LLC.

TASK: Create a sophisticated, multi-layered "Legacy Protection Blueprint" for a client goal.

PORTFOLIO CONTEXT:
${ctx}

RULES:
1) Provide exactly 3 bullet points.
2) Each bullet must explain STRATEGIC reasoning (not product hype).
3) Reference at least 2 different services from the portfolio.
4) Tone: authoritative, technical, reassuring. No fear-based language.
5) 120–150 words total.
6) End exactly with: "Book a legacy review with Jackson to activate this strategy."
7) Use simple bullets (-).`
  }, [services])

  const run = async () => {
    if (!goal.trim()) return
    setLoading(true)
    setOut("")
    try {
      const { text } = await generateGeminiText({
        systemInstruction,
        contents: [{ role: "user", parts: [{ text: goal.trim() }] }],
      })
      setOut(text || "No output returned. Try a more specific goal.")
    } catch {
      setOut("Blueprint generation failed. Please try again or book a consultation.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <div className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-[#C9A25F] bg-slate-800/50 p-3 rounded-xl">
            <Sparkles size={20} />
          </div>
          <h4 className="text-slate-100 font-black text-sm tracking-tight uppercase">Legacy Blueprint</h4>
        </div>

        <textarea
          rows={3}
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Example: I want to protect my kids, pay off the house, and build tax‑advantaged retirement income."
          className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-[#C9A25F]/40"
        />

        <button
          onClick={run}
          disabled={loading || !goal.trim()}
          className="mt-4 w-full py-4 bg-[#C9A25F] text-[#0B0F17] rounded-2xl font-black uppercase tracking-widest text-xs disabled:opacity-40"
        >
          {loading ? "Generating..." : "Generate Blueprint"}
        </button>

        {out ? (
          <div className="mt-5 bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-200 whitespace-pre-wrap">
            {out}
          </div>
        ) : null}

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-[#C9A25F] text-xs font-black uppercase tracking-widest hover:opacity-80"
        >
          Prefer a real review? Book now →
        </a>
      </div>
    </div>
  )
}
