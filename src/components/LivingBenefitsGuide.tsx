
import React from 'react';
import { ShieldAlert, Zap, HeartPulse, HelpCircle } from 'lucide-react';

const LivingBenefitsGuide: React.FC = () => {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl mb-10 overflow-hidden relative group">
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
        <HeartPulse size={120} className="text-[#1D3A5F]" />
      </div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center space-x-2 bg-[#C29D6F]/10 px-4 py-2 rounded-full mb-6">
          <Zap size={16} className="text-[#C29D6F]" />
          <span className="text-[10px] font-black uppercase tracking-widest text-[#C29D6F]">Educational Guide</span>
        </div>

        <h2 className="text-2xl font-black text-[#1D3A5F] mb-4 tracking-tight">Understanding Living Benefits</h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-8 italic">
          "Most people think life insurance only pays when you pass away. Modern 'Living Benefits' change that equation entirely."
        </p>

        <div className="space-y-6">
          <div className="flex space-x-4">
            <div className="shrink-0 w-10 h-10 bg-[#1D3A5F] rounded-xl flex items-center justify-center text-white">
              <ShieldAlert size={20} />
            </div>
            <div>
              <h4 className="font-bold text-[#1D3A5F] text-sm mb-1">Accelerated Death Benefit Riders (ABRs)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automatically included in QoL Flex Term policies. Allows you to access up to $2 million of your death benefit early if diagnosed with a qualifying condition.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-50">
            <TriggerItem label="Chronic" desc="2 of 6 ADLs" />
            <TriggerItem label="Critical" desc="Heart/Stroke/Cancer" />
            <TriggerItem label="Terminal" desc="End of Life" />
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <div className="flex items-center space-x-2 mb-2 text-[#1D3A5F]">
              <HelpCircle size={16} />
              <span className="text-xs font-black uppercase tracking-tight">ABR vs. Long Term Care</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Unlike Long Term Care Insurance (LTCI) which is for reimbursement of care costs, ABR payments are <span className="text-[#C29D6F] font-bold">unrestricted</span>. Use the cash for anything—from experimental treatments to paying off your mortgage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TriggerItem: React.FC<{ label: string, desc: string }> = ({ label, desc }) => (
  <div className="text-center">
    <div className="text-[10px] font-black text-[#1D3A5F] uppercase mb-1">{label}</div>
    <div className="text-[9px] text-slate-400 font-medium leading-tight">{desc}</div>
  </div>
);

export default LivingBenefitsGuide;
