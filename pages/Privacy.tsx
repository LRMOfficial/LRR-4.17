import React from 'react';
import { motion } from 'motion/react';
import PrivacyContent from '../components/PrivacyContent';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-12">
      <div className="space-y-6 text-center md:text-left">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="inline-block bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
        >
          Legal Compliance//
        </motion.div>
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-white">
          PRIVACY<br/><span className="text-brand-blue">POLICY//</span>
        </h2>
        <p className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase">Effective Date: April 18, 2026</p>
      </div>

      <PrivacyContent />

      <div className="pt-20 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.5em] italic">
          Life Row Records. Pure Intention. No Noise.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
