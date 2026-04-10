import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Plane, 
  DollarSign, 
  ArrowRight, 
  Menu, 
  X,
  CheckCircle2,
  Phone,
  Mail,
  ChevronRight,
  Star
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className={`w-8 h-8 ${isScrolled ? 'text-brand-900' : 'text-white'}`} />
          <span className={`text-xl font-serif font-bold tracking-tight ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
            Dubai<span className="text-gold-500">Estates</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Properties', 'Why Dubai', 'US Investors', 'Process'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-sm font-medium transition-colors hover:text-gold-500 ${isScrolled ? 'text-brand-800' : 'text-white/90'}`}
            >
              {item}
            </a>
          ))}
          <button className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-gold-500/20">
            Get Consultation
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-brand-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-brand-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 md:hidden flex flex-col gap-4"
          >
            {['Properties', 'Why Dubai', 'US Investors', 'Process'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-brand-800 font-medium p-2 hover:bg-gray-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-gold-500 text-white px-6 py-3 rounded-xl font-semibold w-full mt-2">
              Get Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000" 
          alt="Dubai Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/70 to-transparent" />
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="flex h-2 w-2 rounded-full bg-gold-500"></span>
            <span className="text-xs font-semibold text-white uppercase tracking-wider">Tailored for US Investors</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Diversify Your Portfolio with <span className="text-gold-500">Dubai Real Estate</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
            Secure tax-free returns, a USD-pegged currency, and world-class luxury properties. The ultimate safe haven for American wealth.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2 shadow-xl shadow-gold-500/20">
              View Properties <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-md">
              Download US Guide
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
            <div>
              <div className="text-3xl font-bold text-white mb-1">0%</div>
              <div className="text-sm text-white/70">Property Tax</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">8-10%</div>
              <div className="text-sm text-white/70">Avg. Rental Yield</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">Fixed</div>
              <div className="text-sm text-white/70">USD Pegged (3.67)</div>
            </div>
          </div>
        </motion.div>

        {/* Lead Capture Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="glass-card rounded-3xl p-8 max-w-md ml-auto">
            <h3 className="text-2xl font-serif font-bold text-brand-900 mb-2">Speak to a US Specialist</h3>
            <p className="text-brand-800/70 mb-6 text-sm">Get a curated list of high-yield properties tailored to American investors.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-brand-900 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-white/90" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-900 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-white/90" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-900 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-white/90" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-900 mb-1">Investment Budget (USD)</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-white/90">
                  <option>Under $500k</option>
                  <option>$500k - $1M</option>
                  <option>$1M - $2.5M</option>
                  <option>$2.5M+</option>
                </select>
              </div>
              <button className="w-full bg-brand-900 hover:bg-brand-800 text-white py-4 rounded-xl font-semibold text-lg transition-all mt-2 shadow-lg">
                Request Portfolio
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustedDevelopers = () => {
  const developers = [
    "EMAAR", "DAMAC", "NAKHEEL", "SOBHA", "MERAAS", "OMNIYAT", "BINGHATTI"
  ];

  return (
    <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container-custom mb-6 text-center">
        <p className="text-sm font-semibold text-brand-800/50 uppercase tracking-widest">Partnering with Dubai's Premium Developers</p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...developers, ...developers, ...developers].map((dev, idx) => (
            <span key={idx} className="mx-12 text-2xl font-serif font-bold text-brand-900/20 uppercase tracking-wider">
              {dev}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyDubaiForUS = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-gold-500" />,
      title: "USD Pegged Currency",
      description: "The UAE Dirham (AED) has been pegged to the US Dollar at 3.67 since 1997, eliminating currency exchange risk for American investors."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold-500" />,
      title: "Tax-Free Environment",
      description: "0% property tax, 0% capital gains tax, and 0% income tax. Keep 100% of your rental yields and capital appreciation."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
      title: "Highly Regulated & Secure",
      description: "The Dubai Land Department (DLD) enforces strict escrow laws, ensuring your investment funds are protected during construction."
    },
    {
      icon: <Plane className="w-6 h-6 text-gold-500" />,
      title: "10-Year Golden Visa",
      description: "Invest $545,000 (AED 2M) or more to secure a 10-year renewable residency visa for you and your immediate family."
    }
  ];

  return (
    <section id="us-investors" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-900 mb-6">Why US Investors Are Flocking to Dubai</h2>
          <p className="text-lg text-brand-800/70">
            As domestic markets face high interest rates and increasing taxes, Dubai offers a lucrative, secure, and tax-efficient alternative for American capital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{benefit.title}</h3>
              <p className="text-brand-800/70 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProperties = () => {
  const properties = [
    {
      name: "Emaar Beachfront Residences",
      location: "Dubai Harbour",
      price: "$750,000",
      yield: "8.5%",
      image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=800",
      tags: ["Waterfront", "Pre-Launch"]
    },
    {
      name: "Downtown Luxury Penthouses",
      location: "Downtown Dubai",
      price: "$2,100,000",
      yield: "7.2%",
      image: "https://images.unsplash.com/photo-1582647509711-c8aa8a8b5476?auto=format&fit=crop&q=80&w=800",
      tags: ["Burj Khalifa View", "Ready"]
    },
    {
      name: "Sobha Hartland Villas",
      location: "MBR City",
      price: "$1,450,000",
      yield: "9.1%",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      tags: ["Golf Course", "Payment Plan"]
    }
  ];

  return (
    <section id="properties" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-900 mb-4">Curated for US Portfolios</h2>
            <p className="text-lg text-brand-800/70">Exclusive access to high-yield, premium developments from Dubai's most reputable builders.</p>
          </div>
          <button className="text-gold-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View All Properties <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={prop.image} 
                  alt={prop.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {prop.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur text-brand-900 text-xs font-bold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-brand-800/60 text-sm mb-3">
                  <MapPin className="w-4 h-4" /> {prop.location}
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-4">{prop.name}</h3>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-brand-800/60 mb-1">Starting from</p>
                    <p className="text-2xl font-bold text-brand-900">{prop.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-brand-800/60 mb-1">Est. Yield</p>
                    <p className="text-xl font-bold text-gold-500">{prop.yield}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "US-Based Consultation",
      desc: "We discuss your goals, budget, and timeline via Zoom. We translate Dubai metrics into US standards (sq ft, USD, ROI)."
    },
    {
      num: "02",
      title: "Virtual Tours & Selection",
      desc: "Receive curated property options. We conduct live virtual tours of the properties and neighborhoods."
    },
    {
      num: "03",
      title: "Secure Escrow Payment",
      desc: "Sign documents digitally. Funds are wired directly to a DLD-regulated escrow account, not to the developer or agent."
    },
    {
      num: "04",
      title: "Title Deed & Management",
      desc: "Receive your Title Deed (Oqood). Our property management team handles handover, furnishing, and tenant placement."
    }
  ];

  return (
    <section id="process" className="section-padding bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Buy Remotely with Confidence</h2>
          <p className="text-lg text-white/70">
            You don't need to fly to Dubai to secure an asset. Our streamlined process is designed specifically for overseas American buyers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-gold-500/50 to-transparent -ml-4 z-0" />
              )}
              <div className="relative z-10">
                <div className="text-5xl font-serif font-bold text-gold-500/20 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-900 mb-4">Trusted by US Investors</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Michael R.",
              location: "New York, NY",
              text: "I was hesitant about buying overseas, but the process was incredibly transparent. The 9% tax-free yield easily beats my local NY properties."
            },
            {
              name: "Sarah & David T.",
              location: "San Francisco, CA",
              text: "We diversified into Dubai to escape high California taxes. The team handled everything from the wire transfer to finding a tenant."
            },
            {
              name: "James L.",
              location: "Miami, FL",
              text: "Got my Golden Visa through a $600k investment. The USD peg gives me peace of mind, and the luxury standard is unmatched."
            }
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-gold-500 text-gold-500" />)}
              </div>
              <p className="text-brand-800/80 italic mb-6">"{t.text}"</p>
              <div>
                <p className="font-bold text-brand-900">{t.name}</p>
                <p className="text-sm text-brand-800/60">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-900 text-white pt-20 pb-10 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-8 h-8 text-white" />
              <span className="text-xl font-serif font-bold tracking-tight text-white">
                Dubai<span className="text-gold-500">Estates</span>
              </span>
            </div>
            <p className="text-white/60 mb-6">
              The premier advisory for US investors seeking high-yield, tax-free real estate opportunities in Dubai.
            </p>
            <div className="flex gap-4">
              {/* Social icons would go here */}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Off-Plan Properties</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Ready Properties</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Golden Visa Guide</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Market Reports</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">US Office</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span>1 World Trade Center<br/>Suite 4500<br/>New York, NY 10007</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Dubai Office</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span>Boulevard Plaza Tower 1<br/>Downtown Dubai<br/>UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span>invest@dubaiestates.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <p>© 2026 DubaiEstates Advisory. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-gold-500/30">
      <Header />
      <main>
        <HeroSection />
        <TrustedDevelopers />
        <WhyDubaiForUS />
        <FeaturedProperties />
        <ProcessSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
