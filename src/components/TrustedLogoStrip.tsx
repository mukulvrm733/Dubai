import React from 'react';
import { motion } from 'framer-motion';

const TrustedLogoStrip = () => {
  const logos = [
    { name: 'Acme Corp', id: 1 },
    { name: 'GlobalTech', id: 2 },
    { name: 'Nexus', id: 3 },
    { name: 'Quantum', id: 4 },
    { name: 'Stark Ind', id: 5 },
  ];

  return (
    <section className="h-[130px] w-full border-y border-white/5 bg-white/[0.01] flex items-center justify-center overflow-hidden">
      <div className="container-custom flex items-center justify-center flex-wrap gap-[30px] md:gap-[60px]">
        {logos.map((logo) => (
          <motion.div
            key={logo.id}
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          >
            <span className="text-xl md:text-2xl font-bold text-white tracking-wider uppercase opacity-80">
              {logo.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustedLogoStrip;
