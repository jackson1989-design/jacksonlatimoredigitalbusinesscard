import React, { useState } from 'react';
import { Lightbulb, Sparkles } from 'lucide-react';
import { APP_DATA } from '../constants';

const LegacyBlueprint: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [blueprint, setBlueprint] = useState('');
  const [loading, setLoading] = useState(false);

  const generateBlueprint = async () => {
    if (!goal.trim()) return;
    setLoading(true);

    // Build the service context exactly as before
    const serviceContext = APP_DATA.services
      .map(s => `${s.title.toUpperCase()}: ${s.detailedDescription}`)
      .join('\n');

    const systemInstruction = `You are the lead Senior Legacy Architect for Latimore Life & Legacy LLC, working under CEO Jackson M. Latimore Sr.

    TASK: Create a sophisticated, multi-layered "Legacy Protection Blueprint" for a client goal.

    STRATEGIC CONTEXT (Use these specific mechanics):
    ${serviceContext}

    BLUEPRINT RULES:
    1. Provide exactly 3 high-impact, detailed bullet points.
    2. Each bullet must explain a specific STRATEGIC REASONING and reference the technical mechanics of Jackson's services (e.g., 0% floors, tax-free buckets, living benefit triggers).
    3. You must explicitly reference at least two different services from Jackson's portfolio in your response.
    4. Maintain a high-authority, technical, and reassuring consultation tone.
    5. Word limit: 120-150 words total for the entire response to ensure depth.
    6. End exactly with: "Book a legacy review with Jackson to activate this strategy."
    7. Use simple bullet points (-). Do not use Markdown headers.`;

    try {
      // 🔥 CALL YOUR OPENAI BACKEND INSTEAD OF GEMINI
      const res = await fetch("/api/strategic-advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `${systemInstruction}\n\nClient Goal: ${goal}`
        })
      });

      const data = await res.json();

      setBlueprint(
        data.reply ||
        "I couldn't generate a blueprint right now. Please connect with Jackson directly."
      );
    } catch (error) {
      setBlueprint(
        "We encountered an error. Please try again or contact Jackson directly for a consultation."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1D3A5F]/5 rounded-3xl p-6 border border-[#1D3A5F]/10 mb-10 transition-all">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-[#C29D6F] p-2 rounded-xl text-white">
          <Lightbulb size={20} />
        </div>
        <h2 className="text-[#1D3A5F] text-lg font-extrabold tracking-tight">
          AI Legacy Blueprint
        </h2>
      </div>

      {!blueprint ? (
        <div className="space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            Describe a primary goal like{" "}
            <span className="font-semibold text-[#1D3A5F]">
              "Protecting my home for my children"
            </span>{" "}
            or{" "}
            <span className="font-semibold text-[#1D3A5F]">
              "Starting a tax-free retirement plan"
            </span>.
          </p>

          <div className="relative group">
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="What is your legacy goal?"
              className="w-full p-4 text-sm rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C29D6F]/50 h-28 resize-none bg-white/50 group-hover:bg-white transition-colors"
            />
          </div>

          <button
            onClick={generateBlueprint}
            disabled={loading || !goal.trim()}
            className="w-full py-4 bg-[#1D3A5F] text-white rounded-2xl text-sm font-bold flex items-center justify-center space-x-2 disabled:opacity-50 hover:bg-[#152a45] transform active:scale-[0.98] transition-all shadow-lg"
          >
            {loading ? (
              <Sparkles className="animate-spin" size={18} />
            ) : (
              <Sparkles size={18} />
            )}
            <span>Generate My Blueprint</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="text-[14px] text-slate-700 leading-relaxed whitespace-pre-wrap bg-white p-5 rounded-2xl border border-[#C29D6F]/30 shadow-inner italic">
            {blueprint}
          </div>

          <button
            onClick={() => {
              setBlueprint("");
              setGoal("");
            }}
            className="text-xs text-[#1D3A5F] font-bold uppercase tracking-widest hover:text-[#C29D6F] flex items-center space-x-1"
          >
            <span>Reset Tool</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LegacyBlueprint;
