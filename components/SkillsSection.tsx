import React from 'react';
import { SKILLS } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10 bg-brand-surface/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Technical Arsenal</h2>
          <div className="h-1 w-12 bg-brand-secondary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div 
              key={idx} 
              className="bg-brand-dark border border-white/5 p-8 rounded-lg hover:border-brand-accent/30 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-brand-accent transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 bg-white/5 text-brand-text/80 text-sm rounded-full border border-white/5 group-hover:border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;