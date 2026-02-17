import React from 'react';
import { CONTACT_LINK, TWITTER_LINK } from '../constants';
import '../types';

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <>
      <section className="py-40 pt-40 pb-24 relative z-10 px-5 text-center">
        <div className="max-w-[900px] mx-auto flex flex-col items-center relative">
           {/* Stars Decoration - Massively Increased Count for CTA */}
           
           {/* Left Side Cluster */}
           <StarIcon className="absolute -top-14 left-[5%] md:left-[10%] w-8 h-8 text-accent animate-pulse delay-100 drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
           <StarIcon className="absolute -top-4 left-[25%] w-4 h-4 text-white animate-pulse delay-300" />
           <StarIcon className="absolute top-24 left-[2%] w-3 h-3 text-slate-400 animate-pulse delay-700 opacity-60" />
           <StarIcon className="absolute bottom-32 left-[8%] w-3 h-3 text-slate-300 animate-pulse delay-500" />
           <StarIcon className="absolute bottom-10 left-[20%] w-2 h-2 text-white animate-pulse delay-200" />
           
           {/* Right Side Cluster */}
           <StarIcon className="absolute top-8 right-[8%] w-5 h-5 text-white animate-pulse delay-500 drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]" />
           <StarIcon className="absolute top-20 right-[20%] w-3 h-3 text-accent animate-pulse delay-200" />
           <StarIcon className="absolute bottom-20 right-[12%] w-4 h-4 text-slate-400 animate-pulse delay-1000" />
           <StarIcon className="absolute -top-10 right-[30%] w-2 h-2 text-white animate-pulse delay-100 opacity-70" />
           <StarIcon className="absolute bottom-40 right-[2%] w-3 h-3 text-accent animate-pulse delay-300 opacity-50" />

           {/* Center/Random Float */}
           <StarIcon className="absolute -top-20 left-[40%] w-2 h-2 text-white animate-pulse delay-500 opacity-40" />
           <StarIcon className="absolute bottom-5 left-[35%] w-1.5 h-1.5 text-accent animate-pulse delay-1000 opacity-80" />
           <StarIcon className="absolute top-0 right-[45%] w-1.5 h-1.5 text-slate-300 animate-pulse delay-200 opacity-50" />

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm font-semibold text-slate-300 mb-8">
              <span className="text-green-400 text-lg leading-none">•</span> available for work
           </div>
           
           <h2 className="text-[3rem] md:text-5xl leading-[1.1] font-bold tracking-tight mb-12 relative z-10">
             You have the vision. I have the tools.<br/>
             <em className="font-serif italic font-light text-slate-400 mt-2 block">Ready to build something iconic together?</em>
           </h2>

           <div className="flex flex-col md:flex-row gap-5 justify-center w-full max-w-sm md:max-w-none relative z-10 flex-wrap">
              <a href={CONTACT_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-gradient-to-b from-white to-gray-200 text-black px-8 py-4 rounded-2xl border border-white/10 shadow-lg font-bold text-lg hover:-translate-y-[2px] hover:brightness-105 transition-all w-full md:w-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
                Telegram
              </a>
              <a href="mailto:createdbymaploy@gmail.com" className="flex items-center justify-center gap-3 bg-gradient-to-b from-white to-gray-200 text-black px-8 py-4 rounded-2xl border border-white/10 shadow-lg font-bold text-lg hover:-translate-y-[2px] hover:brightness-105 transition-all w-full md:w-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
                Email
              </a>
              <a href={TWITTER_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-gradient-to-b from-white to-gray-200 text-black px-8 py-4 rounded-2xl border border-white/10 shadow-lg font-bold text-lg hover:-translate-y-[2px] hover:brightness-105 transition-all w-full md:w-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.662L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" />
                </svg>
                Twitter
              </a>
           </div>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-white/5 relative z-10">
        <p className="text-gray-500 text-sm">© 2026 bulat cherry | maploy</p>
      </footer>
    </>
  );
};

export default Footer;