import React from 'react';
import '../constants';
import '../types';

const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-transparent to-[#010205] opacity-90" />
      
      {/* Blob 1 */}
      <div 
        className="absolute rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-blob"
        style={{
          background: 'radial-gradient(circle, #0055ff 0%, transparent 70%)',
          width: '80vw',
          height: '80vw',
          top: '-20%',
          left: '-20%',
        }}
      />
      
      {/* Blob 2 */}
      <div 
        className="absolute rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-blob"
        style={{
          background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)',
          width: '60vw',
          height: '60vw',
          top: '40%',
          right: '-10%',
          animationDelay: '-5s'
        }}
      />
      
      {/* Blob 3 */}
      <div 
        className="absolute rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-blob"
        style={{
          background: 'radial-gradient(circle, #008cff 0%, transparent 70%)',
          width: '90vw',
          height: '60vw',
          bottom: '-30%',
          left: '10%',
          animationDelay: '-10s'
        }}
      />
    </div>
  );
};

export default AuroraBackground;