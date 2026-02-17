import React from 'react';
import { getAsset, CONTACT_LINK } from '../constants';
import '../types';

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const Hero: React.FC = () => {
  // Creating an array for the marquee based on your screenshot filenames
  const marqueeImages = [
    'preview1_1.gif', 'preview2_1.gif', 'preview3_1.gif', 
    'preview4_1.gif', 'preview5_1.gif', 'preview6_1.gif', 
    'preview7_1.gif', 'preview8_1.gif', 'preview9_1.gif'
  ];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex justify-center items-center">
      {/* Queen Layer - Absolute Centered */}
      {/* Moved top to 40% to lift it up slightly */}
      <div className="absolute top-[40%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] lg:w-[1000px] z-[1] pointer-events-none select-none">
        <div className="relative w-full h-full">
            {/* Stars around the Queen - MASSIVE amount of stars as requested */}
            
            {/* Original / Adjusted Stars */}
            <StarIcon className="absolute -top-[20%] left-[5%] w-8 h-8 text-accent animate-pulse delay-100 drop-shadow-[0_0_10px_rgba(0,212,255,0.8)] opacity-60" />
            <StarIcon className="absolute -top-[10%] right-[0%] w-6 h-6 text-white animate-pulse delay-500 opacity-50" />
            <StarIcon className="absolute bottom-[0%] -left-[10%] w-5 h-5 text-accent animate-pulse delay-300 drop-shadow-[0_0_8px_rgba(0,212,255,0.6)] opacity-50" />
            <StarIcon className="absolute top-[50%] -right-[15%] w-4 h-4 text-slate-200 animate-pulse delay-700 opacity-60" />
            <StarIcon className="absolute top-[10%] left-[15%] w-4 h-4 text-white animate-pulse delay-200 opacity-70" />
            <StarIcon className="absolute bottom-[10%] right-[10%] w-5 h-5 text-accent animate-pulse delay-1000 opacity-40" />
            <StarIcon className="absolute top-[60%] -left-[5%] w-3 h-3 text-slate-300 animate-pulse delay-200 opacity-50" />
            <StarIcon className="absolute -top-[5%] right-[20%] w-3 h-3 text-white animate-pulse delay-500 opacity-60" />
            <StarIcon className="absolute top-[25%] left-[30%] w-2 h-2 text-accent animate-pulse delay-300 opacity-80" />
            <StarIcon className="absolute bottom-[35%] right-[35%] w-3 h-3 text-white animate-pulse delay-100 opacity-50" />

            {/* NEW EXTRA Stars for "Further and More" effect */}
            <StarIcon className="absolute -top-[30%] -left-[15%] w-5 h-5 text-white animate-pulse delay-700 opacity-40" />
            <StarIcon className="absolute -top-[25%] right-[30%] w-3 h-3 text-accent animate-pulse delay-200 opacity-60" />
            <StarIcon className="absolute top-[80%] left-[40%] w-2 h-2 text-white animate-pulse delay-500 opacity-50" />
            <StarIcon className="absolute top-[5%] -right-[25%] w-6 h-6 text-slate-400 animate-pulse delay-100 opacity-30" />
            <StarIcon className="absolute bottom-[20%] -left-[20%] w-4 h-4 text-accent animate-pulse delay-300 opacity-50" />
            <StarIcon className="absolute -bottom-[15%] right-[5%] w-3 h-3 text-white animate-pulse delay-700 opacity-60" />
            <StarIcon className="absolute top-[40%] left-[60%] w-1.5 h-1.5 text-white animate-pulse delay-1000 opacity-80" />
            <StarIcon className="absolute top-[15%] -left-[10%] w-3 h-3 text-slate-300 animate-pulse delay-200 opacity-50" />

            {/* Queen Container - Animation on wrapper, Rotation on Image to avoid conflict */}
            <div className="w-full h-full animate-float">
                {/* Rotated 18 degrees (Right) */}
                <img 
                  src={getAsset('queen.png')} 
                  alt="" 
                  className="w-full h-full object-contain opacity-40 blur-sm rotate-[18deg] transform-gpu" 
                />
            </div>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-center max-w-[900px] px-5 mt-[-10vh]">
        <h1 className="text-5xl md:text-[5.5rem] leading-[0.95] mb-8 font-semibold tracking-tight drop-shadow-2xl">
          frame by frame <br />
          <em className="font-serif italic font-light text-gray-200">story by story</em>
        </h1>
        <p className="text-lg md:text-[1.1rem] text-slate-300 mb-12 leading-[1.8] drop-shadow-lg max-w-2xl mx-auto">
          i specialize in designing powerful visual narratives<br className="hidden md:block" />
          that help creators strengthen their brand.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#projects" className="flex items-center justify-center gap-3 bg-gradient-to-b from-white to-gray-200 text-black px-8 py-4 rounded-2xl border border-white/10 shadow-lg font-bold text-lg hover:-translate-y-[2px] hover:brightness-105 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 3H3V10H10V3Z" /><path d="M21 3H14V10H21V3Z" /><path d="M21 14H14V21H21V14Z" /><path d="M10 14H3V21H10V14Z" />
            </svg>
            projects
          </a>
          <a href={CONTACT_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-gradient-to-b from-white to-gray-200 text-black px-8 py-4 rounded-2xl border border-white/10 shadow-lg font-bold text-lg hover:-translate-y-[2px] hover:brightness-105 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
            contact
          </a>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none pb-4" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)' }}>
        <div className="flex gap-5 w-max animate-scroll">
          {/* Duplicate list for seamless loop */}
          {[...marqueeImages, ...marqueeImages].map((img, idx) => (
            <div key={`${img}-${idx}`} className="w-[350px] aspect-video bg-[#050505] border border-white/10 rounded-xl flex-shrink-0 overflow-hidden">
               <img src={getAsset(img)} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;