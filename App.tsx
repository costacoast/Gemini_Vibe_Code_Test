import React, { useState, useEffect } from 'react';
import NetworkBackground from './components/NetworkBackground';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import ExperienceItem from './components/ExperienceItem';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { EXPERIENCE, EDUCATION_DATA, NAV_LINKS, PROJECTS } from './constants';
import { Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);
  const currentIndex = PROJECTS.findIndex(p => p.id === selectedProjectId);

  const handleNextProject = () => {
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProjectId(PROJECTS[nextIndex].id);
  };

  const handlePrevProject = () => {
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProjectId(PROJECTS[prevIndex].id);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-accent selection:text-brand-dark">
      <NetworkBackground />
      
      {/* Project Detail Overlay */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProjectId(null)}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-display font-bold text-xl tracking-tight text-white">
            CB<span className="text-brand-accent">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-brand-text/70 hover:text-brand-accent transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-surface border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl">
             {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-base font-medium text-brand-text hover:text-brand-accent py-2 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        
        <WorkSection onProjectSelect={setSelectedProjectId} />
        
        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32 relative z-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-20 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Professional Experience</h2>
              <div className="h-1 w-12 bg-brand-accent rounded-full mx-auto md:mx-0"></div>
            </div>

            <div className="relative">
               {EXPERIENCE.map((job, index) => (
                 <ExperienceItem 
                   key={job.id} 
                   job={job} 
                   isLast={index === EXPERIENCE.length - 1} 
                 />
               ))}
            </div>
          </div>
        </section>

        <SkillsSection />

        {/* Education Section */}
        <section id="education" className="py-24 relative z-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12">Education</h2>
             
             {EDUCATION_DATA.map((edu, idx) => (
               <div key={idx} className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl border border-white/5 inline-block w-full max-w-2xl">
                 <h3 className="text-2xl font-bold text-white mb-2">{edu.school}</h3>
                 <p className="text-brand-accent font-mono text-sm mb-4">{edu.year} | {edu.location}</p>
                 <p className="text-lg text-brand-text/90">{edu.degree}</p>
               </div>
             ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;