import React, { useState } from 'react';
import { 
  Mail, 
  Phone,
  MessageSquare,
  Calendar, 
  Linkedin, 
  Facebook,
  Bot,
  FileText,
  Heart,
  Search,
  X,
  Menu,
  Shield,
  TrendingUp,
  GraduationCap,
  CreditCard,
  LifeBuoy,
  HeartPulse,
  Building,
  LineChart,
  Home,
  Briefcase
} from 'lucide-react';
import Assistant from './components/Assistant';
import LegacyBlueprint from './components/LegacyBlueprint';
import LivingBenefitsGuide from './components/LivingBenefitsGuide';
import SearchBar from './components/SearchBar';
import { ServiceItem } from './types';

// Brand colors
const COLORS = {
  navy: '#0B0F17',
  gold: '#C9A25F',
  slate: '#64748b'
};

const App: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const services: ServiceItem[] = [
    { id: '1', title: 'Wealth Accumulation', icon: <TrendingUp size={20} />, description: 'Tax-advantaged growth strategies' },
    { id: '2', title: 'Asset Protection', icon: <Shield size={20} />, description: 'Rollovers and secure transfers' },
    { id: '3', title: 'Education Funds', icon: <GraduationCap size={20} />, description: 'College funding solutions' },
    { id: '4', title: 'Debt Management', icon: <CreditCard size={20} />, description: 'Strategic debt reduction' },
    { id: '5', title: 'Life Insurance', icon: <LifeBuoy size={20} />, description: 'Protection and living benefits' },
    { id: '6', title: 'Living Benefits', icon: <HeartPulse size={20} />, description: 'Access funds while living' },
    { id: '7', title: 'Estate Planning', icon: <Building size={20} />, description: 'Legacy and inheritance strategy' },
    { id: '8', title: 'Indexed Growth', icon: <LineChart size={20} />, description: 'Market-linked growth protection' },
    { id: '9', title: 'Mortgage Protection', icon: <Home size={20} />, description: 'Secure your family home' },
    { id: '10', title: 'Business Strategies', icon: <Briefcase size={20} />, description: 'Key person and succession' }
  ];

  const features = [
    { id: 'assistant', label: 'AI Assistant', icon: <Bot size={20} />, description: 'Ask me anything' },
    { id: 'blueprint', label: 'Legacy Blueprint', icon: <FileText size={20} />, description: 'Plan your legacy' },
    { id: 'benefits', label: 'Living Benefits', icon: <Heart size={20} />, description: 'Learn about benefits' },
    { id: 'search', label: 'Search Services', icon: <Search size={20} />, description: 'Find what you need' }
  ];

  const handleServiceClick = (service: ServiceItem) => {
    setActiveFeature('assistant');
    // Could pass service context to assistant
  };

  const handleSearchSelect = (service: ServiceItem) => {
    handleServiceClick(service);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0B0F17 0%, #1a1f2e 100%)',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{ 
        background: `linear-gradient(135deg, ${COLORS.navy} 0%, #1a1f2e 100%)`,
        padding: '2rem 1rem',
        textAlign: 'center',
        borderBottom: `2px solid ${COLORS.gold}`
      }}>
        <img 
          src="https://raw.githubusercontent.com/jackson1989-design/1/main/hero.png" 
          alt="Latimore Life & Legacy"
          style={{ maxWidth: '200px', margin: '0 auto 1rem', display: 'block' }}
        />
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          marginBottom: '0.5rem',
          color: COLORS.gold 
        }}>
          Jackson M. Latimore Sr.
        </h1>
        <p style={{ 
          fontSize: '1.1rem', 
          opacity: 0.9,
          marginBottom: '0.5rem'
        }}>
          Independent Financial Consultant • Latimore Life & Legacy LLC
        </p>
        <p style={{ 
          fontSize: '1rem', 
          opacity: 0.8,
          marginBottom: '1rem'
        }}>
          Schuylkill County, PA
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          justifyContent: 'center',
          fontSize: '1.1rem',
          marginTop: '1rem'
        }}>
          <span>🛡️ Protection</span>
          <span>📈 Strategy</span>
          <span>🏛️ Legacy</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ 
        padding: '1.5rem 1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '1rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <a 
          href="https://globalfinancialimpact.fillout.com/latimorelifelegacy"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: COLORS.gold,
            color: COLORS.navy,
            padding: '1rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Calendar size={20} />
          Book Consultation
        </a>
        <a 
          href="tel:+18568951457"
          style={{
            background: 'rgba(201, 162, 95, 0.1)',
            border: `2px solid ${COLORS.gold}`,
            color: COLORS.gold,
            padding: '1rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Phone size={20} />
          Call Now
        </a>
        <a 
          href="sms:+18568951457"
          style={{
            background: 'rgba(201, 162, 95, 0.1)',
            border: `2px solid ${COLORS.gold}`,
            color: COLORS.gold,
            padding: '1rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <MessageSquare size={20} />
          Text Me
        </a>
        <a 
          href="mailto:jackson1989@latimorelegacy.com"
          style={{
            background: 'rgba(201, 162, 95, 0.1)',
            border: `2px solid ${COLORS.gold}`,
            color: COLORS.gold,
            padding: '1rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Mail size={20} />
          Email
        </a>
      </div>

      {/* Interactive Features Section */}
      <div style={{ 
        padding: '2rem 1rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontSize: '1.8rem', 
          fontWeight: 'bold', 
          textAlign: 'center',
          marginBottom: '0.5rem',
          color: COLORS.gold
        }}>
          Interactive Tools & Resources
        </h2>
        <p style={{ 
          textAlign: 'center', 
          opacity: 0.8, 
          marginBottom: '2rem'
        }}>
          Explore our AI-powered tools and educational resources
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {features.map(feature => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              style={{
                background: activeFeature === feature.id 
                  ? `linear-gradient(135deg, ${COLORS.gold} 0%, #b8925a 100%)`
                  : 'rgba(255, 255, 255, 0.05)',
                border: `2px solid ${activeFeature === feature.id ? COLORS.gold : 'rgba(201, 162, 95, 0.3)'}`,
                color: activeFeature === feature.id ? COLORS.navy : '#ffffff',
                padding: '1.5rem',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                if (activeFeature !== feature.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFeature !== feature.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '0.5rem'
              }}>
                {feature.icon}
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                  {feature.label}
                </h3>
              </div>
              <p style={{ 
                fontSize: '0.9rem', 
                opacity: 0.9
              }}>
                {feature.description}
              </p>
            </button>
          ))}
        </div>

        {/* Feature Display Area */}
        {activeFeature && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '2rem',
            position: 'relative',
            border: `2px solid ${COLORS.gold}`
          }}>
            <button
              onClick={() => setActiveFeature(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                padding: '0.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>

            {activeFeature === 'assistant' && (
              <Assistant onClose={() => setActiveFeature(null)} />
            )}

            {activeFeature === 'blueprint' && (
              <LegacyBlueprint />
            )}

            {activeFeature === 'benefits' && (
              <LivingBenefitsGuide />
            )}

            {activeFeature === 'search' && (
              <SearchBar 
                services={services}
                onServiceSelect={handleSearchSelect}
              />
            )}
          </div>
        )}
      </div>

      {/* Services Grid */}
      <div style={{ 
        padding: '2rem 1rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontSize: '1.8rem', 
          fontWeight: 'bold', 
          textAlign: 'center',
          marginBottom: '2rem',
          color: COLORS.gold
        }}>
          Full Portfolio of Services
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          {services.map(service => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(201, 162, 95, 0.3)',
                padding: '1.5rem',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = COLORS.gold;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(201, 162, 95, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '0.5rem'
              }}>
                <div style={{ color: COLORS.gold }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                  {service.title}
                </h3>
              </div>
              <p style={{ 
                fontSize: '0.9rem', 
                opacity: 0.8
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* My Commitment */}
      <div style={{ 
        padding: '3rem 1rem',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '1.8rem', 
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: COLORS.gold
        }}>
          My Commitment
        </h2>
        <p style={{ 
          fontSize: '1.1rem',
          lineHeight: '1.8',
          marginBottom: '1rem'
        }}>
          <strong>I'm not here to sell products — I'm here to deliver solutions.</strong>
          <br />
          I help local families protect what they've built, grow with intention,
          and create a legacy that lasts — calmly and without pressure.
        </p>
        <p style={{ 
          fontSize: '1.3rem',
          fontWeight: 'bold',
          color: COLORS.gold,
          marginTop: '2rem'
        }}>
          Protecting Today. Securing Tomorrow.
        </p>
        <p style={{ 
          fontSize: '1.1rem',
          marginTop: '0.5rem',
          opacity: 0.9
        }}>
          #TheBeatGoesOn
        </p>
      </div>

      {/* Social Links */}
      <div style={{ 
        padding: '2rem 1rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(201, 162, 95, 0.3)'
      }}>
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          justifyContent: 'center',
          marginBottom: '1rem'
        }}>
          <a 
            href="https://www.linkedin.com/in/startwithjacksongfi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: COLORS.gold, transition: 'opacity 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <Linkedin size={32} />
          </a>
          <a 
            href="https://www.facebook.com/LatimoreLegacyLLC"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: COLORS.gold, transition: 'opacity 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <Facebook size={32} />
          </a>
        </div>
        <p style={{ 
          fontSize: '0.9rem', 
          opacity: 0.7,
          marginTop: '1rem'
        }}>
          PA DOI License #1268820 | NIPR #21638507
        </p>
      </div>
    </div>
  );
};

export default App;
