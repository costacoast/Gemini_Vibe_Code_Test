import React from 'react';
import { Project } from '../types';
import { Trophy, ArrowRight, Play, Youtube, Video } from 'lucide-react';

interface Props {
  project: Project;
  onClick: (id: string) => void;
}

const ProjectCard: React.FC<Props> = ({ project, onClick }) => {
  // Determine the display image: Use thumbnailUrl if available, otherwise mediaUrl (only if it's an image)
  // If it's a video/embed without a thumbnail, we render a placeholder or the video element if local
  const displayImage = project.thumbnailUrl || (project.mediaType === 'image' ? project.mediaUrl : null);

  return (
    <div 
      onClick={() => onClick(project.id)}
      className="group relative bg-brand-surface border border-white/5 rounded-xl overflow-hidden hover:border-brand-accent/30 transition-all duration-500 flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer"
    >
      
      {/* 16:9 Media Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-black">
        
        {project.mediaType === 'video' && !project.thumbnailUrl ? (
           // Direct video file without thumbnail - try to autoplay muted loop
           <video 
            src={project.mediaUrl} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
            muted 
            loop 
            playsInline 
            onMouseOver={e => e.currentTarget.play()}
            onMouseOut={e => e.currentTarget.pause()}
          />
        ) : (
          // Standard Image or Thumbnail for Video/Embed
          <img 
            src={displayImage || 'https://placehold.co/600x400/000000/FFF?text=No+Image'} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent opacity-60"></div>
        
        {/* Media Type Icon (Center) */}
        {(project.mediaType === 'youtube' || project.mediaType === 'vimeo' || project.mediaType === 'video') && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-3 rounded-full border border-white/20 text-white opacity-80 group-hover:scale-110 transition-all duration-300">
                <Play size={20} fill="currentColor" />
            </div>
        )}

        {/* View Project Indicator */}
        <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur-sm text-white text-xs font-mono py-1 px-3 rounded-full opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 border border-white/10">
          VIEW PROJECT <ArrowRight size={12} />
        </div>
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

        <p className="text-brand-text/70 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
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