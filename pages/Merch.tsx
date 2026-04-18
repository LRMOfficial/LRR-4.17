import React, { useState } from 'react';
import InquiryPopup from '../components/InquiryPopup';
import { Page } from '../types';

interface MerchProps {
  onNavigate?: (page: Page) => void;
}

const Merch: React.FC<MerchProps> = ({ onNavigate }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-16 py-12">
      <InquiryPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
        onNavigate={onNavigate}
      />
      
      <div className="relative">
        <div className="absolute -inset-16 bg-brand-blue/5 blur-[100px] rounded-full"></div>
        <h2 className="text-[12vw] font-bold italic tracking-[0.2em] text-white/5 uppercase select-none leading-none">SOON//</h2>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
           <h3 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase text-white drop-shadow-2xl">
             COMING<br/><span className="text-brand-straw">SOON//</span>
           </h3>
        </div>
      </div>
      
      <div className="max-w-xl mx-auto space-y-12">
        <div className="flex justify-center">
          <img 
            src="https://i.imgur.com/hZwTJxH.png" 
            alt="Merch Mascot"
            className="w-48 h-48 rounded-[3rem] shadow-2xl border-2 border-white/5 object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <p className="text-white/50 font-medium leading-relaxed text-lg">
          We are hand-crafting finest works. Limited run apparel and physical products designed for the soulful crowd. Stay adaptable to sudden change.
        </p>
        <div className="flex justify-center items-center gap-6 py-2">
          <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-black font-bold text-xl transform -rotate-3">L</div>
          <div className="w-16 h-16 bg-zinc-900 rounded-3xl flex items-center justify-center text-white/20 font-bold text-xl border border-white/5">XL</div>
          <div className="w-16 h-16 bg-zinc-900 rounded-3xl flex items-center justify-center text-white/20 font-bold text-xl border border-white/5 rotate-6">2XL</div>
        </div>
        <button 
          onClick={() => setShowPopup(true)}
          className="bg-brand-plum text-black px-16 py-5 rounded-full font-bold text-xl hover:scale-110 transition-transform shadow-2xl shadow-brand-plum/20"
        >
          NOTIFY THE SOUL//
        </button>
      </div>
    </div>
  );
};

export default Merch;