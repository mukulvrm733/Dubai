import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: '/month',
      description: 'Perfect for side projects and learning.',
      features: [
        'Up to 3 projects',
        'Community support',
        'Basic analytics',
        '1GB storage',
        '100 deployments/mo'
      ],
      popular: false,
      buttonText: 'Get Started Free'
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'For professional developers and small teams.',
      features: [
        'Unlimited projects',
        'Priority email support',
        'Advanced analytics',
        '50GB storage',
        'Unlimited deployments',
        'Custom domains',
        'Team collaboration'
      ],
      popular: true,
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations with complex needs.',
      features: [
        'Everything in Pro',
        '24/7 phone support',
        'Dedicated account manager',
        '1TB storage',
        'SSO & SAML',
        'Custom SLAs',
        'On-premise deployment'
      ],
      popular: false,
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="section-padding container-custom">
      <div className="text-center mb-[64px]">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-[46px] font-bold mb-[18px] tracking-tight"
        >
          Simple, transparent pricing
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#AAB1C3] text-lg md:text-xl max-w-[640px] mx-auto leading-relaxed"
        >
          Choose the plan that best fits your needs. No hidden fees, cancel anytime.
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-[28px]">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`w-full max-w-[350px] p-[40px] rounded-[24px] flex flex-col relative ${
              plan.popular 
                ? 'bg-[#1A2238] border-[2px] border-[#7B7CFF] shadow-[0_30px_60px_rgba(123,124,255,0.2)] lg:scale-[1.06] z-10' 
                : 'bg-white/[0.04] border border-white/[0.08]'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7B7CFF] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                Most Popular
              </div>
            )}
            
            <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
            <p className="text-[#AAB1C3] text-sm mb-6">{plan.description}</p>
            
            <div className="flex items-baseline mb-[18px]">
              <span className="text-[58px] font-bold text-white leading-none tracking-tight">{plan.price}</span>
              <span className="text-[#AAB1C3] ml-2">{plan.period}</span>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full h-[52px] rounded-full font-semibold mb-8 transition-colors ${
                plan.popular 
                  ? 'gradient-bg text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {plan.buttonText}
            </motion.button>
            
            <div className="flex-1 flex flex-col gap-4">
              <div className="text-sm font-medium text-white mb-2">What's included:</div>
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-[#7B7CFF] shrink-0 mt-0.5" />
                  <span className="text-[#AAB1C3] text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
