import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

interface Props {
  onProjectSelect: (id: string) => void;
}

const WorkSection: React.FC<Props> = ({ onProjectSelect }) => {
  return (
    <section id="work" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center md:text-left animate-[fadeIn_0.5s_ease-out]">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Selected Works</h2>
          <div className="h-1 w-12 bg-brand-accent rounded-full mx-auto md:mx-0 mb-6"></div>
          <p className="text-brand-muted max-w-2xl text-lg">
            A curated collection of projects exploring the intersection of design, technology, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={onProjectSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;