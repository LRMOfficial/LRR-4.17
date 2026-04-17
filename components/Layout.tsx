import React, { useState } from 'react';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME//', page: Page.Home },
    { label: 'ARTISTS//', page: Page.Artists },
    { label: 'MERCH//', page: Page.Merch },
    { label: 'DOWNLOADS//', page: Page.Downloads },
    { label: 'CONTACT//', page: Page.Contact },
  ];

  const socialLinks = {
    youtube: 'https://www.youtube.com/@OCSolMusic',
    bandcamp: 'https://ocsol.bandcamp.com/',
    instagram: 'https://www.instagram.com/magnolia.ocsol/',
  };

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-white">
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b-2 border-white/10 px-6 py-5 flex justify-between items-center">
        <h1 
          className="text-2xl font-bold tracking-tight cursor-pointer hover:text-brand-red transition-colors uppercase text-brand-blue"
          onClick={() => handleNavigate(Page.Home)}
        >
          LIFE ROW RECORDS//
        </h1>

        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-[10px] font-bold tracking-[0.2em] transition-all px-3 py-1 rounded-full ${
                  activePage === item.page 
                    ? 'text-white underline underline-offset-4 decoration-2 decoration-brand-blue' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border-2 border-white transition-all"
            aria-label="Toggle Menu"
          >
            <span className="hidden md:block text-[10px] font-bold tracking-[0.3em] text-white group-hover:text-white transition-colors">
              {isMenuOpen ? 'CLOSE//' : 'MENU//'}
            </span>
            <div className="flex gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-full bg-brand-red shadow-[0_0_8px_rgba(218,102,93,0.5)] transition-transform duration-500 ${isMenuOpen ? 'scale-125' : ''}`}></div>
              <div className={`w-2.5 h-2.5 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(138,185,209,0.5)] transition-transform duration-500 delay-75 ${isMenuOpen ? 'scale-125' : ''}`}></div>
              <div className={`w-2.5 h-2.5 rounded-full bg-brand-olivine shadow-[0_0_8px_rgba(146,174,91,0.5)] transition-transform duration-500 delay-150 ${isMenuOpen ? 'scale-125' : ''}`}></div>
            </div>
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay - Semi-transparent */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-8 md:gap-12 text-center">
            {navItems.map((item, idx) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-4xl md:text-7xl font-bold tracking-tighter uppercase transition-all hover:italic hover:text-brand-red transform hover:scale-110 ${
                  activePage === item.page ? 'text-white italic' : 'text-white/20'
                } animate-in slide-in-from-bottom duration-500`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-12 flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-bold tracking-[0.5em] text-white/40 animate-in fade-in delay-500">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">INSTAGRAM//</a>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">YOUTUBE//</a>
            <a href={socialLinks.bandcamp} target="_blank" rel="noopener noreferrer" className="hover:text-brand-olivine transition-colors">BANDCAMP//</a>
          </div>
        </div>
      )}

      <main className="flex-grow pt-28 pb-16 px-6 max-w-7xl mx-auto w-full relative z-10 bg-transparent">
        {children}
      </main>

      <footer className="border-t-2 border-white/10 px-6 py-12 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold tracking-widest text-white/80">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">INSTAGRAM//</a>
            <a href={socialLinks.bandcamp} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">BANDCAMP//</a>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">YOUTUBE//</a>
            <button 
              onClick={() => onNavigate(Page.Privacy)} 
              className="hover:text-brand-blue transition-colors uppercase"
            >
              PRIVACY POLICY//
            </button>
          </div>
          <div className="text-white/40 text-[10px] mono uppercase tracking-[0.3em] font-bold text-center">
            © 2026 LIFE ROW RECORDS. LET THE PEOPLE VIBE//
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;