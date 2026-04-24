import React, { useState } from 'react';
import { Artist, Album } from '../types';
import GeneratedImage from '../components/GeneratedImage';

const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'OCSol//',
    genre: 'Elite Producer',
    bio: 'OCSol is the divine sonic counterpart to Magnolia. A low-key architect of rhythm dwelling beyond the physical plane, he weaves together lo-fi textures and modern RnB with a singular focus: radiating pure joy into the world\'s frequency.',
    imageUrl: 'https://i.imgur.com/pk9cQBG.png',
    discography: [
      { 
        title: 'Nostalgia Blaze', 
        link: 'https://ocsol.bandcamp.com/album/nostalgia-blaze'
      },
      { 
        title: 'Happy Holidaze, Vol 1', 
        link: 'https://ocsol.bandcamp.com/album/happy-holidaze-vol-1'
      }
    ],
    socials: { 
      bandcamp: 'https://ocsol.bandcamp.com/', 
      instagram: 'https://www.instagram.com/magnolia.ocsol/',
      youtube: 'https://www.youtube.com/watch?v=5j2qn6ltqos'
    }
  },
  {
    id: '2',
    name: 'Magnolia//',
    genre: 'The Flower Child',
    bio: 'Magnolia provides the breath and soul to OCSol’s intricate production. With a flow that oscillates between raw grit and heartfelt poetry, he defines the modern lyricist—effortlessly shifting from deep-bag introspection to unbridled vocal energy.',
    imageUrl: 'https://i.imgur.com/AGbJocQ.png',
    discography: [
      { 
        title: 'I Rock A Lot EP', 
        link: 'https://ocsol.bandcamp.com/album/i-rock-a-lot-ep'
      },
      { 
        title: 'The Flower Child', 
        link: 'https://ocsol.bandcamp.com/album/the-flower-child'
      }
    ],
    socials: { 
      bandcamp: 'https://ocsol.bandcamp.com/', 
      instagram: 'https://www.instagram.com/magnolia.ocsol/',
      youtube: 'https://www.youtube.com/watch?v=5j2qn6ltqos'
    }
  },
  {
    id: '3',
    name: 'DJ DeeMO//',
    genre: 'Turntable Specialist',
    bio: 'A master of the decks and a cornerstone of the Life Row rhythmic engine. DJ DeeMO translates raw street energy into high-fidelity sonic experiences, specializes in deep-cut curation and the art of the infinite groove.',
    imageUrl: 'https://i.imgur.com/ZmdgEmO.png',
    discography: [
      { 
        title: 'Vibe Session Vol. 1', 
        link: 'https://ocsol.bandcamp.com/album/beats-to-sip-to-vol-1-mix'
      }
    ],
    socials: { 
      bandcamp: '#', 
      instagram: '#',
      youtube: '#'
    }
  }
];

const BandcampIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Artists: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);

  const handleSelectArtist = (artist: Artist) => {
    setSelectedArtist(artist);
    setActiveAlbum(artist.discography[0] || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedArtist(null);
    setActiveAlbum(null);
  };

  const renderArtistImage = (imageUrl: string, alt: string, className: string) => {
    const isUrl = imageUrl.startsWith('http');
    if (isUrl) {
      return (
        <div className={`relative overflow-hidden group ${className}`}>
          <img 
            src={imageUrl} 
            alt={alt} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 image-reveal group-hover:scale-110"
          />
        </div>
      );
    }
    return (
      <GeneratedImage 
        prompt={imageUrl} 
        alt={alt} 
        className={className}
        aspectRatio="3:4"
      />
    );
  };

  return (
    <div className="space-y-8 md:space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 md:border-b-4 border-white pb-6 md:pb-12 px-2">
        <div className="space-y-2 md:space-y-4">
          <div className="inline-block bg-brand-red text-white px-3 md:px-4 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest">The Roster</div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-tight text-white break-words">THE COLLECTIVE//</h2>
        </div>
        <p className="max-w-sm text-white/60 font-medium italic text-xs md:text-base leading-relaxed">
          Meet the souls behind the sound. Each artist is represented by their spirit guide from the Vibe House.
        </p>
      </div>

      {!selectedArtist ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-2">
          {mockArtists.map((artist) => (
            <div 
              key={artist.id} 
              className="group cursor-pointer"
              onClick={() => handleSelectArtist(artist)}
            >
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-zinc-900 border-2 md:border-4 border-white/20 group-hover:border-white/40 group-hover:shadow-[10px_10px_0px_rgba(255,255,255,0.05)] transition-all duration-500 relative">
                {renderArtistImage(artist.imageUrl, artist.name, "w-full h-full")}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
                  <h3 className="text-base md:text-xl font-bold text-white tracking-tight uppercase group-hover:text-brand-red transition-colors">{artist.name}</h3>
                  <p className="text-[8px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest">{artist.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 px-2 text-white">
          <button 
            onClick={handleBack}
            className="mb-6 md:mb-12 flex items-center gap-2 text-white/40 hover:text-white font-bold tracking-widest text-[9px] md:text-xs uppercase group py-2"
          >
            <svg className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            BACK TO ROSTER//
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="space-y-6 md:space-y-8 max-w-lg mx-auto lg:max-w-none w-full">
              {renderArtistImage(
                selectedArtist.imageUrl, 
                selectedArtist.name, 
                "aspect-[4/5] sm:aspect-[3/4] rounded-[2rem] md:rounded-[4rem] border-2 md:border-4 border-white/10 shadow-xl bg-zinc-900"
              )}
            </div>
            
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase text-white leading-none">{selectedArtist.name}</h3>
                <p className="text-base md:text-xl text-white/70 leading-relaxed font-light md:font-medium">
                  {selectedArtist.bio}
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                  <h4 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">CATALOG//</h4>
                </div>
                <div className="grid gap-3 md:gap-4">
                  {selectedArtist.discography.map((album, i) => (
                    <div 
                      key={i} 
                      onClick={() => setActiveAlbum(album)}
                      className={`flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center group/item p-4 md:p-5 rounded-2xl md:rounded-3xl transition-all cursor-pointer border ${
                        activeAlbum?.title === album.title 
                          ? 'bg-white text-black border-white' 
                          : 'hover:bg-white/5 border-white/10'
                      }`}
                    >
                      <div className="flex-1">
                        <p className={`font-bold text-sm md:text-lg uppercase transition-colors ${
                          activeAlbum?.title === album.title ? 'text-black' : 'group-hover/item:text-brand-blue'
                        }`}>
                          {album.title}
                        </p>
                      </div>
                      <a 
                        href={album.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`text-[9px] md:text-[10px] font-bold px-4 py-2.5 md:py-3 rounded-full transition-all flex items-center justify-center border ${
                          activeAlbum?.title === album.title 
                            ? 'bg-black text-white border-black' 
                            : 'bg-white text-black border-white'
                        } hover:scale-105 active:scale-95`}
                      >
                        LISTEN//
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 md:space-y-6 pb-8">
                <h4 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 border-b border-white/10 pb-2">CONNECT//</h4>
                <div className="flex flex-wrap gap-4">
                  {selectedArtist.socials.bandcamp && selectedArtist.socials.bandcamp !== '#' && (
                    <a 
                      href={selectedArtist.socials.bandcamp} 
                      target="_blank" 
                      rel="noopener" 
                      title="Bandcamp"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-brand-red hover:text-white transition-all shadow-md active:scale-90"
                    >
                      <BandcampIcon />
                    </a>
                  )}
                  {selectedArtist.socials.instagram && selectedArtist.socials.instagram !== '#' && (
                    <a 
                      href={selectedArtist.socials.instagram} 
                      target="_blank" 
                      rel="noopener" 
                      title="Instagram"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-brand-red hover:text-white transition-all shadow-md active:scale-90"
                    >
                      <InstagramIcon />
                    </a>
                  )}
                  {selectedArtist.socials.youtube && selectedArtist.socials.youtube !== '#' && (
                    <a 
                      href={selectedArtist.socials.youtube} 
                      target="_blank" 
                      rel="noopener" 
                      title="YouTube"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-brand-red hover:text-white transition-all shadow-md active:scale-90"
                    >
                      <YoutubeIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artists;