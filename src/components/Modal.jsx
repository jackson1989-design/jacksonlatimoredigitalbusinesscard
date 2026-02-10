import React, { useEffect } from "react"
import { X } from "lucide-react"

export default function Modal({ title, subtitle, icon: Icon, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 flex items-end sm:items-center justify-center">
      <div className="w-full max-w-md bg-slate-950 border border-[#C9A25F]/30 rounded-[2.25rem] overflow-hidden shadow-2xl">
        <div className="bg-[#C9A25F] text-[#0B0F17] p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-black/10 p-3 rounded-2xl">
              {Icon ? <Icon size={28} strokeWidth={2.5} /> : null}
            </div>
            <div>
              <h3 className="font-black text-lg uppercase tracking-tight leading-none">{title}</h3>
              {subtitle ? <p className="text-[10px] font-black tracking-[0.25em] uppercase opacity-70 mt-2">{subtitle}</p> : null}
            </div>
          </div>

          <button
            onClick={onClose}
            className="bg-black/10 p-3 rounded-full hover:bg-black/20 transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}
