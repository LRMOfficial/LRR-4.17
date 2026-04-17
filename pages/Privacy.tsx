import React from 'react';
import { motion } from 'motion/react';

const Privacy: React.FC = () => {
  const sections = [
    {
      title: "Navigation//",
      content: "Life Row Records values your privacy as much as your vibe. This policy outlines how we handle the signals (data) you transmit to us."
    },
    {
      title: "Signal Collection//",
      content: "We collect information you choose to provide, such as your email address for our vibe updates, or information provided during merch purchases. We also collect non-personally identifiable technical data to optimize your experience on our frequency."
    },
    {
      title: "Frequency Usage//",
      content: "Your data is used solely to enhance your connection with Life Row Records—fulfilling orders, sending updates you've requested, and improving our sonic portal. We do not sell your vibes to third parties."
    },
    {
      title: "Harmony & Protection//",
      content: "We implement robust security measures to protect your information from unauthorized access or interference. We strive to maintain a pure connection."
    },
    {
      title: "Your Resonance//",
      content: "You have the right to opt-out of any communications, request access to the data we hold, or ask for your data to be erased from our archives at any time."
    },
    {
      title: "Sonic Cookies//",
      content: "We use small data files (cookies) to help us understand how you use our site and to remember your preferences. You can adjust your browser settings to decline cookies, but it may affect some features of the frequency."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-12">
      <div className="space-y-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase italic"
        >
          Governance//
        </motion.div>
        <h2 className="text-5xl md:text-8xl font-bold italic tracking-tighter uppercase leading-[0.9] text-white">
          PRIVACY<br/><span className="text-brand-blue">POLICY//</span>
        </h2>
        <p className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase">Last Updated: April 2026</p>
      </div>

      <div className="grid gap-12 md:gap-16">
        {sections.map((section, idx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-bold text-brand-red italic uppercase tracking-tight">
              {section.title}
            </h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="pt-20 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.5em] italic">
          Life Row Records. Pure Intention. No Noise.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
