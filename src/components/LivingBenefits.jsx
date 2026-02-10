import React from "react"
import { HeartPulse } from "lucide-react"

export default function LivingBenefits() {
  return (
    <div className="p-6">
      <div className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-[#C9A25F] bg-slate-800/50 p-3 rounded-xl">
            <HeartPulse size={20} />
          </div>
          <h4 className="text-slate-100 font-black text-sm tracking-tight uppercase">Living Benefits</h4>
        </div>

        <div className="text-slate-300 text-sm leading-relaxed space-y-3">
          <p>
            “Living benefits” generally refers to policy features (often riders) that can provide access to a portion of benefits
            under specific qualifying events (for example, certain chronic/critical illness definitions).
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Definitions, eligibility, and payout methods vary by carrier/product.</li>
            <li>Benefits may reduce the remaining death benefit and can include fees/discounting.</li>
            <li>Use this module to learn the concept — use a consultation for product-specific details.</li>
          </ul>
          <p className="text-xs text-slate-500">
            Educational only. Not financial, legal, or tax advice.
          </p>
        </div>
      </div>
    </div>
  )
}
