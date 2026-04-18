import React, { useState } from 'react';
import { Page } from '../types';
import InquiryPopup from '../components/InquiryPopup';
import PrivacyContent from '../components/PrivacyContent';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="space-y-16 md:space-y-24 bg-transparent pb-16">
      {/* Inquiry Modal */}
      <InquiryPopup 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
        onNavigate={onNavigate}
      />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center py-8 md:py-16 bg-transparent">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-80 h-64 md:h-80 bg-brand-blue/10 blur-[100px] md:blur-[120px] -z-10 rounded-full"></div>
        <div className="mb-4 md:mb-6 inline-block bg-brand-plum text-black px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase animate-fade-in-up">
          Providing Super Soulful Sonics//
        </div>
        
        {/* Animated Title */}
        <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight mb-6 md:mb-8 text-white px-2 animate-title-entrance will-change-transform">
          Welcome to<br/>
          <span className="text-brand-blue inline-block">Life Row Records//</span>
        </h2>
        
        <p className="max-w-2xl text-base md:text-lg text-white/60 mb-8 md:mb-12 leading-relaxed font-light px-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          Please enjoy the vibes at your own discretion. Life Row is here to help you ride the infinite waves.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full px-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <button 
            onClick={() => onNavigate(Page.Artists)}
            className="w-full sm:w-auto bg-brand-straw text-black border-4 border-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-base md:text-xl hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            THE ROSTER//
          </button>
          <button 
            onClick={() => onNavigate(Page.Merch)}
            className="w-full sm:w-auto bg-brand-red text-white border-4 border-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-base md:text-xl hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            LATEST DROPS//
          </button>
        </div>
      </section>

      {/* Traktrain Player Section */}
      <section className="w-screen relative left-1/2 -ml-[50vw] bg-transparent border-y-4 border-white/20 py-8 md:py-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group/player">
        <div className="max-w-7xl mx-auto px-10 md:px-5">
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-4">
              <div className="px-3 py-0.5 bg-white text-black text-[9px] font-bold rounded-full uppercase tracking-widest">Live Signal</div>
              <h3 className="text-xl font-bold tracking-tight uppercase text-white">BEATS//</h3>
            </div>
            <span className="mono text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold hidden sm:inline">Analog_Signal_v2.7</span>
          </div>
          
          <div className="w-full bg-zinc-900/60 backdrop-blur-sm rounded-[2rem] md:rounded-[3rem] overflow-hidden border-2 border-white/10 relative min-h-[700px]">
             <iframe 
               src="https://traktrain.com/widget/270590" 
               width="100%" 
               height="700" 
               frameBorder="0"
               className="w-full"
               style={{ height: '700px' }}
             ></iframe>
          </div>
        </div>
      </section>

      {/* Simplified Production CTA */}
      <section className="bg-zinc-950/40 border-4 border-white/10 rounded-[2.5rem] md:rounded-[5rem] p-10 md:p-20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-[100px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-red/20 transition-all duration-700"></div>
        
        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <span className="text-brand-blue font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase block">Secure Connection Required//</span>
            <h3 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] text-white">
              Professional<br/>
              <span className="text-brand-red italic">Production//</span>
            </h3>
            <p className="text-white/40 text-xs md:text-sm font-medium tracking-wider uppercase max-w-xl mx-auto italic">
              "Bespoke drum programming. Custom sound design. High-fidelity sonic architecture for the elite frequency."
            </p>
          </div>
          
          <button 
            onClick={() => setIsInquiryOpen(true)}
            className="bg-white text-black font-black px-10 md:px-16 py-5 md:py-6 rounded-full text-base md:text-xl tracking-[0.3em] uppercase hover:bg-brand-red hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(255,255,255,0.1)] border-4 border-transparent hover:border-white"
          >
            Contact Production//
          </button>
        </div>
      </section>

      {/* Nostalgia / Anime Vibe Section */}
      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-12 bg-transparent">
        <div className="space-y-6 md:space-y-8 px-2">
          <div className="space-y-3 md:space-y-4 text-center md:text-left">
            <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">Nostalgia//</h4>
            <div className="h-1.5 w-20 md:w-24 bg-brand-red rounded-full mx-auto md:mx-0"></div>
          </div>
          <p className="text-white/60 text-base md:text-lg leading-relaxed italic font-light text-center md:text-left">
            "We only care about the vibes and intention in our art. Curated sounds from the Vibe House that will please you sonically homie."
          </p>
          <div className="flex justify-center md:justify-start gap-3 md:gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-plum/10 border-2 border-white/20 flex items-center justify-center text-white font-bold text-xl md:text-2xl">靈</div>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-blue/10 border-2 border-white/20 flex items-center justify-center text-white font-bold text-xl md:text-2xl">魂</div>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-olivine/10 border-2 border-white/20 flex items-center justify-center text-white font-bold text-xl md:text-2xl">和</div>
          </div>
        </div>
        <div className="shadow-2xl overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border-4 border-white/10 group aspect-[4/3] bg-zinc-900 mx-2">
          <img 
            src="https://i.imgur.com/D69D4Pc.png" 
            alt="Life Row Nostalgia" 
            className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-700 image-reveal group-hover:scale-105 md:group-hover:scale-110"
          />
        </div>
      </section>

      {/* Privacy Policy Section at the bottom */}
      <section className="pt-24 md:pt-32 border-t-4 border-white/5 px-4 max-w-4xl mx-auto">
        <div className="space-y-10 md:space-y-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-block bg-brand-blue text-white px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase italic animate-pulse">
              Legal Transparency//
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9] text-white">
              DATA<br/><span className="text-brand-blue">DIRECTIVE//</span>
            </h2>
          </div>
          
          <div className="bg-zinc-900 shadow-2xl rounded-[2.5rem] md:rounded-[4rem] border-4 border-white/10 p-8 md:p-14">
            <PrivacyContent />
          </div>

          <div className="pt-10 text-center">
            <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.5em] italic">
              Life Row Records. Secure. Private. Pure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
