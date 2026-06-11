import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, FileText } from 'lucide-react';
import { ResumePrintView } from './ResumePrintView';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-md print:hidden"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-500">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Resume Preview</h3>
                  <p className="text-xs text-slate-400">A4 Document Format</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors"
                >
                  <Printer size={16} />
                  Print / Save PDF
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Scrollable Content (The PDF-like view) */}
            <div className="flex-1 overflow-y-auto p-4 md:p-12 bg-slate-800/50 custom-scrollbar">
              <div className="mx-auto shadow-2xl transform origin-top scale-[0.85] sm:scale-100 transition-transform">
                {/* We reuse the ResumePrintView but without the 'hidden' class for preview */}
                <div className="bg-white text-black p-12 w-full max-w-[210mm] mx-auto min-h-[297mm] shadow-inner">
                  <ResumePreviewContent />
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="p-4 bg-slate-900 border-t border-white/10 text-center">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                Tip: Use "Save as PDF" in the print dialog for a digital copy
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Internal component to avoid duplicating the resume content logic
// We can also just export the content part from ResumePrintView
export const ResumePreviewContent: React.FC = () => {
  return (
    <div className="text-black">
      <div className="border-b-2 border-black pb-4 mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-tight">Muskan Mishra</h1>
        <div className="flex flex-wrap gap-4 mt-2 text-sm">
          <span>muskanmishra1806@gmail.com</span>
          <span>+91 8960901343</span>
          <span>Kanpur, Uttar Pradesh, India</span>
        </div>
        <div className="flex flex-wrap gap-4 mt-1 text-xs text-slate-600">
          <span>linkedin.com/in/muskanmishra07</span>
          <span>github.com/Muskan0018</span>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2">Professional Summary</h2>
        <p className="text-sm leading-relaxed">
          Enthusiastic and dedicated BCA student with strong fundamentals in programming, web technologies, and problem-solving. Seeking an entry-level opportunity to apply my skills, learn from real-world challenges, and contribute to the growth of a forward-thinking organization. Eager to begin my career in a dynamic environment where I can continue to grow both personally and professional.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2">Skills</h2>
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <div><strong>Programming:</strong> C, C++, JavaScript, Java, Python (Basics)</div>
          <div><strong>Web Tech:</strong> HTML, CSS, React JS</div>
          <div><strong>Database:</strong> DBMS (Basics)</div>
          <div><strong>Tools:</strong> Git, VS Code, Postman, MS Office</div>
          <div className="col-span-2"><strong>Other:</strong> Written & Verbal Communication, Quick Learner</div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2">Projects</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between font-bold text-sm">
              <span>Pre-Hire-Check (Java,Spring Boot, React, Groq API)</span>
              <span>July 2025 - Currently</span>
            </div>
            <ul className="list-disc ml-5 text-xs mt-1 space-y-1">
              <li>Built an AI-powered website that scans users’ public content (LinkedIn, GitHub, Resume) to detect risks and unprofessional posts.</li>
              <li>Developed using Java Spring Boot, React.js, and GPT-4 API for content analysis and sentiment checking.</li>
              <li>Implemented secure Google Auth login and integrated external APIs for real-time data fetching.</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between font-bold text-sm">
              <span>Cafe-Landing-Page (HTML, CSS)</span>
              <span>Completed</span>
            </div>
            <ul className="list-disc ml-5 text-xs mt-1 space-y-1">
              <li>A beautifully styled Café Landing Page built with pure HTML & CSS, focused on elegant UI design and structured sections.</li>
              <li>Focused on box modeling, form styling, and clean code structure.</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between font-bold text-sm">
              <span>Amazon Clone (HTML, CSS)</span>
              <span>Completed</span>
            </div>
            <ul className="list-disc ml-5 text-xs mt-1 space-y-1">
              <li>Designed a static replica of Amazon’s homepage to showcase frontend development skills.</li>
              <li>Used modern layout techniques including Flexbox and Grid.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2">Education</h2>
        <div className="flex justify-between font-bold text-sm">
          <span>Bachelor of Computer Applications (BCA)</span>
          <span>2023 - Currently</span>
        </div>
        <div className="text-sm">Chhatrapati Shahu Ji Maharaj University, Kanpur</div>
        <div className="text-sm">Current CGPA: 8.25</div>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2">Certifications</h2>
        <div className="grid grid-cols-2 gap-x-4 text-xs">
          <ul className="list-disc ml-5 space-y-1">
            <li>Cyber Job Simulation – Deloitte</li>
            <li>Java Skill Up - GeeksforGeeks</li>
            <li>Introduction to Generative AI - Google Cloud</li>
            <li>JavaScript Full Course - GeeksforGeeks</li>
            <li>TCS iON Career Edge - Tata Consultancy Services</li>
          </ul>
          <ul className="list-disc ml-5 space-y-1">
            <li>HTML Tutorial - Great Learning</li>
            <li>CSS (Basic) - HackerRank</li>
            <li>C++ Training Course - Udemy</li>
            <li>Introduction to Excel - Coursera</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
