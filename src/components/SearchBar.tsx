
import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight, Phone, Mail, Link as LinkIcon, Briefcase } from 'lucide-react';
import { APP_DATA } from '../constants';
import { ServiceItem } from '../types';

interface SearchBarProps {
  onServiceSelect: (service: ServiceItem) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onServiceSelect }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
  };

  const normalizedQuery = query.toLowerCase().trim();

  const filteredServices = normalizedQuery 
    ? APP_DATA.services.filter(s => 
        s.title.toLowerCase().includes(normalizedQuery) || 
        s.description.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const contactOptions = [
    { label: 'Phone', value: APP_DATA.phone, icon: <Phone size={14} />, link: `tel:${APP_DATA.phone}` },
    { label: 'Email', value: APP_DATA.email, icon: <Mail size={14} />, link: `mailto:${APP_DATA.email}` },
    { label: 'LinkedIn', value: 'Jackson Latimore', icon: <LinkIcon size={14} />, link: APP_DATA.links.linkedin },
    { label: 'Booking', value: 'Schedule a Review', icon: <LinkIcon size={14} />, link: APP_DATA.links.booking },
  ];

  const filteredContacts = normalizedQuery
    ? contactOptions.filter(c => 
        c.label.toLowerCase().includes(normalizedQuery) || 
        c.value.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const hasResults = filteredServices.length > 0 || filteredContacts.length > 0;

  return (
    <div ref={containerRef} className="relative w-full px-8 -mt-6 z-30">
      <div className={`flex items-center bg-white border-2 transition-all duration-300 rounded-2xl shadow-xl overflow-hidden ${isOpen && query ? 'border-[#C29D6F] ring-4 ring-[#C29D6F]/10' : 'border-slate-100'}`}>
        <div className="pl-4 text-slate-400">
          <Search size={18} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search services or contact info..."
          className="flex-1 py-4 px-4 text-sm font-medium focus:outline-none placeholder:text-slate-300"
        />
        {query && (
          <button onClick={clearSearch} className="pr-4 text-slate-400 hover:text-[#1D3A5F]">
            <X size={18} />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && query && (
        <div className="absolute top-full left-8 right-8 mt-2 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 max-h-[400px] overflow-y-auto custom-scrollbar">
          {!hasResults ? (
            <div className="p-8 text-center">
              <p className="text-slate-400 text-sm">No matches found for "{query}"</p>
              <button 
                onClick={clearSearch}
                className="mt-2 text-[#C29D6F] text-xs font-bold uppercase tracking-widest"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="py-4">
              {filteredServices.length > 0 && (
                <div className="mb-4">
                  <h4 className="px-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#C29D6F] mb-2">Services</h4>
                  {filteredServices.map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onServiceSelect(service);
                        clearSearch();
                      }}
                      className="w-full flex items-center px-6 py-3 hover:bg-slate-50 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[#1D3A5F] mr-3 group-hover:bg-[#1D3A5F] group-hover:text-white transition-all">
                        <Briefcase size={14} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-[#1D3A5F]">{service.title}</div>
                        <div className="text-[10px] text-slate-400 line-clamp-1">{service.description}</div>
                      </div>
                      <ChevronRight size={14} className="text-slate-300 group-hover:text-[#C29D6F]" />
                    </button>
                  ))}
                </div>
              )}

              {filteredContacts.length > 0 && (
                <div>
                  <h4 className="px-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#C29D6F] mb-2">Contact</h4>
                  {filteredContacts.map((contact, idx) => (
                    <a
                      key={idx}
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="w-full flex items-center px-6 py-3 hover:bg-slate-50 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#C29D6F]/10 flex items-center justify-center text-[#C29D6F] mr-3 group-hover:bg-[#C29D6F] group-hover:text-white transition-all">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-black text-[#1D3A5F] uppercase tracking-tighter">{contact.label}</div>
                        <div className="text-sm text-slate-600 font-medium">{contact.value}</div>
                      </div>
                      <ChevronRight size={14} className="text-slate-300 group-hover:text-[#C29D6F]" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
