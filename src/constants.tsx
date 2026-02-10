
import React from 'react';
import { 
  PiggyBank, 
  ShieldCheck, 
  GraduationCap, 
  Clock, 
  Heart, 
  Network, 
  HeartPulse, 
  TrendingUp, 
  Home, 
  Factory 
} from 'lucide-react';
import { AppData } from './types';

export const APP_DATA: AppData = {
  name: "Jackson M. Latimore Sr.",
  title: "Founder & CEO",
  company: "Latimore Life & Legacy LLC",
  license: "PA License #1268820",
  tagline: "Protecting Today. Securing Tomorrow.",
  hashtag: "#TheBeatGoesOn",
  bio: "To empower every family with the financial tools and protection strategies necessary to turn hard work into a lasting legacy, ensuring financial security is a foundation for generations to come.",
  phone: "(856) 895-1457",
  email: "jackson1989@latimorelegacy.com",
  bannerUrl: "https://jackson1989-design.github.io/latimore-life-legacy-site/hero.jpg",
  links: {
    main: "https://jackson1989-design.github.io/latimore-life-legacy-site/",
    ethos: "https://agents.ethoslife.com/invite/29ad1",
    booking: "https://globalfinancialimpact.fillout.com/t/tMz7ZcqpaZus",
    linkedin: "https://www.linkedin.com/in/startwithjacksongfi/",
    facebook: "https://www.facebook.com/LatimoreLegacyLLC",
    instagram: "https://www.instagram.com/jacksonlatimore.global"
  },
  services: [
    { 
      title: "Wealth Accumulation", 
      icon: <PiggyBank size={24} />,
      description: "Build a robust financial engine using tax-advantaged growth vehicles like Indexed Universal Life (IUL) and modern annuities.",
      detailedDescription: "THE 0% TAX BRACKET STRATEGY: Most families save in 'Tax-Later' accounts (401k/IRA), which essentially gives the government a lien on your retirement harvest. Our wealth accumulation strategy focuses on the 'Tax-Never' bucket. By utilizing Indexed Universal Life (IUL) policies, we engineer a tax-free retirement bucket that provides participation in market gains while offering a contractual 0% floor against market losses. This ensures your principal and previous gains are locked in annually, protecting your purchasing power from future tax hikes."
    },
    { 
      title: "Asset Protection", 
      icon: <ShieldCheck size={24} />,
      description: "Implement legal and financial safeguards to protect your hard-earned assets from market volatility and creditors.",
      detailedDescription: "THE VOLATILITY SHIELD: Market volatility is the primary threat to a successful legacy. Asset protection is about building a wall around your foundation. We use specialized insurance contracts and financial structures that are often shielded from creditors and legal judgments. By diversifying out of high-risk taxable accounts into protected vehicles, we provide a 0% floor—meaning when the market drops, your principal is 100% protected. You participate in the growth without ever having to earn back a loss."
    },
    { 
      title: "Education Funds", 
      icon: <GraduationCap size={24} />,
      description: "Create flexible, tax-free education funding solutions that go beyond the limitations and restrictions of traditional 529 plans.",
      detailedDescription: "INFINITE BANKING FOR EDUCATION: Traditional college funds (529s) are often restrictive and count against financial aid. We utilize tax-advantaged accumulation tools to create a tax-free cash pile for your children. These funds can be used for any purpose—education, a first home, or a business start-up—and guarantee their insurability for life. This 'Generational Wealth Start' gives your children a financial head start that compounds for decades without the red tape of government plans."
    },
    { 
      title: "Debt Management", 
      icon: <Clock size={24} />,
      description: "Eliminate high-interest debt and pay off your mortgage in record time using a specialized mathematical payoff strategy.",
      detailedDescription: "THE PRIVATE FAMILY BANK: Debt creates an interest drag on your legacy. Our 'Debt-Free Life' program uses a powerful mathematical algorithm to redirect interest waste back into your own pocket. By utilizing the 'banking' features of certain insurance contracts, we help you eliminate all consumer debt—including your mortgage—in an average of 9 years or less, without spending any more money than you are currently spending today. Redirect the interest you pay to banks back into your own Private Bank."
    },
    { 
      title: "Life Insurance", 
      icon: <Heart size={24} />,
      description: "Secure your family's future with modern life insurance policies that provide both death protection and living utility.",
      detailedDescription: "HUMAN LIFE VALUE ARCHITECTURE: Life insurance has evolved into a multi-generational wealth tool. We offer a full spectrum of solutions focusing on the X-Curve Theory—decreasing responsibility over time while increasing wealth. Whether it's term coverage for immediate protection or permanent cash-value policies for legacy building, we tailor every contract to ensure your family's lifestyle is fully protected. We calculate your exact need using the DIME Method: Debt, Income, Mortgage, and Education."
    },
    { 
      title: "Living Benefits", 
      icon: <Network size={24} />,
      description: "Access your policy's death benefit while you're still alive in the event of a critical, chronic, or terminal illness.",
      detailedDescription: "MODERN PROTECTION FOR THE LIVING: Most people think life insurance only pays when you pass away. Modern 'Living Benefits' change that. If you face a major health crisis like a heart attack, stroke, or cancer, you can access your death benefit while alive. This provides the immediate liquidity needed for home care, experimental treatments, or replacing lost income without exhausting your family's savings. Your health should never be a financial catastrophe."
    },
    { 
      title: "Estate Planning", 
      icon: <HeartPulse size={24} />,
      description: "Coordinate a seamless, tax-efficient transfer of wealth to your heirs while avoiding the delays and costs of probate.",
      detailedDescription: "THE LEGACY PORTRAIT: A legacy without a plan is just a wish. Estate planning ensures your values and assets transition to the next generation without the delay and cost of probate (which can take 12-18 months). We focus on estate liquidity—ensuring your heirs have the immediate cash needed to pay final expenses and potential taxes (especially with the TCJA 2026 Sunset) without being forced to sell off family property or assets at a discount."
    },
    { 
      title: "Indexed Growth", 
      icon: <TrendingUp size={24} />,
      description: "Achieve stock market-linked returns with a guaranteed '0% Floor'—meaning you gain when the market grows but never lose principal.",
      detailedDescription: "THE POWER OF ANNUAL RESET: Indexed strategies provide market-linked growth without market-linked risk. Through the 'Annual Reset' feature, your gains are locked in every year. If the index drops the following year, you start from the previous high, not the bottom. You capture the upside of market growth linked to major indices (like the S&P 500) while a contractual 0% floor protects you from every single market downturn."
    },
    { 
      title: "Mortgage Protection", 
      icon: <Home size={24} />,
      description: "Ensure your family's home is paid off and secure even if the primary breadwinner is no longer able to provide.",
      detailedDescription: "SECURE HOUSING & THE DIME METHOD: Your home is likely your family's largest asset and their sanctuary. Our mortgage protection plans are designed to pay off your mortgage balance or cover your monthly payments in the event of death, disability, or a critical illness. We use the DIME formula to calculate exactly how much is needed to clear your deed, ensuring that your family never has to face a foreclosure during an already difficult life transition."
    },
    { 
      title: "Business Strategies", 
      icon: <Factory size={24} />,
      description: "Protect your business and retain top talent with key person insurance, buy-sell funding, and executive bonus plans.",
      detailedDescription: "BUSINESS CONTINUITY & KEY PERSON: For the business owner, we offer sophisticated risk management and retention tools. This includes 'Key Person' insurance to protect against the loss of vital staff and 'Buy-Sell' agreement funding to ensure a smooth ownership transition. We also design 'Section 162' Executive Bonus plans that use tax-advantaged life insurance to attract and keep elite employees, allowing business owners to reward key talent while building business equity."
    }
  ]
};

