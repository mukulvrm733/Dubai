import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Globe, Layers, BarChart } from 'lucide-react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Experience unparalleled speed with our optimized edge network and advanced caching algorithms.',
    icon: Zap,
    color: '#FFB800'
  },
  {
    title: 'Bank-grade Security',
    description: 'Your data is protected by enterprise-level encryption and continuous security monitoring.',
    icon: Shield,
    color: '#00E5FF'
  },
  {
    title: 'AI-Powered Insights',
    description: 'Leverage machine learning to uncover hidden patterns and actionable intelligence from your data.',
    icon: Cpu,
    color: '#7B7CFF'
  },
  {
    title: 'Global Scale',
    description: 'Deploy instantly to over 200 edge locations worldwide with zero configuration required.',
    icon: Globe,
    color: '#FF4D4D'
  },
  {
    title: 'Seamless Integration',
    description: 'Connect with your favorite tools using our comprehensive API and pre-built connectors.',
    icon: Layers,
    color: '#00FF66'
  },
  {
    title: 'Real-time Analytics',
    description: 'Monitor performance and user behavior with sub-second latency dashboards.',
    icon: BarChart,
    color: '#FF00E5'
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="section-padding container-custom">
      <div className="flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-[46px] font-bold mb-[18px] tracking-tight"
        >
          Everything you need to scale
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#AAB1C3] text-lg md:text-xl max-w-[640px] mb-[64px] leading-relaxed"
        >
          Our platform provides a comprehensive suite of tools designed to help you build, deploy, and manage applications faster than ever before.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="p-[34px] rounded-[22px] bg-white/[0.04] border border-white/[0.08] transition-transform duration-[450ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
          >
            <div 
              className="w-[50px] h-[50px] rounded-[16px] flex items-center justify-center mb-[22px]"
              style={{ backgroundColor: `${feature.color}20` }}
            >
              <feature.icon size={24} color={feature.color} />
            </div>
            
            <h3 className="text-[20px] font-semibold mb-[12px] text-white">
              {feature.title}
            </h3>
            
            <p className="text-[#AAB1C3] leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
