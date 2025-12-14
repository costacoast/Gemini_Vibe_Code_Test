import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-black relative z-10 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-display font-bold text-white mb-8">Let's Connect</h2>
        <p className="text-brand-muted mb-12 max-w-xl mx-auto">
          I am always interested in speaking at conferences, discussing new ventures, or exploring the future of digital creativity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
            <div className="p-4 bg-brand-accent/10 rounded-full text-brand-accent group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <div className="text-brand-text font-medium">{PERSONAL_INFO.email}</div>
          </a>

          <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5">
            <div className="p-4 bg-brand-secondary/10 rounded-full text-brand-secondary">
              <MapPin size={24} />
            </div>
            <div className="text-brand-text font-medium">{PERSONAL_INFO.location}</div>
          </div>

          <a href={`https://${PERSONAL_INFO.website}`} className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
             <div className="p-4 bg-brand-accent/10 rounded-full text-brand-accent group-hover:scale-110 transition-transform">
              <Globe size={24} />
            </div>
            <div className="text-brand-text font-medium">{PERSONAL_INFO.website}</div>
          </a>
        </div>

        <div className="text-brand-muted text-sm border-t border-white/5 pt-8">
          <p>&copy; {new Date().getFullYear()} Costa Boudouvas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;