import React, { useState } from 'react';
import { getAsset } from '../constants';
import { FaqItem } from '../types';

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData: FaqItem[] = [
    { question: 'how much does the service cost?', answer: 'the cost depends on the complexity and scope of your project. please contact me directly, and i\'ll provide a custom quote tailored to your specific needs.' },
    { question: 'what do i need to get started?', answer: 'to get started, simply provide your content, brand guidelines, and any references you have in mind. i\'ll take care of the rest!' },
    { question: 'how long does it take to complete a project?', answer: 'i ensure efficient delivery without compromising quality, and turnaround times vary based on project complexity.' },
    { question: 'can i request revisions?', answer: 'yes! i offer revisions to ensure the final product aligns perfectly with your vision.' },
    { question: 'what formats will i receive?', answer: 'you\'ll receive high-quality optimized files in the required formats, ensuring seamless use across platforms.' },
    { question: 'do you provide custom designs?', answer: 'absolutely! every project is uniquely crafted to match your brand and audience.' },
  ];

  return (
    <section id="faq" className="py-24 relative z-10">
      {/* BOXED CONTAINER: max-w-[1100px] + Horizontal Padding */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-20 items-start">
        
        {/* LEFT COLUMN */}
        <div className="lg:sticky lg:top-20 relative">
            <StarIcon className="absolute -top-12 -left-8 w-8 h-8 text-accent animate-pulse delay-100 drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
            <StarIcon className="absolute top-0 right-10 w-4 h-4 text-white animate-pulse delay-300 opacity-60" />
            <StarIcon className="absolute top-[30%] -left-12 w-3 h-3 text-slate-400 animate-pulse delay-700 opacity-40" />
            
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm font-semibold text-slate-300 mb-4">
              <span className="text-accent text-lg leading-none">•</span> faq
            </div>
            <h2 className="text-[3.5rem] leading-[1.1] font-bold tracking-tight relative z-10">
             frequently<br/>
             <em className="font-serif italic font-light text-slate-400">asked questions</em>
           </h2>
           
           <div className="relative w-full max-w-[240px] aspect-square mt-10 mx-auto lg:mx-0 pointer-events-none select-none">
              <div className="w-full h-full animate-float">
                  <img 
                    src={getAsset('knight.png')} 
                    alt="Knight" 
                    className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                    style={{
                        transform: 'rotate(-15deg) scale(1.1)', 
                        opacity: 0.8
                    }}
                  />
              </div>
           </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4 relative z-10 pt-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              onClick={() => toggleFaq(index)}
              className={`
                group rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden
                ${activeIndex === index ? 'bg-[#0f172a]/80 border-accent shadow-[0_0_30px_-10px_rgba(0,212,255,0.15)]' : 'bg-[#0b1120]/60 border-white/10 hover:border-white/20'}
              `}
            >
              <div className="px-8 py-6 flex justify-between items-center select-none">
                <span className="text-xl font-semibold text-white lowercase tracking-tight">{item.question}</span>
                <span className={`text-slate-400 transition-all duration-300 ml-4 flex-shrink-0 ${activeIndex === index ? 'rotate-45 text-white' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5V19" /><path d="M5 12H19" />
                  </svg>
                </span>
              </div>
              <div 
                className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                   <p className="px-8 pb-8 text-slate-400 leading-relaxed text-lg lowercase">
                     {item.answer}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;