import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Bell, ShieldCheck } from 'lucide-react';

const MobileAppSection = () => {
  return (
    <section id="resources" className="section-padding container-custom overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[84px] items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-[480px] mx-auto lg:mx-0 mt-[40px]"
        >
          <h2 className="text-[32px] md:text-[46px] font-bold mb-[24px] tracking-tight leading-tight">
            Manage everything on the go
          </h2>
          
          <p className="text-[#AAB1C3] text-lg mb-[40px] leading-relaxed">
            Download our mobile app to monitor deployments, review pull requests, and manage your team from anywhere in the world.
          </p>
          
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#7B7CFF]/20 flex items-center justify-center shrink-0">
                <Smartphone size={24} className="text-[#7B7CFF]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Native Experience</h3>
                <p className="text-[#AAB1C3] leading-relaxed">Built natively for iOS and Android for maximum performance and fluid animations.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/20 flex items-center justify-center shrink-0">
                <Bell size={24} className="text-[#00E5FF]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Push Notifications</h3>
                <p className="text-[#AAB1C3] leading-relaxed">Get instant alerts for critical errors, deployment status, and team mentions.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00FF66]/20 flex items-center justify-center shrink-0">
                <ShieldCheck size={24} className="text-[#00FF66]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Biometric Security</h3>
                <p className="text-[#AAB1C3] leading-relaxed">Secure your account with Face ID or Touch ID for frictionless authentication.</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-[48px]">
            {/* App Store Badges Placeholders */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-[52px] px-6 rounded-xl bg-white/10 border border-white/20 flex items-center gap-3 hover:bg-white/20 transition-colors"
            >
              <div className="text-left">
                <div className="text-[10px] text-[#AAB1C3] uppercase tracking-wider">Download on the</div>
                <div className="text-lg font-semibold text-white leading-none">App Store</div>
              </div>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-[52px] px-6 rounded-xl bg-white/10 border border-white/20 flex items-center gap-3 hover:bg-white/20 transition-colors"
            >
              <div className="text-left">
                <div className="text-[10px] text-[#AAB1C3] uppercase tracking-wider">Get it on</div>
                <div className="text-lg font-semibold text-white leading-none">Google Play</div>
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full flex justify-center lg:justify-end relative"
        >
          {/* Phone Frame */}
          <div className="w-[300px] h-[620px] rounded-[40px] border-[8px] border-[#1A2238] bg-[#0A0E1A] shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-[#1A2238] rounded-b-[16px] z-20" />
            
            {/* Phone Screen Content */}
            <div className="flex-1 overflow-hidden relative pt-12 px-4 pb-6 flex flex-col gap-4">
              <div className="flex justify-between items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-white/10" />
                <div className="w-8 h-8 rounded-full bg-white/10" />
              </div>
              
              <div className="w-3/4 h-8 bg-white/10 rounded-lg" />
              <div className="w-1/2 h-4 bg-white/5 rounded-lg mb-4" />
              
              {/* List items */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7B7CFF]/20" />
                  <div className="flex-1">
                    <div className="w-full h-4 bg-white/10 rounded mb-2" />
                    <div className="w-2/3 h-3 bg-white/5 rounded" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom Bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/20 rounded-full z-20" />
          </div>
          
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00E5FF]/10 blur-[100px] -z-10 rounded-full" />
        </motion.div>

      </div>
    </section>
  );
};

export default MobileAppSection;
