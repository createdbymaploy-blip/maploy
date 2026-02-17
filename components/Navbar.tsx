import React, { useState, useEffect } from 'react';
import { getAsset, NAV_LINKS, CONTACT_LINK } from '../constants';
import '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Calculate offset to account for the fixed navbar height and some breathing room
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: targetId === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed top-5 left-0 w-full flex justify-center z-50 px-5 pointer-events-none">
      <nav 
        className={`
          grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center 
          bg-nav-bg backdrop-blur-xl border border-white/10 
          py-3 px-6 rounded-2xl w-full max-w-[1000px] transition-all duration-300 pointer-events-auto
          ${isScrolled ? 'shadow-lg shadow-black/20' : ''}
        `}
      >
        <div className="flex items-center gap-3 justify-self-start">
          <img 
            src={getAsset('logo.png')} 
            alt="Logo" 
            className="w-6 h-6 rounded-md object-cover" 
            onError={(e) => {
                // Fallback if image not found
                (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <span className="font-semibold text-base">maploy</span>
        </div>

        <div className="hidden md:flex gap-6 justify-self-center">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="justify-self-end">
          <a 
            href={CONTACT_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 bg-gradient-to-b from-white to-gray-200 text-black px-4 py-2 rounded-xl border border-white/10 shadow-lg font-semibold text-sm hover:scale-105 transition-transform"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
            contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;