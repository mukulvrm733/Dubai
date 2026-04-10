import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, TrendingUp } from 'lucide-react';

const DashboardAnalyticsStrip = () => {
  const cards = [
    {
      title: 'Active Users',
      value: '124,592',
      change: '+14.5%',
      icon: Users,
      color: '#7B7CFF'
    },
    {
      title: 'Revenue MRR',
      value: '$84,290',
      change: '+8.2%',
      icon: TrendingUp,
      color: '#00E5FF'
    },
    {
      title: 'System Uptime',
      value: '99.99%',
      change: 'Stable',
      icon: Activity,
      color: '#00FF66'
    }
  ];

  return (
    <section className="relative w-full py-[120px] overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7B7CFF]/15 via-[#0A0E1A] to-[#0A0E1A] -z-10" />

      <div className="container-custom">
        <div className="text-center mb-[64px]">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-[46px] font-bold mb-[18px] tracking-tight"
          >
            Real-time actionable insights
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#AAB1C3] text-lg md:text-xl max-w-[640px] mx-auto leading-relaxed"
          >
            Monitor your application's performance, user engagement, and revenue metrics all in one unified dashboard.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-[26px] rounded-[20px] bg-white/[0.03] border border-white/[0.08] shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-6">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${card.color}20` }}
                >
                  <card.icon size={24} color={card.color} />
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${card.change.startsWith('+') ? 'text-green-400 bg-green-400/10' : 'text-blue-400 bg-blue-400/10'}`}>
                  {card.change}
                </div>
              </div>
              
              <div className="text-[#AAB1C3] text-sm font-medium mb-2 uppercase tracking-wider">
                {card.title}
              </div>
              <div className="text-[32px] font-bold text-white tracking-tight">
                {card.value}
              </div>
              
              {/* Mini Sparkline Placeholder */}
              <div className="mt-6 h-12 w-full flex items-end gap-1 opacity-50">
                {[40, 60, 45, 80, 55, 90, 75, 100].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 rounded-t-sm"
                    style={{ height: `${h}%`, backgroundColor: card.color }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardAnalyticsStrip;
