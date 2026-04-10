import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0E1A]/70 backdrop-blur-[14px]' : 'bg-transparent'
      }`}
      style={{ height: '84px' }}
    >
      <div className="container-custom h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center font-bold text-white">
            S
          </div>
          <span className="font-bold text-xl tracking-tight">SaaSify</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[34px]">
          {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[15px] font-medium text-text-nav hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#login" className="text-[15px] font-medium text-text-nav hover:text-white transition-colors">
            Log in
          </a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-[44px] px-[22px] rounded-full gradient-bg text-[15px] font-semibold text-white"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-text-nav"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[84px] left-0 right-0 bg-[#0A0E1A] border-t border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[15px] font-medium text-text-nav p-2 hover:bg-white/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <a href="#login" className="text-[15px] font-medium text-text-nav p-2">
            Log in
          </a>
          <button className="h-[44px] px-[22px] rounded-full gradient-bg text-[15px] font-semibold text-white w-full mt-2">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
