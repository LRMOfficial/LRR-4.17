import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

const GOOGLE_DRIVE_LINK = "https://drive.google.com/drive/folders/1_xQ6vQlsyIZN9FCOPJRNOKKYM1G4qOtP?usp=drive_link";
const FORMSPREE_ID = "maqyqobv";

const Downloads: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type: 'Drum Kit Requests' }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail("");
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="space-y-20 pb-20">
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-brand-blue/20 to-brand-red/10 border border-white/10 p-12 md:p-20 flex flex-col items-center text-center space-y-8">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-4"
        >
          <span className="text-brand-blue font-bold tracking-[0.5em] text-xs uppercase">Roster Resources//</span>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
            Free Drum <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-plum to-brand-red">
              Kit Portal//
            </span>
          </h2>
        </motion.div>
        
        <p className="relative z-10 text-white/50 max-w-2xl text-sm md:text-base leading-relaxed italic">
          High-quality sonic foundations for artists and producers. These kits are 100% royalty-free and curated locally at the Vibe House. Let the people vibe.
        </p>

        {/* Main Download Link */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 pt-4"
        >
          <a 
            href={GOOGLE_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue/20 border border-brand-blue/30 text-brand-blue px-10 py-5 rounded-full font-bold text-xs tracking-[0.3em] uppercase hover:bg-brand-blue hover:text-white transition-all flex items-center gap-4 group"
          >
            Access All Drum Kits//
            <Download className="w-5 h-5 group-hover:animate-bounce" />
          </a>
        </motion.div>
      </div>

      <div className="bg-zinc-900/30 border border-white/5 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-lg">
          <div className="space-y-2">
            <h4 className="text-xl font-bold uppercase tracking-tight text-white">Need custom sounds?</h4>
            <p className="text-white/40 text-[11px] font-medium tracking-wider uppercase">Join the production queue for professional sound design and bespoke drum programming.</p>
          </div>
          
          {status === 'success' && (
            <p className="text-brand-blue text-[10px] font-bold tracking-widest uppercase animate-pulse">
              Signal received. We'll be in touch//
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="YOUR_EMAIL@SONIC.VIBE"
            required
            disabled={status === 'submitting'}
            className="bg-black/40 border border-white/10 rounded-full px-8 py-4 text-white text-[10px] font-bold tracking-[0.2em] outline-none focus:border-brand-blue/50 transition-all min-w-[280px]"
          />
          <button 
            type="submit"
            disabled={status === 'submitting'}
            className="whitespace-nowrap bg-brand-red text-white font-bold px-10 py-4 rounded-full text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all transform active:scale-95 disabled:opacity-50"
          >
            {status === 'submitting' ? 'Connecting...' : 'Contact Production//'}
          </button>
        </form>
      </div>
      
      {/* Disclaimer Section */}
      <div className="text-center space-y-4">
        <div className="inline-block px-4 py-1 border border-white/10 rounded-full text-[8px] font-bold tracking-[0.4em] text-white/20 uppercase whitespace-nowrap">
          Security Check: Verified Assets
        </div>
        <p className="text-[9px] text-white/10 font-bold tracking-[0.2em] uppercase max-w-xl mx-auto">
          Life Row Records is not responsible for any fire tracks produced using these kits. Use with caution. Sonic output may exceed standard vibe levels.
        </p>
      </div>
    </div>
  );
};

export default Downloads;