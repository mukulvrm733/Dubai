import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -40]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -80]);

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: 'easeOut' }
  };

  return (
    <section className="min-h-[94vh] flex items-center relative overflow-hidden pt-[84px]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7B7CFF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center max-w-[520px] mx-auto lg:mx-0 text-center lg:text-left pt-12 lg:pt-0"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.12 } }
          }}
        >
          <motion.h1 
            variants={fadeUp}
            className="text-[40px] sm:text-[54px] xl:text-[74px] leading-[1.1] sm:leading-[1.1] xl:leading-[82px] tracking-[-1.6px] font-bold mb-[26px]"
          >
            Build faster with <br className="hidden lg:block" />
            <span className="gradient-text">AI Copilot</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUp}
            className="text-[18px] sm:text-[20px] leading-[32px] text-[#AAB1C3] mb-[42px]"
          >
            Automate your workflow, generate code instantly, and deploy with confidence. The future of software development is here.
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-[16px]"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-[52px] px-[28px] rounded-full gradient-bg text-white font-semibold flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Start for free <ArrowRight size={18} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="h-[52px] px-[28px] rounded-full border border-white/20 text-white font-semibold flex items-center gap-2 w-full sm:w-auto justify-center transition-colors"
            >
              <Play size={18} className="fill-white" /> Watch demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <div className="lg:col-span-6 xl:col-span-7 relative h-[500px] lg:h-[700px] w-full max-w-[640px] mx-auto hidden md:block mt-12 lg:mt-0">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-[10%] right-[5%] w-[80%] h-[60%] bg-[#12182B] rounded-[22px] border border-white/10 shadow-[0_50px_120px_rgba(0,0,0,0.6)] overflow-hidden z-10"
          >
            {/* Mockup UI Header */}
            <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-[#406a30]/80" />
            </div>
            {/* Mockup UI Body */}
            <div className="p-6 flex flex-col gap-4">
              <div className="w-3/4 h-8 bg-white/5 rounded-lg" />
              <div className="w-full h-32 bg-white/5 rounded-lg" />
              <div className="w-1/2 h-8 bg-white/5 rounded-lg" />
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-[15%] left-[0%] w-[60%] h-[45%] bg-[#1A2238] rounded-[22px] border border-white/10 shadow-[0_50px_120px_rgba(0,0,0,0.6)] overflow-hidden z-20 flex flex-col"
          >
            <div className="p-5 border-b border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div>
                <div className="w-24 h-4 bg-white/10 rounded mb-2" />
                <div className="w-16 h-3 bg-white/5 rounded" />
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col gap-3">
              <div className="w-full h-12 bg-white/5 rounded-lg" />
              <div className="w-5/6 h-12 bg-white/5 rounded-lg" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
