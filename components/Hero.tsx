import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 z-10">
      <div className="max-w-4xl mx-auto space-y-8 animate-[fadeIn_1s_ease-out]">
        <h2 className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4">
          Portfolio
        </h2>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white">
          {PERSONAL_INFO.name.toUpperCase()}
        </h1>
        
        <div className="h-1 w-24 bg-gradient-to-r from-brand-accent to-brand-secondary mx-auto rounded-full my-6"></div>

        <p className="text-xl md:text-2xl text-brand-text/80 font-light max-w-2xl mx-auto leading-relaxed">
          {PERSONAL_INFO.title} & Technologist
        </p>

        <p className="text-md md:text-lg text-brand-muted max-w-xl mx-auto italic">
          "{PERSONAL_INFO.tagline}"
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
            <a 
              href="#experience"
              className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-brand-accent transition-colors duration-300"
            >
              View Work
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-8 py-3 border border-white/20 text-white rounded hover:bg-white/10 transition-colors duration-300 flex items-center gap-2"
            >
              <Mail size={18} /> Contact Me
            </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-muted">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;