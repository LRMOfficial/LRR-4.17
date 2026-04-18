import React from 'react';
import { motion } from 'motion/react';

const Privacy: React.FC = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: "This Privacy Policy describes how Life Row Records ('we', 'us', or 'our') collects, uses, and protects your personal information in connection with our website and services. We are committed to ensuring the confidentiality and security of the data provided by our users."
    },
    {
      title: "2. Information Collection",
      content: "We collect personal information that you voluntarily provide to us, including but not limited to your name, email address, and phone number when you register for updates, contact our production department, or engage in commercial transactions. We also automatically collect certain technical information, such as IP addresses and browser types, to analyze site traffic and improve user experience."
    },
    {
      title: "3. No Sharing of Personal Information",
      content: "Life Row Records maintains a strict policy regarding the privacy of our users. We do not sell, rent, trade, or otherwise share your email address or phone number with third-party organizations for marketing or commercial purposes. Your contact information is used exclusively for internal operations and requested communications."
    },
    {
      title: "4. Use of Information",
      content: "The information we collect is utilized to provide and improve our services, process transactions, communicate administrative updates, and deliver requested content. We may also use data for internal analytical purposes to enhance the technical performance of our platform."
    },
    {
      title: "5. Data Security",
      content: "We implement industry-standard administrative, technical, and physical security measures to safeguard your personal information against unauthorized access, disclosure, or modification. While we strive to protect your data, no transmission over the internet can be guaranteed as completely secure."
    },
    {
      title: "6. Your Rights and Choices",
      content: "Users possess the right to access, rectify, or request the deletion of their personal data maintained in our records. You may opt-out of promotional communications at any time by following the unsubscribe instructions provided in such transmissions."
    },
    {
      title: "7. Cookies and Tracking Technologies",
      content: "Our website utilizes cookies and similar tracking technologies to monitor site activity and store user preferences. You may configure your browser settings to refuse cookies; however, please note that certain components of our services may not function as intended without them."
    }
  ];

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
