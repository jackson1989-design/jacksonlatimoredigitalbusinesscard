
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Bot, Sparkles, X, MessageSquare, ShieldCheck, UserPlus, Zap, Activity } from 'lucide-react';
import { Message } from '../types';
import { APP_DATA, PRODUCT_KNOWLEDGE } from '../constants';
import { geminiService } from '../services/geminiService';

interface AssistantProps {
  onClose: () => void;
  initialQuery?: string | null;
}

const Assistant: React.FC<AssistantProps> = ({ onClose, initialQuery }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `Strategic Legacy Engine active. I am Jackson's expert consultant. I specialize in the DIME Method, X-Curve Theory, and the Power of Indexing. How can I help you architect your family's future today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasAutoQueried = useRef(false);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;
    
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setIsLoading(true);

    const servicesPortfolio = APP_DATA.services.map(s => 
      `PILLAR: ${s.title}\nTAGLINE: ${s.description}\nTECHNICAL STRATEGY: ${s.detailedDescription}`
    ).join('\n\n');

    const systemInstruction = `
      You are the "Master Legacy Architect" for Latimore Life & Legacy LLC, representing Founder & CEO Jackson M. Latimore Sr.
      
      CORE MISSION:
      "${APP_DATA.bio}"

      LEGACY PORTFOLIO CONTEXT:
      ${servicesPortfolio}

      ADVANCED PRODUCT KNOWLEDGE:
      ${PRODUCT_KNOWLEDGE}

      STRICT CONSULTATION RULES:
      1. INTEGRATED ANSWERS: For any service inquiry, you MUST start with the 'TAGLINE' for immediate context, then deep-dive into the 'TECHNICAL STRATEGY'.
      2. EXPERT CONCEPTS: Always reference the 'DIME Method', 'X-Curve Theory', and the 'Rule of 72' where applicable. 
      3. TAX AUTHORITY: Discuss the "Tax-Never" bucket and the 2026 TCJA Sunset when explaining wealth accumulation or estate transfer.
      4. STRATEGIC POSITIONING: You are not just an agent; you are an architect. Use a sophisticated, authoritative, and consultative tone.
      5. CALL TO ACTION: Suggest booking a "Legacy review with Jackson" at ${APP_DATA.links.booking}.
      6. RESPONSE STRUCTURE: Use short, punchy paragraphs and bullet points for technical breakdowns. Limit to 180-250 words.
    `;

    try {
      const response = await geminiService.generateContent(text, systemInstruction);
      setMessages(prev => [...prev, { role: 'assistant', content: response || "Our strategic systems are processing high-priority data. Please connect with Jackson directly at " + APP_DATA.phone }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Our encrypted strategy link is refreshing. Please reach out to Jackson directly for immediate consultation." }]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (initialQuery && !hasAutoQueried.current) {
      hasAutoQueried.current = true;
      sendMessage(initialQuery);
    }
  }, [initialQuery, sendMessage]);

  const handleSend = () => {
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Premium Header */}
      <div className="p-6 bg-[#1D3A5F] text-white flex justify-between items-center shrink-0 shadow-2xl relative z-20">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="bg-[#C29D6F] p-3 rounded-2xl shadow-inner">
              <Bot size={28} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1D3A5F]"></div>
          </div>
          <div>
            <h3 className="font-black text-lg tracking-tight">Legacy AI</h3>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck size={10} className="text-[#C29D6F]" />
              <p className="text-[9px] text-[#C29D6F] font-black uppercase tracking-[0.2em]">Strategic Engine</p>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <X size={24} />
        </button>
      </div>

      {/* Message Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar bg-[#f8fafc]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
            <div className={`relative max-w-[90%] p-5 rounded-3xl shadow-sm ${
              msg.role === 'user' 
                ? 'bg-[#1D3A5F] text-white rounded-tr-none' 
                : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none ring-1 ring-slate-100 shadow-md'
            }`}>
              <div className="text-[8px] font-black uppercase tracking-widest mb-2 opacity-50 flex items-center space-x-2">
                {msg.role === 'user' ? <UserPlus size={10} /> : <Zap size={10} className="text-[#C29D6F]" />}
                <span>{msg.role === 'user' ? 'STRATEGIC INQUIRY' : 'EXPERT ANALYSIS'}</span>
              </div>
              <div className="text-[13px] leading-relaxed font-medium whitespace-pre-wrap">
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start animate-pulse">
            <div className="bg-white border border-slate-200 p-5 rounded-3xl flex items-center space-x-4 shadow-sm">
              <div className="flex space-x-1 items-center">
                 <div className="w-2 h-2 bg-[#C29D6F] rounded-full animate-bounce"></div>
                 <div className="w-2 h-2 bg-[#C29D6F] rounded-full animate-bounce delay-75"></div>
                 <div className="w-2 h-2 bg-[#C29D6F] rounded-full animate-bounce delay-150"></div>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Architecting...</span>
            </div>
          </div>
        )}
      </div>

      {/* Premium Input Section */}
      <div className="p-6 border-t bg-white shrink-0 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] pb-10">
        <div className="flex space-x-3 bg-slate-100 p-3 rounded-[2rem] focus-within:ring-2 focus-within:ring-[#C29D6F]/40 focus-within:bg-white transition-all shadow-inner">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
            placeholder="Ask about DIME, X-Curve, or Tax-Free growth..." 
            className="flex-1 bg-transparent px-4 py-2 text-[13px] font-medium focus:outline-none placeholder:text-slate-400" 
          />
          <button 
            onClick={handleSend} 
            disabled={isLoading || !input.trim()} 
            className="p-3.5 bg-[#1D3A5F] text-white rounded-2xl shadow-xl hover:bg-[#152a45] active:scale-95 transition-all disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
