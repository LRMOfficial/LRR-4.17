import React, { useState } from 'react';

const FORMSPREE_ID = "maqyqobv";

interface EmailPopupProps {
  onClose: () => void;
}

const EmailPopup: React.FC<EmailPopupProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md">
      <div className="bg-zinc-950 border-4 md:border-[6px] border-white/20 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-14 max-w-xl w-full relative shadow-[10px_10px_0px_rgba(255,255,255,0.1)] md:shadow-[30px_30px_0px_rgba(255,255,255,0.1)] transition-all animate-in fade-in zoom-in duration-300">
        
        {/* Fixed Exit Button - Always Visible */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:-top-6 md:-right-6 bg-white text-black px-4 py-3 md:px-5 md:py-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-10 flex items-center gap-2 group border-2 md:border-4 border-black"
          aria-label="Close"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          <span className="text-[10px] font-bold tracking-widest uppercase">EXIT//</span>
        </button>

        <div className="text-center space-y-4 md:space-y-6 text-white">
          {status === 'success' ? (
            <div className="py-8 md:py-12 space-y-4 md:space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="text-white text-4xl md:text-6xl">✨</div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tighter uppercase leading-tight text-white">Signal Received<br/>Successfully//</h2>
              <p className="text-white/40 text-[10px] md:text-sm tracking-widest uppercase font-bold">You are now tuned to the Vibe frequency.</p>
              <button onClick={onClose} className="mt-4 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-bold uppercase text-[10px] md:text-xs tracking-widest hover:bg-brand-blue transition-colors">
                RETURN TO VIBE//
              </button>
            </div>
          ) : (
            <>
              <div className="bg-brand-red text-white inline-block px-4 py-0.5 md:px-5 md:py-1 rounded-full text-[9px] md:text-[10px] font-bold mb-2 md:mb-4 uppercase tracking-[0.2em]">
                {status === 'error' ? 'Transmission Failed//' : 'Direct Signal Established//'}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight uppercase text-white">
                Join the<br/><span className="text-brand-red italic underline decoration-brand-blue underline-offset-4 md:underline-offset-8">Vibe House//</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium max-w-[280px] md:max-w-sm mx-auto">
                Stay tuned to the frequency. Get notified about soulful drops and limited archives.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 pt-4 md:pt-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="YOUR_EMAIL@VIBE.COM"
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-zinc-900 border-2 md:border-4 border-white/10 rounded-full px-6 md:px-8 py-4 md:py-5 text-white focus:outline-none focus:ring-4 focus:ring-brand-blue/20 transition-all text-center uppercase font-bold text-xs md:text-sm tracking-widest placeholder:text-white/10"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-white text-black font-bold py-4 md:py-5 rounded-full hover:bg-brand-red hover:text-white transition-all transform hover:translate-y-[-4px] active:translate-y-0 text-base md:text-lg shadow-[0_6px_0px_rgba(255,255,255,0.1)] uppercase tracking-tighter"
                >
                  {status === 'submitting' ? 'SENDING...' : 'INITIATE CONNECTION//'}
                </button>
                {status === 'error' && <p className="text-brand-red text-[9px] md:text-[10px] uppercase font-bold">Error. Signal interference detected.</p>}
                <p className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold pt-2 md:pt-4 underline underline-offset-2 md:underline-offset-4 decoration-brand-blue/30">Pure intention. No noise.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;