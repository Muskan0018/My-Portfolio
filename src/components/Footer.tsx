import React from 'react';
import { Mail, Linkedin, MapPin, Github, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Let's <span className="text-emerald-500">Connect</span></h2>
            <p className="text-slate-400 max-w-md mb-8">
              Looking for opportunities to learn, grow, and gain real-world experience through internships, teamwork, and new challenges.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/muskanmishra07" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:muskanmishra1806@gmail.com" className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
                <Mail size={20} />
              </a>
              <a href="https://github.com/Muskan0018" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
                <Github size={20} />
              </a>
              <button 
                onClick={onOpenResume}
                className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-slate-950 transition-all"
                title="View Resume"
              >
                <FileText size={20} />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 mt-1">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Location</h4>
                <p className="text-slate-400">Kanpur, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 mt-1">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <p className="text-slate-400">muskanmishra1806@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-medium tracking-tighter">
            MUSKAN MISHRA <span className="text-emerald-500">© 2026</span>
          </div>
          
        </div>
      </div>
    </footer>
  );
};
