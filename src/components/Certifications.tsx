import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ExternalLink, CheckCircle2, X, ZoomIn } from 'lucide-react';

import cert1 from '../assets/C++Udemy-certificate_page-.jpg';
import cert2 from '../assets/Coursera-introduction-of-Excel.jpeg';
import cert3 from '../assets/GFG-Js-Certificate.jpg';
import cert4 from '../assets/hackerrank_css_basic.jpg';
import cert5 from '../assets/HTML-_GreatLearning.jpeg';
import cert6 from '../assets/Introduction-to-GenerativeAI.jpg';
import cert7 from '../assets/Java-Skill-upgfg.jpg';
import cert8 from '../assets/tcs-ion.jpg';

const certifications = [
  {
    title: "TCS iON Career Edge",
    issuer: "Tata Consultancy Services",
    date: "2026",
    image: "src/assets/tcs-ion.jpg",
    // link: "#"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud / Simplilearn",
    date: "2025",
    image: "src/assets/Introduction-to-GenerativeAI.jpg",
    // link: "#"
  },
  {
    title: "Java Skill Up",
    issuer: "GeeksforGeeks",
    date: "2025",
    image: "src/assets/Java-Skill-upgfg.jpg",
    // link: "https://geeksforgeeks.org/user/muskan_mishra07/"
  },
  {
    title: "JavaScript Full Course",
    issuer: "GeeksforGeeks",
    date: "2024",
    image: "src/assets/GFG-Js-Certificate.jpg",
    // link: "https://geeksforgeeks.org/user/muskan_mishra07/"
  },
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "2025",
    image: "src/assets/hackerrank_css_basic.jpg",
    // link: "https://hackerrank.com/profile/muskanmishra0607"
  },  
  {
    title: "HTML Tutorial",
    issuer: "Great Learning",
    date: "2024",
    image: "src/assets/HTML- GreatLearning.jpeg",
    // link: "#"
  },
  
  {
    title: "C++ Training Course",
    issuer: "Udemy",
    date: "2024",
    image: "src/assets/C++Udemy-certificate_page-.jpg",
    // link: "#"
  },
  {
    title: "Introduction to Excel",
    issuer: "Coursera",
    date: "2023",
    image: "src/assets/Coursera-introduction-of-Excel.jpeg",
    // link: "#"
  }
];

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional <span className="text-emerald-500">Certifications</span></h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative flex flex-col rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-emerald-500/30 transition-all"
          >
            {/* Certificate Image Preview */}
            <div 
              className="relative aspect-[4/3] overflow-hidden bg-slate-900 cursor-zoom-in"
              onClick={() => setSelectedCert(cert)}
            >
              <img 
                src={cert.image} 
                alt={cert.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-3 rounded-full bg-emerald-500 text-white shadow-xl">
                  <ZoomIn size={20} />
                </div>
              </div>

              <div className="absolute top-4 right-4">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-500 backdrop-blur-md border border-emerald-500/20">
                  <Award size={16} />
                </div>
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-emerald-500 transition-colors line-clamp-1">
                {cert.title}
              </h3>
              <div className="flex items-center gap-2 text-slate-400 text-[10px] mb-4">
                <CheckCircle2 size={12} className="text-emerald-500" />
                {cert.issuer} • {cert.date}
              </div>

              <div className="mt-auto flex items-center justify-between">
                {/* <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  Verify <ExternalLink size={10} />
                </a> */}
                <span className="text-[10px] text-slate-600 font-mono">#{index + 1}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2 bg-black flex items-center justify-center">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[80vh] w-full object-contain"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500 w-fit mb-6">
                    <Award size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
                  <p className="text-slate-400 mb-6 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    Issued by {selectedCert.issuer} ({selectedCert.date})
                  </p>
                  
                  <div className="space-y-4">
                    {/* <a 
                      href={selectedCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors"
                    >
                      Verify Credential <ExternalLink size={18} />
                    </a> */}
                    <button 
                      onClick={() => setSelectedCert(null)}
                      className="w-full py-4 rounded-xl bg-white/5 text-white font-bold hover:bg-white/10 transition-colors"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
