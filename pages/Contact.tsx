import React, { useState } from 'react';

import { Page } from '../types';
import { ShieldCheck, ExternalLink } from 'lucide-react';

const FORMSPREE_ID = "maqyqobv";

interface ContactProps {
  onNavigate?: (page: Page) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        resetForm();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', number: '', message: '' });
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center text-white">
      <div className="space-y-10 md:space-y-12">
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <div className="inline-block bg-brand-red text-white px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase italic">Reach Out//</div>
          <h2 className="text-5xl md:text-7xl font-bold italic tracking-tighter uppercase leading-[0.9] text-white">
            CONNECTING<br/><span className="text-brand-red">SOULS//</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed font-medium">
            We value real connections that bring people closer to peace and joyfulness. Our frequency is always open.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 px-2 md:px-0">
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-6 bg-zinc-900 rounded-[2.5rem] md:rounded-[3rem] border-2 md:border-4 border-white/10 shadow-2xl">
             <img 
               src="https://i.imgur.com/5TLNqBc.png" 
               alt="Contact Mascot"
               className="w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl object-cover border-2 border-white/20"
             />
             <div className="text-center sm:text-left">
                <h4 className="text-white font-bold uppercase text-[10px] tracking-widest">Contact Us//</h4>
                <p className="text-white/40 text-xs font-bold">Direct transmission available below.</p>
             </div>
          </div>

          <div className="p-6 md:p-8 bg-zinc-900 rounded-[2.5rem] md:rounded-[3.5rem] border-2 md:border-4 border-white/10 hover:bg-zinc-800 transition-colors group text-center md:text-left">
            <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-3 md:mb-4">Demo Submissions//</h4>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 font-medium">
              YouTube and SoundCloud links only. We currently do not accept raw MP3 or WAV files. Thank you!
            </p>
            <a href="mailto:dudlyulysse@liferowmusic.com?subject=DEMO SUBMISSION" className="inline-block bg-white text-black font-bold px-6 md:px-8 py-3 rounded-full text-[10px] md:text-xs uppercase hover:bg-brand-red hover:text-white transition-colors">
              SUBMIT VIA PORTAL//
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between gap-6 px-4 text-center md:text-left">
            <div>
              <h4 className="text-white/30 font-bold uppercase text-[9px] md:text-[10px] tracking-widest mb-1 md:mb-2">Inquiries//</h4>
              <p className="font-bold text-base md:text-lg break-all">dudlyulysse@liferowmusic.com</p>
            </div>
            <div>
              <h4 className="text-white/30 font-bold uppercase text-[9px] md:text-[10px] tracking-widest mb-1 md:mb-2">Business Line//</h4>
              <p className="font-bold text-base md:text-lg">215-701-3921</p>
            </div>
            <div>
              <h4 className="text-white/30 font-bold uppercase text-[9px] md:text-[10px] tracking-widest mb-1 md:mb-2">Base//</h4>
              <p className="font-bold text-base md:text-lg">Philadelphia, PA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950 p-8 md:p-14 rounded-[3rem] md:rounded-[5rem] border-2 md:border-4 border-white/20 shadow-2xl relative min-h-[500px] md:min-h-[600px] flex flex-col justify-center mx-2 md:mx-0">
        {status === 'success' ? (
          <div className="text-center space-y-6 md:space-y-8 animate-in fade-in zoom-in duration-500 px-4">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
               <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
               </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase text-white">Signal Received//</h3>
            <p className="text-white/60 text-base md:text-lg max-w-xs mx-auto">Your message has been encoded and sent into the ether. We will vibrate back soon.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-[10px] md:text-xs text-white font-bold uppercase tracking-widest hover:text-brand-red transition-colors underline underline-offset-4 decoration-brand-blue"
            >
              SEND ANOTHER TRANSMISSION//
            </button>
          </div>
        ) : (
          <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-4 text-white/40">Identification//</label>
              <input 
                required
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="YOUR NAME" 
                className="w-full bg-zinc-900 border-2 md:border-4 border-white/10 rounded-full px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:ring-4 focus:ring-brand-blue/20 transition-all font-bold placeholder:text-white/10 text-sm md:text-base text-white" 
              />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-4 text-white/40">Your eMail//</label>
              <input 
                required
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="YOU@VIBE.COM" 
                className="w-full bg-zinc-900 border-2 md:border-4 border-white/10 rounded-full px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:ring-4 focus:ring-brand-blue/20 transition-all font-bold placeholder:text-white/10 text-sm md:text-base text-white" 
              />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-4 text-white/40">Phone Number//</label>
              <input 
                required
                type="tel" 
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="215.XXX.XXXX" 
                className="w-full bg-zinc-900 border-2 md:border-4 border-white/10 rounded-full px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:ring-4 focus:ring-brand-blue/20 transition-all font-bold placeholder:text-white/10 text-sm md:text-base text-white" 
              />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-4 text-white/40">The Message//</label>
              <textarea 
                required
                rows={3} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="SAY SOMETHING SOULFUL..." 
                className="w-full bg-zinc-900 border-2 md:border-4 border-white/10 rounded-[2rem] md:rounded-[3rem] px-6 md:px-8 py-5 md:py-6 focus:outline-none focus:ring-4 focus:ring-brand-blue/20 transition-all font-bold resize-none placeholder:text-white/10 text-sm md:text-base text-white"
              ></textarea>
            </div>
            
            <div className="space-y-4">
              <button 
                disabled={status === 'submitting'}
                className="w-full bg-white text-black font-bold py-5 md:py-6 rounded-full text-lg md:text-xl hover:bg-brand-red hover:text-white transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-tighter"
              >
                {status === 'submitting' ? 'TRANSMITTING...' : 'INITIATE VIBE//'}
              </button>
              {status === 'error' && (
                <p className="text-brand-red text-center text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                  Transmission interference. Please check your signal.
                </p>
              )}
            </div>

            <div className="pt-8 border-t-2 border-white/5 space-y-6">
              <div className="flex items-center gap-3 text-brand-blue">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">PRIVACY DIRECTIVE//</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 h-32 overflow-y-auto custom-scrollbar space-y-4">
                <p className="text-[10px] md:text-xs text-white/40 leading-relaxed font-medium">
                  <span className="text-white/80 block mb-1 uppercase font-black text-[9px] tracking-widest">DATA PROTECTION//</span>
                  Life Row Records maintains a zero-sharing policy. Customer data and mobile opt-in consent are not shared with 3rd parties for promotional or marketing purposes.
                </p>
                <p className="text-[10px] md:text-xs text-white/40 leading-relaxed font-medium">
                  <span className="text-white/80 block mb-1 uppercase font-black text-[9px] tracking-widest">SONIC INTEGRITY//</span>
                  By submitting, you agree to receive professional communications regarding your request. You may opt-out at any time.
                </p>
                {onNavigate && (
                  <button
                    type="button"
                    onClick={() => onNavigate(Page.Privacy)}
                    className="flex items-center gap-2 text-brand-blue hover:text-white transition-colors text-[9px] md:text-[10px] font-bold uppercase tracking-widest pt-2"
                  >
                    Read Full Privacy Policy <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;