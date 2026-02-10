import React, { useMemo, useState } from "react"
import {
  ExternalLink,
Instagram,
Phone,
  Mail,
  MessageSquare,
  Calendar,
  Shield,
  TrendingUp,
  Search,
  ChevronRight,
  Linkedin,
  Facebook,
  Bot,
  BookOpen,
  HeartPulse,
  Building2,
  Scale,
  Umbrella,
  Home,
  Briefcase,
  GraduationCap,
  Zap,
} from "lucide-react"

import Modal from "./components/Modal"
import LegacyAIChat from "./components/LegacyAIChat"
import LegacyBlueprint from "./components/LegacyBlueprint"
import LivingBenefits from "./components/LivingBenefits"
import SearchServices from "./components/SearchServices"

const BRAND = {
  navy: "#0B0F17",
  gold: "#C9A25F",
}

const PROFILE = {
  name: "Jackson M. Latimore Sr.",
  title: "Founder & CEO",
  company: "Latimore Life & Legacy LLC",
  location: "Schuylkill, Luzerne, & Northumberland Counties",
  license: "PA D.O.I #1268820 | NIPR #21638507",
  tagline: "Protecting Today. Securing Tomorrow.",
  hashtag: "#TheBeatGoesOn",
  bio: "To empower every family with the financial tools and protection strategies necessary to turn hard work into a lasting legacy, ensuring financial security is a foundation for generations to come.",
  phone: "(856) 895-1457",
  email: "jackson1989@latimorelegacy.com",
  links: {
    booking: "https://globalfinancialimpact.fillout.com/t/tMz7ZcqpaZus",
    main: "https://jackson1989-design.github.io/latimore-life-legacy-site/",
    ethos: "https://agents.ethoslife.com/invite/29ad1",
    linkedin: "https://www.linkedin.com/in/startwithjacksongfi/",
    facebook: "https://www.facebook.com/LatimoreLegacyLLC",
  },
}

const SERVICES = [
  { title: "Wealth Accumulation", Icon: TrendingUp, desc: "Tax-advantaged growth strategies", detail: "Index-linked growth with downside protection frameworks and disciplined funding strategy." },
  { title: "Asset Protection", Icon: Shield, desc: "Rollovers and secure transfers", detail: "Structured rollover strategy and beneficiary-first positioning to reduce leakage and preserve intent." },
  { title: "Education Funds", Icon: GraduationCap, desc: "College funding solutions", detail: "Multi-bucket approach for education goals with risk controls and timeline matching." },
  { title: "Debt Management", Icon: Scale, desc: "Strategic debt reduction", detail: "Priority stacking, cashflow engineering, and risk transfer planning." },
  { title: "Life Insurance", Icon: Umbrella, desc: "Protection and living benefits", detail: "Coverage design aligned with responsibilities and long-term wealth architecture." },
  { title: "Living Benefits", Icon: HeartPulse, desc: "Access funds while living", detail: "Concept education on qualifying events and how riders can provide access in defined scenarios." },
  { title: "Estate Planning", Icon: Building2, desc: "Legacy and inheritance strategy", detail: "Beneficiary design, liquidity planning, and efficient transfer positioning (in coordination with counsel)." },
  { title: "Indexed Growth", Icon: Zap, desc: "Market-linked growth protection", detail: "Participation in index upside with floor-based downside protection mechanics." },
  { title: "Mortgage Protection", Icon: Home, desc: "Secure your family home", detail: "Coverage aligned to mortgage liability, income shock, and survivorship contingencies." },
  { title: "Business Strategies", Icon: Briefcase, desc: "Key person and succession", detail: "Key person risk, continuity planning, and succession-aligned protection design." },
]

