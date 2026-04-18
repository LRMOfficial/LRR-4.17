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
      title: "3. Data Sharing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Customer data is not shared with 3rd parties for promotional or marketing purposes.</li>
          <li>Mobile opt-in and consent are never shared with anyone for any purpose. Any information sharing that may be mentioned elsewhere in this policy excludes mobile opt-in data.</li>
        </ul>
      )
    },
    {
      title: "4. Life Row Records, LLC Messaging Terms and Conditions",
      content: (
        <ol className="list-decimal pl-5 space-y-4">
          <li>The messaging program consists of general conversational messaging to answer questions and provide support to customers.</li>
          <li>You can cancel the SMS service at any time. Just text 'STOP' to the phone number from which you received messages. After you send the SMS message 'STOP' to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.</li>
          <li>If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at dudlyulysse@liferowmusic.com.</li>
          <li>Carriers are not liable for delayed or undelivered messages.</li>
          <li>As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency will vary based on communication needs. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.</li>
          <li>If you have any questions regarding privacy, please read our privacy policy contained in the rest of this document/page.</li>
        </ol>
      )
    },
    {
      title: "5. Data Security",
      content: "We implement industry-standard administrative, technical, and physical security measures to safeguard your personal information against unauthorized access, disclosure, or modification. While we strive to protect your data, no transmission over the internet can be guaranteed as completely secure."
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
            <div className="text-white/60 text-sm md:text-base leading-relaxed font-medium">
              {section.content}
            </div>
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
