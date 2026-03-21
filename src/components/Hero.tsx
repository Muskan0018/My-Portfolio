import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToExperience = () => {
    document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for Internships & Job opportunities
        </div>

        <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-6">
          Muskan <span className="text-emerald-500">Mishra</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          BCA Student & Aspiring Software Developer passionate about technology and learning how software works.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm mb-12">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-emerald-500" />
            Kanpur, Uttar Pradesh, India
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-emerald-500" />
            muskanmishra1806@gmail.com
          </div>
          {/* <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">PH:</span>
            +91 8960901343
          </div> */}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToExperience}
            className="px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 w-full sm:w-auto"
          >
            View Experience
          </motion.button>
          <motion.button
            onClick={onOpenResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Download Resume
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
      </motion.div>
    </section>
  );
};
