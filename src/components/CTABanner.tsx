import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="container-custom py-[64px] lg:py-[112px]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-[300px] rounded-[28px] relative overflow-hidden flex flex-col items-center justify-center text-center px-6"
      >
        {/* Background */}
        <div className="absolute inset-0 gradient-bg opacity-90 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay z-0" />
        
        {/* Content */}
        <div className="relative z-10 max-w-[640px] mx-auto">
          <h2 className="text-[32px] md:text-[42px] font-bold text-white mb-4 tracking-tight leading-tight">
            Ready to supercharge your workflow?
          </h2>
          <p className="text-white/80 text-lg mb-[28px]">
            Join thousands of developers building the future with our platform.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-[52px] px-[32px] rounded-full bg-white text-[#0A0E1A] font-bold flex items-center gap-2 mx-auto shadow-xl"
          >
            Get Started for Free <ArrowRight size={18} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
