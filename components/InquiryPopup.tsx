import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, ExternalLink } from 'lucide-react';
import { Page } from '../types';

const FORMSPREE_ID = "maqyqobv";

interface InquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: Page) => void;
}

const InquiryPopup: React.FC<InquiryPopupProps> = ({ isOpen, onClose, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
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
        setFormData({ name: "", email: "", number: "", message: "" });
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-2xl bg-zinc-950 border-4 border-white/20 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden flex flex-col max-h-[90vh] shadow-[0_0_100px_rgba(0,0,0,1)]"
          >
            <div className="p-8 md:p-14 overflow-y-auto custom-scrollbar">
              {/* EXIT Button Styled to match serious tone */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 md:top-8 md:right-8 bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full shadow-2xl hover:bg-brand-red hover:text-white transition-all z-20 flex items-center gap-2 group border-2 border-black font-black text-[10px] md:text-xs tracking-widest uppercase italic"
                aria-label="Close"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                <span>EXIT//</span>
              </button>

              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-brand-blue"></span>
                      <span className="text-brand-blue font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase">SERVICE_MASTER_v1.2//</span>
                    </div>
                    <div className="inline-block self-start bg-brand-red text-white px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase italic">Professional production//</div>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-white leading-[0.9] italic">
                    ELEVATE YOUR<br/><span className="text-brand-blue">FREQUENCY//</span>
                  </h3>
                  <p className="text-white/40 text-sm md:text-base max-w-md font-medium">
                    High-fidelity sonic landscapes for visionaries who demand purity and presence.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] pl-4" htmlFor="name">Name</label>
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border-2 border-white/10 rounded-[1.5rem] md:rounded-[2rem] px-6 py-4 md:py-5 text-white text-base md:text-lg outline-none focus:border-brand-blue/50 transition-all font-medium placeholder:text-white/5"
                        placeholder="NAME_REQUIRED"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] pl-4" htmlFor="email">Email Address</label>
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border-2 border-white/10 rounded-[1.5rem] md:rounded-[2rem] px-6 py-4 md:py-5 text-white text-base md:text-lg outline-none focus:border-brand-blue/50 transition-all font-medium placeholder:text-white/5"
                        placeholder="EMAIL_REQUIRED"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] pl-4" htmlFor="number">Phone Number</label>
                    <input 
                      type="tel"
                      id="number"
                      name="number"
                      required
                      value={formData.number}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border-2 border-white/10 rounded-[1.5rem] md:rounded-[2rem] px-6 py-4 md:py-5 text-white text-base md:text-lg outline-none focus:border-brand-blue/50 transition-all font-medium placeholder:text-white/5"
                      placeholder="CONTACT_NUMBER_REQUIRED"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] pl-4" htmlFor="message">Inquiry Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border-2 border-white/10 rounded-[1.5rem] md:rounded-[2rem] px-6 py-4 md:py-5 text-white text-base md:text-lg outline-none focus:border-brand-blue/50 transition-all font-medium resize-none text-left placeholder:text-white/5"
                      placeholder="WHAT_VIBE_ARE_YOU_SEEKING?"
                    />
                  </div>

                  <div className="pt-8 border-t-2 border-white/5 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-brand-blue pl-4">
                        <ShieldCheck className="w-5 h-5" />
                        <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.3em]">PRIVACY DIRECTIVE & LEGAL TERMS//</span>
                      </div>
                      <div className="bg-white/[0.03] border-2 border-white/5 rounded-[2rem] p-6 h-36 overflow-y-auto custom-scrollbar space-y-6">
                        <p className="text-[11px] md:text-xs text-white/40 leading-relaxed font-medium">
                          <span className="text-white/80 block mb-2 uppercase font-black text-[9px] md:text-[10px] tracking-widest">DATA PROTECTION//</span>
                          Life Row Records maintains a zero-sharing policy. Customer data and mobile opt-in consent are not shared with 3rd parties for promotional or marketing purposes.
                        </p>
                        <p className="text-[11px] md:text-xs text-white/40 leading-relaxed font-medium">
                          <span className="text-white/80 block mb-2 uppercase font-black text-[9px] md:text-[10px] tracking-widest">COMMERCIAL INTENT//</span>
                          By submitting this inquiry, you agree to receive professional communications regarding your production request. You may opt-out of these communications at any time by replying "STOP" or notifying our production lead.
                        </p>
                        <p className="text-[11px] md:text-xs text-white/40 leading-relaxed font-medium">
                          <span className="text-white/80 block mb-2 uppercase font-black text-[9px] md:text-[10px] tracking-widest">SONIC INTEGRITY//</span>
                          All sonic assets provided by Life Row Records are guaranteed to meet our high-fidelity standards. We reserve the right to decline inquiries that do not align with our creative direction or quality thresholds.
                        </p>
                        <p className="text-[11px] md:text-xs text-white/40 leading-relaxed font-medium italic">
                          Life Row Records. Pure Intention. No Noise. Established 2026.
                        </p>
                        {onNavigate && (
                          <button
                            type="button"
                            onClick={() => {
                              onNavigate(Page.Privacy);
                              onClose();
                            }}
                            className="flex items-center gap-2 text-brand-blue hover:text-white transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest pt-4"
                          >
                            Read Full Privacy Policy <ExternalLink className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-brand-red text-white font-black py-6 rounded-full text-sm md:text-base tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all transform hover:translate-y-[-4px] active:translate-y-0 disabled:opacity-50 shadow-[0_8px_0px_rgba(218,66,93,0.2)] md:shadow-[0_12px_0px_rgba(218,66,93,0.2)]"
                    >
                      {status === 'submitting' ? 'Processing Transaction...' : status === 'success' ? 'Signal Received//' : 'Submit Secure Inquiry//'}
                    </button>
                    
                    {status === 'error' && (
                        <p className="mt-4 text-center text-brand-red text-[10px] font-bold uppercase tracking-widest animate-pulse">
                          Transmission Failed. Please check your signal//
                        </p>
                    )}

                    {status === 'success' && (
                        <p className="mt-4 text-center text-brand-blue text-[10px] font-bold uppercase tracking-widest animate-pulse">
                          Secure entry established. Watch your frequency//
                        </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InquiryPopup;