export const PRODUCT_KNOWLEDGE = `
ULTIMATE PROFESSIONAL LEGACY ARCHITECTURE & TECHNICAL DATABASE:

1. THE DIME METHOD:
- Debt: Total consumer debt payoff requirements.
- Income: 10x annual salary for family lifestyle maintenance.
- Mortgage: Total remaining balance on the primary residence.
- Education: Future funding requirements for all children.

2. THE X-CURVE THEORY:
- The Law of Decreasing Responsibility: High need for protection in early life (debt, children, mortgage).
- The Law of Increasing Wealth: High need for asset accumulation in later life (retirement, legacy).
- We bridge these two lines with modern, flexible insurance contracts.

3. THE RULE OF 72:
- A mathematical formula to estimate the number of years required to double your money at a given annual rate of return (72 / interest rate = years to double).

4. TAX DOCTRINE (IRC CODES):
- IRC Section 101(a): Death benefits are generally income tax-free.
- IRC Section 72(e): FIFO tax treatment for cash value withdrawals.
- IRC Section 7702: The definition of life insurance for tax purposes.

5. VOLATILITY BUFFER:
- Using cash value as a non-correlated asset to preserve retirement portfolios during market corrections, preventing the 'Sequence of Returns' risk.
`;

export const COLORS = {
  navy: '#1D3A5F',
  gold: '#C29D6F',
  slate: '#64748b'
};
