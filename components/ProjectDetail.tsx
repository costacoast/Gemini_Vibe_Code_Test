import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ChevronLeft, ChevronRight, Trophy, ExternalLink, Layers, Tag } from 'lucide-react';

interface Props {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectDetail: React.FC<Props> = ({ project, onClose, onNext, onPrev }) => {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  const renderMedia = () => {
    switch (project.mediaType) {
      case 'youtube':
        return (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${project.mediaUrl}?autoplay=1&modestbranding=1&rel=0`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      case 'vimeo':
        return (
          <iframe
            className="w-full h-full"
            src={`https://player.vimeo.com/video/${project.mediaUrl}?autoplay=1&title=0&byline=0&portrait=0`}
            title={project.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      case 'video':
        return (
          <video 
            src={project.mediaUrl} 
            className="w-full h-full object-cover" 
            autoPlay 
            muted 
            loop 
            controls
            playsInline 
          />
        );
      case 'image':
      default:
        return (
          <img 
            src={project.mediaUrl} 
            alt={project.title} 
            className="w-full h-full object-contain bg-black"
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl overflow-y-auto animate-[fadeIn_0.3s_ease-out]">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 flex justify-between items-center p-6 md:p-8 bg-gradient-to-b from-black via-black/90 to-transparent">
        <button 
          onClick={onClose}
          className="flex items-center gap-3 text-brand-text/70 hover:text-brand-accent transition-colors group"
        >
          <div className="p-2 rounded-full border border-white/10 group-hover:border-brand-accent/50 group-hover:bg-brand-accent/10 transition-all">
            <X size={20} />
          </div>
          <span className="font-mono text-sm tracking-widest uppercase hidden md:inline-block">Back to Gallery</span>
        </button>

        <div className="flex gap-4">
           <button 
            onClick={onPrev}
            className="p-3 rounded-full border border-white/10 text-white hover:bg-white/10 hover:border-brand-accent/50 hover:text-brand-accent transition-all group"
            aria-label="Previous Project"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button 
            onClick={onNext}
            className="p-3 rounded-full border border-white/10 text-white hover:bg-white/10 hover:border-brand-accent/50 hover:text-brand-accent transition-all group"
            aria-label="Next Project"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 pt-4">
        {/* Media Hero */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-brand-accent/5 border border-white/10 mb-12 bg-black">
          {renderMedia()}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10 animate-[fadeIn_0.5s_ease-out_0.2s_both]">
             <div>
                {project.subtitle && (
                  <h3 className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-brand-accent"></span>
                    {project.subtitle}
                  </h3>
                )}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-8">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-brand-text/90 leading-relaxed font-light">
                  {project.description}
                </p>
             </div>

             {/* Detailed Description Placeholder */}
             <div className="text-brand-muted space-y-6 text-lg leading-relaxed border-t border-white/5 pt-8">
                <p>
                  This project represents a significant intersection of creativity and technical innovation. 
                  The solution required a bespoke architecture, designed to handle high-traffic loads while delivering 
                  a seamless, cinematic user experience across all devices.
                </p>
                <p>
                  By leveraging modern web technologies and optimizing asset delivery, we achieved a performance 
                  benchmark that set a new standard for the client's digital presence. The result is not just a website, 
                  but an immersive digital product that drives engagement and conversion.
                </p>
             </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8 animate-[fadeIn_0.5s_ease-out_0.4s_both]">
             {/* Awards */}
             {project.awards && project.awards.length > 0 && (
               <div className="bg-brand-surface border border-white/10 rounded-xl p-8 hover:border-brand-accent/30 transition-colors">
                 <h4 className="text-white font-bold mb-6 flex items-center gap-3 font-display text-lg">
                   <Trophy size={18} className="text-brand-accent" /> Awards & Recognition
                 </h4>
                 <ul className="space-y-4">
                   {project.awards.map((award, i) => (
                     <li key={i} className="text-brand-text/80 text-sm border-l-2 border-white/10 pl-4 py-1">
                       {award}
                     </li>
                   ))}
                 </ul>
               </div>
             )}

             {/* Project Metadata */}
             <div className="bg-brand-surface border border-white/10 rounded-xl p-8 hover:border-brand-accent/30 transition-colors">
                <h4 className="text-white font-bold mb-6 font-display text-lg flex items-center gap-3">
                  <Layers size={18} className="text-brand-secondary" /> Project Details
                </h4>
                <div className="space-y-5 text-sm">
                   <div>
                     <span className="block text-brand-muted mb-1 text-xs uppercase tracking-wider">Role</span>
                     <span className="text-brand-text font-medium">Creative Director, Technical Lead</span>
                   </div>
                   <div>
                     <span className="block text-brand-muted mb-1 text-xs uppercase tracking-wider">Client</span>
                     <span className="text-brand-text font-medium">{project.company || "Global Brand"}</span>
                   </div>
                   <div>
                     <span className="block text-brand-muted mb-1 text-xs uppercase tracking-wider">Year</span>
                     <span className="text-brand-text font-medium">2023</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;