
import React from 'react';
import GeneratedImage from '../components/GeneratedImage';

const blogPosts = [
  {
    id: '1',
    title: "DIGGING IN THE PLUM ARCHIVES//",
    date: "OCT 24, 2024",
    excerpt: "Exploring the spiritual aspects of our latest lo-fi releases and how numerology influences the bpm.",
    category: "PHILOSOPHY",
    prompt: "a wise 90s anime style owl with glasses reading a book by candlelight, natural brown feathers"
  },
  {
    id: '2',
    title: "VINTAGE GEAR: THE MPC-3000//",
    date: "SEP 15, 2024",
    excerpt: "How we keep the clean lo-fi sound alive using hardware from the golden era of hip hop.",
    category: "TECH",
    prompt: "a cool 90s anime style raccoon tinkered with a vintage sampler machine, natural grey and black fur"
  },
  {
    id: '3',
    title: "ANIME NOSTALGIA & URBAN BEATS//",
    date: "AUG 30, 2024",
    excerpt: "The deep connection between 90s animation and the soulful crowd in today's underground scene.",
    category: "CULTURE",
    prompt: "a 90s anime style street cat walking through a rainy city alleyway, neon lights reflecting in natural fur"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-20">
      <div className="text-center space-y-4">
        <div className="inline-block bg-brand-straw text-black px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Field Dispatch</div>
        <h2 className="text-7xl font-bold tracking-tighter uppercase italic leading-none">NOTES//</h2>
        <p className="mono text-[10px] text-white/30 tracking-[0.5em] uppercase">Cleaning the signal / Tuning the vibe</p>
      </div>

      <div className="space-y-16">
        {blogPosts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <GeneratedImage 
                prompt={post.prompt} 
                alt={post.title} 
                className="w-full md:w-1/3 aspect-square rounded-[3rem] bg-zinc-900 border-2 border-white/5 group-hover:border-brand-blue shadow-xl"
              />
              <div className="w-full md:w-2/3 space-y-4 py-2">
                <div className="flex justify-between items-center">
                  <span className="text-brand-olivine font-bold uppercase text-[10px] tracking-widest">{post.category}//</span>
                  <span className="mono text-[10px] text-white/20">{post.date}</span>
                </div>
                <h3 className="text-4xl font-bold tracking-tight group-hover:text-brand-straw transition-colors leading-tight uppercase">
                  {post.title}
                </h3>
                <p className="text-white/50 text-lg leading-relaxed group-hover:text-white transition-colors font-light">
                  {post.excerpt}
                </p>
                <div className="pt-4 flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] text-brand-blue group-hover:gap-4 transition-all">
                  FULL TRANSMISSION <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="pt-12 flex justify-center">
        <button className="bg-white/5 hover:bg-white/10 text-white/40 hover:text-white px-12 py-4 rounded-full font-bold tracking-widest text-xs uppercase border border-white/5 transition-all">
          LOAD ARCHIVE//
        </button>
      </div>
    </div>
  );
};

export default Blog;
