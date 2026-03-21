import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SplashScreen } from './components/SplashScreen';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { ResumePrintView } from './components/ResumePrintView';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-400">
      <AnimatedBackground />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <>
            <main key="content" className="relative z-10 print:hidden">
              <Hero onOpenResume={() => setIsResumeOpen(true)} />
              <Education />
              <Projects />
              <Certifications />
              <Skills />
              <Footer onOpenResume={() => setIsResumeOpen(true)} />
            </main>
            <ResumePrintView />
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
          </>
        )}
      </AnimatePresence>

      {/* Sticky Progress Indicator */}
      {!loading && (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50">
          {['hero', 'education', 'projects', 'certifications', 'skills'].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section === 'hero' ? 'root' : section)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex items-center justify-end"
            >
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-widest text-emerald-500 font-bold">
                {section}
              </span>
              <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-emerald-500 transition-colors" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
