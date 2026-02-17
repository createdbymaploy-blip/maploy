import React from 'react';
import './types';
import AuroraBackground from './components/AuroraBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-white font-sans selection:bg-accent selection:text-black overflow-x-hidden">
      <AuroraBackground />
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <About />
        <Projects />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;