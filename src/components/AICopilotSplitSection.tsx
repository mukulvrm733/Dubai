import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AICopilotSplitSection = () => {
  const bullets = [
    'Automated code generation based on natural language prompts.',
    'Intelligent bug detection and real-time security scanning.',
    'Context-aware refactoring suggestions for cleaner architecture.',
    'Seamless integration with your existing CI/CD pipelines.'
  ];

  return (
    <section id="solutions" className="section-padding container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[84px] items-center">
        
        {/* Left Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-[560px] mx-auto lg:mx-0 relative"
        >
          <div className="aspect-square rounded-[24px] bg-gradient-to-br from-[#1A2238] to-[#0A0E1A] border border-white/10 shadow-2xl overflow-hidden relative p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg">
                AI
              </div>
              <div>
                <div className="text-white font-semibold">Copilot Assistant</div>
                <div className="text-sm text-[#AAB1C3]">Analyzing codebase...</div>
              </div>
            </div>
            
            <div className="flex-1 bg-black/40 rounded-xl border border-white/5 p-4 font-mono text-sm text-[#AAB1C3] overflow-hidden flex flex-col gap-2">
              <div className="text-[#7B7CFF]">{`// Generating optimized sorting algorithm`}</div>
              <div>{`function quickSort(arr) {`}</div>
              <div className="pl-4">{`if (arr.length <= 1) return arr;`}</div>
              <div className="pl-4">{`const pivot = arr[0];`}</div>
              <div className="pl-4">{`const left = arr.slice(1).filter(x => x < pivot);`}</div>
              <div className="pl-4">{`const right = arr.slice(1).filter(x => x >= pivot);`}</div>
              <div className="pl-4">{`return [...quickSort(left), pivot, ...quickSort(right)];`}</div>
              <div>{`}`}</div>
              <div className="mt-4 text-[#00FF66]">{`> Optimization complete. Time complexity: O(n log n)`}</div>
            </div>
          </div>
          
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#7B7CFF]/20 blur-[80px] -z-10 rounded-full" />
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-[480px] mx-auto lg:mx-0"
        >
          <h2 className="text-[32px] md:text-[46px] font-bold mb-[24px] tracking-tight leading-tight">
            Write code at the speed of thought
          </h2>
          
          <p className="text-[#AAB1C3] text-lg mb-[40px] leading-relaxed">
            Our AI Copilot understands your codebase context and helps you write better code, faster. It's like having a senior engineer pairing with you 24/7.
          </p>
          
          <ul className="flex flex-col gap-[14px]">
            {bullets.map((bullet, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="text-[#7B7CFF] shrink-0 mt-1" size={20} />
                <span className="text-[#C7CBD6] leading-relaxed">{bullet}</span>
              </motion.li>
            ))}
          </ul>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-[48px] h-[52px] px-[28px] rounded-full gradient-bg text-white font-semibold"
          >
            Explore AI Features
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default AICopilotSplitSection;
