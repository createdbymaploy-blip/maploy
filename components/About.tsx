import React from 'react';
import { getAsset, COMMUNITY_LINK } from '../constants';
import '../types';

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const About: React.FC = () => {
  // Queen settings for background logic
  const queenSettings = {
    width: '194%',        
    left: '44.4%',          
    bottom: '-10%',       
    transform: 'translateX(-50%)', 
    opacity: 0.2          
  };

  return (
    <section id="about" className="py-20 md:py-32 relative z-10">
      {/* BOXED CONTAINER: max-w-[1100px] + Horizontal Padding */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-20 items-start">
        
        {/* Left Content Column */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          
          {/* 
              Header Block 
              Desktop: Row aligned bottom (Photo -> Title -> Badge)
              Mobile: Column aligned center (Photo -> Badge -> Title)
          */}
          <div className="mb-8 w-full">
            {/* Desktop Layout */}
            <div className="hidden md:flex flex-row items-end gap-6">
                {/* Photo */}
                <div className="w-[135px] h-[135px] rounded-full overflow-hidden flex-shrink-0 border-[3px] border-white/10 shadow-2xl relative bg-black">
                    <img 
                        src={getAsset('avatar.png')} 
                        alt="Bulat" 
                        className="absolute top-1/2 left-1/2 w-full h-full object-cover"
                        style={{ transform: 'translate(-60%, -40%) scale(2.4)' }}
                    />
                </div>
                
                {/* Title (Aligned bottom) */}
                <h2 className="text-[4.5rem] font-medium leading-[0.9] text-white whitespace-nowrap">
                   I’m <em className="font-serif italic text-slate-300">Bulat</em>
                </h2>

                {/* Badge (Aligned bottom next to title) */}
                <div className="mb-3">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm font-semibold text-slate-300 whitespace-nowrap">
                      <span className="text-accent text-lg leading-none">•</span> about me
                    </div>
                </div>
            </div>

            {/* Mobile Layout (Stacked) */}
            <div className="flex md:hidden flex-col items-center gap-4">
                 <div className="w-[135px] h-[135px] rounded-full overflow-hidden flex-shrink-0 border-[3px] border-white/10 shadow-2xl relative bg-black mb-2">
                    <img 
                        src={getAsset('avatar.png')} 
                        alt="Bulat" 
                        className="absolute top-1/2 left-1/2 w-full h-full object-cover"
                        style={{ transform: 'translate(-60%, -40%) scale(2.4)' }}
                    />
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm font-semibold text-slate-300">
                    <span className="text-accent text-lg leading-none">•</span> about me
                </div>
                <h2 className="text-[3.5rem] font-medium leading-[0.9] text-white">
                   I’m <em className="font-serif italic text-slate-300">Bulat</em>
                </h2>
            </div>
          </div>

          <p className="text-base md:text-[1.15rem] text-slate-400 leading-[1.7] mb-10 max-w-[600px] mx-auto md:mx-0">
            Hi, I’m Bulat. I specialize in dense, structured storytelling where every detail has a purpose. I’m also the founder of Maploy - a community of 1,160+ video editors exploring the deeper nuances of post-production.<br/><br/>
            I approach every project with a focus on clarity, rhythm, and intention - shaping a cohesive visual language that elevates how your brand is perceived and remembered.
          </p>

          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
            {['premiere pro', 'after effects', 'photoshop', 'adobe illustrator'].map(tool => (
              <span key={tool} className="bg-[#0b1120] border border-blue-900/30 text-slate-300 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#0f172a] hover:border-blue-900/80 hover:text-white transition-all cursor-default">
                {tool}
              </span>
            ))}
          </div>

          <div className="h-px w-full bg-white/5 mt-10 md:mt-16" />
        </div>

        {/* Right Content Column (Community Card) */}
        <div className="flex flex-col justify-center h-full w-full max-w-[500px] mx-auto md:mx-0 relative z-10">
            {/* Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-blue-900/10 to-transparent blur-3xl -z-20 pointer-events-none" />

            {/* Card */}
            <div className="relative z-10 w-full group bg-[#0b1120]/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-accent/30 transition-colors duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.03)] min-h-[500px] flex flex-col justify-center">
                 {/* Internal Gradients */}
                 <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 blur-[60px] rounded-full pointer-events-none" />
                 <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/5 blur-[60px] rounded-full pointer-events-none" />

                 {/* Background Asset */}
                 <img 
                    src={getAsset('queen.png')} 
                    alt="" 
                    className="absolute max-w-none object-contain pointer-events-none select-none mix-blend-lighten"
                    style={{ 
                        width: queenSettings.width,
                        left: queenSettings.left,
                        bottom: queenSettings.bottom,
                        transform: queenSettings.transform,
                        opacity: queenSettings.opacity,
                        maskImage: 'linear-gradient(to top, transparent, black 10%, black 100%)' 
                    }}
                 />

                 <StarIcon className="absolute -top-6 -right-6 w-10 h-10 text-accent animate-pulse drop-shadow-[0_0_12px_rgba(0,212,255,0.8)] z-20" />
                 <StarIcon className="absolute bottom-20 -left-4 w-4 h-4 text-white/60 animate-pulse delay-500 z-20" />

                 <div className="relative z-20 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Maploy Community</h3>
                    <p className="text-slate-400 text-sm mb-8 font-medium">Video Editing & Post-Production</p>
                    
                    <div className="mb-8">
                        <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter drop-shadow-sm">
                            1,160+
                        </div>
                        <div className="text-accent text-xs font-bold mt-2 uppercase tracking-[0.2em] opacity-80">
                            Active Editors
                        </div>
                    </div>

                    <a 
                        href={COMMUNITY_LINK} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-b from-white to-gray-200 text-black px-6 py-4 rounded-xl border border-white/10 shadow-lg font-bold text-base hover:-translate-y-[2px] hover:shadow-xl hover:brightness-105 transition-all duration-300"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
                        </svg>
                        Join Community
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;