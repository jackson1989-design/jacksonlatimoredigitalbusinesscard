import React, { useMemo, useState } from "react"
import { Search } from "lucide-react"

export default function SearchServices({ services, onSelect }) {
  const [q, setQ] = useState("")

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return services
    return services.filter((s) =>
      (s.title + " " + s.desc + " " + (s.detail || "")).toLowerCase().includes(term),
    )
  }, [q, services])

  return (
    <div className="p-6">
      <div className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-[#C9A25F] bg-slate-800/50 p-3 rounded-xl">
            <Search size={20} />
          </div>
          <h4 className="text-slate-100 font-black text-sm tracking-tight uppercase">Search Services</h4>
        </div>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Type: retirement, college, mortgage, business…"
          className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-[#C9A25F]/40"
        />

        <div className="mt-4 space-y-3">
          {results.map((s) => (
            <button
              key={s.title}
              onClick={() => onSelect?.(s)}
              className="w-full text-left bg-slate-950/50 border border-slate-800 rounded-2xl p-4 hover:border-[#C9A25F]/35 transition"
            >
              <div className="font-black uppercase text-xs text-slate-100">{s.title}</div>
              <div className="text-[11px] text-slate-400 mt-1">{s.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
