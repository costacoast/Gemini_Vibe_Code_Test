import React from 'react';
import { Project } from '../types';
import { Trophy } from 'lucide-react';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="group relative bg-brand-surface border border-white/5 rounded-xl overflow-hidden hover:border-brand-accent/30 transition-all duration-500 flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      
      {/* 16:9 Media Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-black">
        {project.mediaType === 'video' ? (
          <video 
            src={project.mediaUrl} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
            autoPlay 
            muted 
            loop 
            playsInline 
          />
        ) : (
          <img 
            src={project.mediaUrl} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        )}
        
        {/* Overlay gradient for text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 flex-grow flex flex-col relative">
        
        {/* Animated accent line */}
        <div className="absolute top-0 left-0 h-[1px] w-0 bg-brand-accent group-hover:w-full transition-all duration-700"></div>

        {project.subtitle && (
          <h4 className="text-brand-accent font-mono text-xs tracking-widest uppercase mb-3">
            {project.subtitle}
          </h4>
        )}

        <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight group-hover:text-brand-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-brand-text/70 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {project.awards && project.awards.length > 0 && (
          <div className="mt-auto pt-6 border-t border-white/5">
            <div className="flex flex-wrap gap-3">
              {project.awards.map((award, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-brand-muted">
                  <Trophy size={12} className="text-yellow-500" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;