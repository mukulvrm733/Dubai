import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does the AI Copilot work?',
    answer: 'Our AI Copilot analyzes your codebase context and uses advanced machine learning models to suggest code completions, detect bugs, and offer refactoring advice in real-time as you type.'
  },
  {
    question: 'Is my code secure?',
    answer: 'Yes, absolutely. We use enterprise-grade encryption for all data in transit and at rest. Your code is never used to train our public models without your explicit consent.'
  },
  {
    question: 'Can I integrate with my existing CI/CD pipeline?',
    answer: 'We offer seamless integrations with popular CI/CD tools like GitHub Actions, GitLab CI, Jenkins, and CircleCI. You can set up automated deployments in minutes.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide 24/7 email support for all paid plans. Pro and Enterprise customers also get access to priority support queues and dedicated account managers.'
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes, we offer a 14-day free trial on our Pro plan so you can experience the full power of our platform before committing.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding container-custom">
      <div className="text-center mb-[64px]">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-[46px] font-bold mb-[18px] tracking-tight"
        >
          Frequently asked questions
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#AAB1C3] text-lg md:text-xl max-w-[640px] mx-auto leading-relaxed"
        >
          Everything you need to know about the product and billing.
        </motion.p>
      </div>

      <div className="max-w-[800px] mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="mb-[14px] rounded-[18px] bg-white/[0.02] border border-white/[0.05] overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-[26px] flex items-center justify-between focus:outline-none"
            >
              <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="shrink-0 text-[#AAB1C3]"
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-[26px] pb-[26px] pt-0 text-[#AAB1C3] leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
