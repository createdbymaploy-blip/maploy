import React from 'react';
import { getAsset, CONTACT_LINK } from '../constants';
import '../types';

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const Hero: React.FC = () => {
  const marqueeImages = [
    'preview1_1.gif', 'preview2_1.gif', 'preview3_1.gif', 
    'preview4_1.gif', 'preview5_1.gif', 'preview6_1.gif', 
    'preview7_1.gif', 'preview8_1.gif', 'preview9_1.gif'
  ];

  return (
    <section id="home" className="relative min-h-[100dvh] w-full flex flex-col pt-24 md:pt-32">
      
      {/* --- BACKGROUND LAYERS --- */}
      {/* Queen Layer - Absolute for background but sized relative to viewport */}
      <div className="absolute top-[35%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[60vw] max-w-[1000px] z-[1] pointer-events-none select-none">
        <div className="relative w-full aspect-square md:aspect-[4/3]">
            {/* Stars */}
            <StarIcon className="absolute -top-[20%] left-[5%] w-8 h-8 text-accent animate-pulse delay-100 drop-shadow-[0_0_10px_rgba(0,212,255,0.8)] opacity-60" />
            <StarIcon className="absolute -top-[10%] right-[0%] w-6 h-6 text-white animate-pulse delay-500 opacity-50" />
            <StarIcon className="absolute bottom-[0%] -left-[10%] w-5 h-5 text-accent animate-pulse delay-300 drop-shadow-[0_0_8px_rgba(0,212,255,0.6)] opacity-50" />
            <StarIcon className="absolute top-[50%] -right-[15%] w-4 h-4 text-slate-200 animate-pulse delay-700 opacity-60" />
            <StarIcon className="absolute top-[10%] left-[15%] w-4 h-4 text-white animate-pulse delay-200 opacity-70" />
            <StarIcon className="absolute bottom-[10%] right-[10%] w-5 h-5 text-accent animate-pulse delay-1000 opacity-40" />
            
            {/* Image */}
            <div className="w-full h-full animate-float">
                <img 
                  src={getAsset('queen.png')} 
                  alt="" 
                  className="w-full h-full object-contain opacity-40 blur-sm rotate-[18deg] drop-shadow-2xl" 
                />
            </div>
        </div>
      </div>

      {/* --- MAIN CONTENT (Flex Column) --- */}
      {/* BOXED CONTAINER: max-w-[1100px] + Horizontal Padding */}
      <div className="flex-grow flex flex-col justify-center items-center w-full max-w-[1100px] mx-auto px-6 md:px-10 z-10 pb-8">
        
        <div className="text-center flex flex-col items-center">
          <h1 className="text-[2.75rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[1] md:leading-[0.95] mb-6 font-semibold tracking-tight drop-shadow-2xl">
            frame by frame <br />
            <em className="font-serif italic font-light text-gray-200">story by story</em>
          </h1>
          
          <p className="text-base md:text-[1.25rem] text-slate-300 mb-8 md:mb-10 leading-[1.6] md:leading-[1.6] drop-shadow-lg max-w-2xl mx-auto">
            i specialize in designing powerful visual narratives <br className="hidden md:block" />
            that help creators strengthen their brand.
          </p>
          
          {/* Buttons: Side by side, small */}
          <div className="flex flex-row justify-center gap-3 w-full md:w-auto">
            <a 
              href="#projects" 
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gradient-to-b from-white to-gray-200 text-black px-5 py-2.5 md:px-6 md:py-3 rounded-xl md:rounded-2xl border border-white/10 shadow-lg font-bold text-sm md:text-base hover:-translate-y-[2px] hover:brightness-105 transition-all whitespace-nowrap min-w-[120px]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M10 3H3V10H10V3Z" /><path d="M21 3H14V10H21V3Z" /><path d="M21 14H14V21H21V14Z" /><path d="M10 14H3V21H10V14Z" />
              </svg>
              projects
            </a>
            <a 
              href={CONTACT_LINK} 
              target="_blank" 
              rel="noreferrer" 
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gradient-to-b from-white to-gray-200 text-black px-5 py-2.5 md:px-6 md:py-3 rounded-xl md:rounded-2xl border border-white/10 shadow-lg font-bold text-sm md:text-base hover:-translate-y-[2px] hover:brightness-105 transition-all whitespace-nowrap min-w-[120px]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
              contact
            </a>
          </div>
        </div>
      </div>

      {/* --- MARQUEE --- */}
      {/* Full width 100vw container (Outside the boxed layout for visual impact) */}
      <div className="w-full mt-auto z-20 pb-6 md:pb-8">
        <div className="w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)' }}>
            <div className="flex gap-4 md:gap-6 w-max animate-scroll">
            {[...marqueeImages, ...marqueeImages, ...marqueeImages].map((img, idx) => (
                <div key={`${img}-${idx}`} className="h-[120px] md:h-[180px] aspect-video bg-[#050505] border border-white/10 rounded-xl flex-shrink-0 overflow-hidden">
                    <img src={getAsset(img)} alt="" className="w-full h-full object-cover" />
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;