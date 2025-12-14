import React from 'react';
import { Job } from '../types';

interface Props {
  job: Job;
  isLast: boolean;
}

const ExperienceItem: React.FC<Props> = ({ job, isLast }) => {
  return (
    <div className="relative pl-8 md:pl-0 group">
      {/* Timeline line for Desktop */}
      <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-brand-text/10 -translate-x-1/2 group-last:bottom-auto group-last:h-full"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-[50%] top-0 w-4 h-4 rounded-full bg-brand-accent border-4 border-brand-dark -translate-x-[5px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>

      {/* Timeline line for Mobile */}
      <div className={`md:hidden absolute left-[1px] top-4 bottom-0 w-px bg-brand-text/10 ${isLast ? 'hidden' : 'block'}`}></div>

      <div className={`md:flex justify-between items-start gap-12 mb-16 ${isLast ? 'mb-0' : ''}`}>
        
        {/* Date (Left on Desktop) */}
        <div className="hidden md:block w-1/2 text-right pr-12 pt-1">
          <span className="font-mono text-brand-accent text-sm tracking-wider">{job.period}</span>
          <h3 className="text-2xl font-display font-bold text-white mt-1">{job.company}</h3>
          <p className="text-brand-muted">{job.role}</p>
        </div>

        {/* Content (Right on Desktop) */}
        <div className="md:w-1/2 md:pl-12 pt-1 relative">
           {/* Mobile Header */}
           <div className="md:hidden mb-4">
              <span className="font-mono text-brand-accent text-xs tracking-wider">{job.period}</span>
              <h3 className="text-xl font-display font-bold text-white">{job.company}</h3>
              <p className="text-brand-text/80">{job.role}</p>
           </div>

           {job.description && (
             <p className="text-brand-text/60 italic mb-4 text-sm border-l-2 border-brand-text/10 pl-4">
               {job.description}
             </p>
           )}

           <ul className="space-y-3">
             {job.highlights.map((highlight, idx) => (
               <li key={idx} className="flex gap-3 text-brand-text/90 text-sm leading-relaxed">
                 <span className="text-brand-accent mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-brand-accent/50"></span>
                 {highlight}
               </li>
             ))}
           </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;