export default function App() {
  const [activeOverlay, setActiveOverlay] = useState(null) // 'assistant' | 'blueprint' | 'benefits' | 'search'
  const [searchPrefill, setSearchPrefill] = useState("")

  const phoneDigits = useMemo(() => PROFILE.phone.replace(/\D/g, ""), [])

  const openAssistant = (prefill = "") => {
    setSearchPrefill(prefill)
    setActiveOverlay("assistant")
  }

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white font-sans selection:bg-[#C9A25F]/30 overflow-x-hidden">
      {/* background ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[520px] h-[520px] bg-[#C9A25F] rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[420px] h-[420px] bg-blue-900 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-md mx-auto px-6 py-10 pb-24">
        {/* Hero */}
        <header className="flex flex-col items-center mb-10 text-center">
          
        <div className="w-full mb-6  rounded-3xl border border-slate-800/60">
          <img src="/hero.png" alt="Latimore Life & Legacy" className="w-full h-auto max-h-72 object-contain bg-white/90 p-2 rounded-2xl" onError={(e) => { e.currentTarget.style.display = "none"; }} />
        </div>
<div className="bg-white p-5 rounded-3xl mb-7 shadow-2xl border border-slate-200 w-full">
            <div className="flex items-center gap-4 justify-between">
              <div className="flex flex-col text-left">
                <span className="text-[#0B0F17] text-2xl font-black leading-none tracking-tighter">LATIMORE</span>
                <span className="text-[#C9A25F] text-[10px] font-bold tracking-[0.25em]">LIFE & LEGACY LLC</span>
              </div>
              <div className="h-10 w-[2px] bg-slate-100"></div>
              <HeartPulse className="text-[#0B0F17] w-10 h-10" strokeWidth={1.5} />
            </div>
            <p className="text-[#0B0F17] text-[9px] font-black uppercase mt-4 tracking-[0.3em] opacity-40">{PROFILE.hashtag}</p>
          </div>

          <h1 className="text-3xl font-extrabold text-[#C9A25F] mb-1 tracking-tight">{PROFILE.name}</h1>
          <p className="text-slate-200 text-sm font-semibold tracking-wide uppercase opacity-90">{PROFILE.title}</p>
          <p className="text-slate-400 text-xs mt-1 italic tracking-widest">{PROFILE.company}</p>
          <p className="text-slate-500 text-xs mt-1 tracking-widest">{PROFILE.location}</p>

          <div className="flex gap-3 mt-6">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-[#C9A25F]/20 rounded-full text-[10px] uppercase tracking-widest font-black text-[#C9A25F]">
              <Shield size={12} /> Protection
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-[#C9A25F]/20 rounded-full text-[10px] uppercase tracking-widest font-black text-[#C9A25F]">
              <TrendingUp size={12} /> Strategy
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-[#C9A25F]/20 rounded-full text-[10px] uppercase tracking-widest font-black text-[#C9A25F]">
              <Building2 size={12} /> Legacy
            </span>
          </div>
        </header>

        {/* Primary Action Grid */}
        <section className="grid grid-cols-2 gap-4 mb-12">
          <button
            onClick={() => window.open(PROFILE.links.booking, "_blank")}
            className="bg-[#C9A25F] text-[#0B0F17] py-4 rounded-2xl flex flex-col items-center gap-2 font-black text-[11px] uppercase tracking-tighter hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-[#C9A25F]/20"
          >
            <Calendar size={22} strokeWidth={2.5} /> Book Consultation
          </button>

          <button
            onClick={() => (window.location.href = `tel:${phoneDigits}`)}
            className="bg-transparent border-2 border-[#C9A25F] text-[#C9A25F] py-4 rounded-2xl flex flex-col items-center gap-2 font-black text-[11px] uppercase tracking-tighter hover:bg-[#C9A25F]/5 transition-all active:scale-95"
          >
            <Phone size={22} strokeWidth={2.5} /> Call Now
          </button>

          <button
            onClick={() => (window.location.href = `sms:${phoneDigits}`)}
            className="bg-transparent border-2 border-[#C9A25F] text-[#C9A25F] py-4 rounded-2xl flex flex-col items-center gap-2 font-black text-[11px] uppercase tracking-tighter hover:bg-[#C9A25F]/5 transition-all active:scale-95"
          >
            <MessageSquare size={22} strokeWidth={2.5} /> Text Me
          </button>

          <button
            onClick={() => (window.location.href = `mailto:${PROFILE.email}`)}
            className="bg-transparent border-2 border-[#C9A25F] text-[#C9A25F] py-4 rounded-2xl flex flex-col items-center gap-2 font-black text-[11px] uppercase tracking-tighter hover:bg-[#C9A25F]/5 transition-all active:scale-95"
          >
            <Mail size={22} strokeWidth={2.5} /> Email
          </button>
        </section>

        {/* Interactive Tools */}
        <section className="mb-14">
          <h2 className="text-center text-[#C9A25F] text-lg font-black uppercase tracking-[0.3em] mb-2">Interactive Tools & Resources</h2>
          <p className="text-center text-slate-500 text-[11px] mb-8 font-medium italic">Explore AI-powered tools and educational resources</p>

          <div className="space-y-4">
            <button
              onClick={() => openAssistant("")}
              className="w-full bg-gradient-to-br from-[#C9A25F]/20 to-[#0B0F17] border border-[#C9A25F]/40 p-6 rounded-[2.5rem] flex items-center gap-6 hover:bg-[#C9A25F]/30 transition-all group text-left relative overflow-hidden"
            >
              <div className="bg-[#C9A25F] text-[#0B0F17] p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-2xl">
                <Bot size={32} strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-[#C9A25F] font-black text-xl leading-tight uppercase tracking-tight">Legacy AI</h3>
                <p className="text-slate-300 text-xs mt-1 font-bold">Ask me anything (strategy-first)</p>
              </div>
              <ChevronRight className="text-[#C9A25F] opacity-50 group-hover:translate-x-1 transition-transform" />
            </button>

            {[
              { id: "blueprint", label: "Legacy Blueprint", icon: BookOpen, sub: "Plan your legacy" },
              { id: "benefits", label: "Living Benefits", icon: HeartPulse, sub: "Learn about benefits" },
              { id: "search", label: "Search Services", icon: Search, sub: "Find what you need" },
            ].map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveOverlay(tool.id)}
                className="w-full bg-slate-900/40 border border-slate-800/60 p-5 rounded-3xl flex items-center gap-5 hover:border-[#C9A25F]/30 transition-all group"
              >
                <div className="text-[#C9A25F] p-3 bg-slate-800/50 rounded-xl group-hover:bg-[#C9A25F]/10">
                  <tool.icon size={20} />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-slate-100 font-black text-sm tracking-tight uppercase">{tool.label}</h4>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{tool.sub}</p>
                </div>
                <ChevronRight className="text-slate-700" size={18} />
              </button>
            ))}
          </div>
        </section>

        {/* Services Portfolio */}
        <section className="mb-14">
          <h2 className="text-center text-[#C9A25F] text-2xl font-black uppercase tracking-[0.25em] mb-10">Full Portfolio of Services</h2>
          <div className="grid grid-cols-1 gap-4">
            {SERVICES.map((item) => (
              <button
                key={item.title}
                onClick={() => openAssistant(`Tell me how ${item.title} works and what questions I should answer first.`)}
                className="flex items-center gap-5 p-5 rounded-2xl bg-slate-900/30 border border-slate-800/40 hover:border-[#C9A25F]/40 transition-all group text-left"
              >
                <div className="text-[#C9A25F] p-3 bg-slate-800/80 rounded-2xl group-hover:bg-[#C9A25F] group-hover:text-[#0B0F17] transition-all">
                  <item.Icon size={20} />
                </div>
                <div>
                  <h4 className="font-black text-slate-100 text-sm tracking-tight uppercase">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Commitment */}
        <section className="text-center bg-[#C9A25F]/5 border border-[#C9A25F]/20 p-10 rounded-[3rem] mb-16 relative overflow-hidden shadow-inner">
          <div className="absolute top-0 left-0 p-6 opacity-[0.03]">
            <Shield size={180} />
          </div>
          <h3 className="text-[#C9A25F] text-xl font-black uppercase tracking-[0.3em] mb-8">My Commitment</h3>
          <p className="text-white font-black text-lg mb-6 italic leading-snug">
            "I'm not here to sell products — I'm here to deliver solutions."
          </p>
          <p className="text-slate-400 text-[13px] leading-relaxed mb-10 font-medium px-4">
            I help local families protect what they've built, grow with intention, and create a legacy that lasts — calmly and without pressure.
          </p>
          <div className="space-y-3">
            <h4 className="text-[#C9A25F] font-black text-xl tracking-tighter uppercase">{PROFILE.tagline}</h4>
            <div className="flex items-center justify-center gap-4 text-[#C9A25F] opacity-80">
              <div className="h-[1px] w-8 bg-[#C9A25F]/40"></div>
              <p className="font-bold text-xs tracking-[0.4em]">{PROFILE.hashtag}</p>
              <div className="h-[1px] w-8 bg-[#C9A25F]/40"></div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-10 border-t border-slate-800/50">
          
<div className="flex justify-center gap-10 mb-10">
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A25F] hover:scale-125 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} strokeWidth={1.5} />
            </a>
            <a
              href={PROFILE.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A25F] hover:scale-125 transition-transform"
              aria-label="Facebook"
            >
              <Facebook size={32} strokeWidth={1.5} />
            </a>
          </div>
          <div className="space-y-3 text-[10px] font-bold text-slate-600 tracking-widest uppercase px-6">
            <p className="leading-relaxed">{PROFILE.license}</p>
            <p>© {new Date().getFullYear()} {PROFILE.company}</p>
          </div>
        </footer>
      </div>

      {/* Overlays */}
      {activeOverlay === "assistant" && (
        <Modal title="Legacy AI" subtitle="Strategic Engine" icon={Bot} onClose={() => setActiveOverlay(null)}>
          <LegacyAIChat
            bookingUrl={PROFILE.links.booking}
            phone={PROFILE.phone}
            services={SERVICES}
            bio={PROFILE.bio}
          />
        </Modal>
      )}

      {activeOverlay === "blueprint" && (
        <Modal title="Legacy Blueprint" subtitle="3‑Point Strategy" icon={BookOpen} onClose={() => setActiveOverlay(null)}>
          <LegacyBlueprint services={SERVICES} bookingUrl={PROFILE.links.booking} />
        </Modal>
      )}

      {activeOverlay === "benefits" && (
        <Modal title="Living Benefits" subtitle="Concept Overview" icon={HeartPulse} onClose={() => setActiveOverlay(null)}>
          <LivingBenefits />
        </Modal>
      )}

      {activeOverlay === "search" && (
        <Modal title="Search Services" subtitle="Find the right pillar" icon={Search} onClose={() => setActiveOverlay(null)}>
          <SearchServices
            services={SERVICES}
            onSelect={(svc) => {
              // NOTE: this is the “function prop” safe pattern.
              setActiveOverlay(null)
              openAssistant(`I’m interested in ${svc.title}. Ask me the key DIME questions and outline a strategy-first path.`)
            }}
          />
        </Modal>
      )}
    </div>
  )
}
