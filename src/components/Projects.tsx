import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Code, Layout, Database } from 'lucide-react';
import { li } from 'motion/react-client';

const projects = [
  {
    title: "Pre-Hire-Check",
    description: "AI-powered reputation scanner that audits LinkedIn, GitHub, and resumes for unprofessional content using GPT-4. Features Google Auth, real-time API integrations, and smart rewrite suggestions.",
    tech: ["Java Spring Boot", "React.js", "GPT-4 API", "Google Auth", "PostgreSQL"],
    date: "July 2025 - Currently",
    icon: <Database className="text-emerald-500" />,
    github: "https://github.com/Muskan0018/Pre-Hire-Check",
    bullets: [
      "Built an AI-powered website to detect risks and unprofessional posts in public content.",
      "Developed using Java Spring Boot and React.js for seamless full-stack performance.",
      "Implemented secure Google Auth login and integrated external APIs for real-time data.",
      "Collaborated to ensure smooth functionality and a clean user experience."
    ]
  },
  {
    title: "Personal Portfolio",
    description: "A responsive personal portfolio website showcasing projects, skills, and contact information.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    date: "Completed",
    icon: <Layout className="text-emerald-500" />,
    github: "https://github.com/Muskan0018/My-Portfolio",
    link: "https://muskan0018.github.io/My-Portfolio/",
    bullets: [
      "Designed and developed a personal portfolio website using React.js and Tailwind CSS.",
      "Showcased projects, skills, and contact information in a clean and responsive layout.",
      "Implemented smooth animations and transitions for an engaging user experience."
    ]
  },
  {
    title: "Google Login Clone",
    description: "Front-end clone of Google's login page demonstrating skills in UI replication and form styling.",
    tech: ["HTML", "CSS"],
    date: "Completed",
    icon: <Layout className="text-emerald-500" />,
    github: "https://github.com/Muskan0018/Google-Login-Page-Clone",
    link: "https://muskan0018.github.io/Google-Login-Page-Clone/",
    bullets: [
      "Replicated Google's iconic login interface using pure HTML and CSS.",
      "Focused on box modeling, form styling, and clean code structure.",
      "Built without any frameworks to show foundational CSS mastery."
    ]
  },
  {
    title: "Amazon Clone",
    description: "A static replica of Amazon's homepage built to showcase advanced frontend development skills and layout precision.",
    tech: ["HTML", "CSS", "Flexbox", "Grid"],
    date: "Completed",
    icon: <Code className="text-emerald-500" />,
    github: "https://github.com/Muskan0018",
    bullets: [
      "Designed a pixel-perfect static replica of the Amazon homepage.",
      "Used modern layout techniques including Flexbox and Grid for responsiveness.",
      "Demonstrated skills in UI replication and clean CSS structure."
    ]
  },
  {
    title: "Cafe-Landing-Page",
    description: "A beautifully styled Café Landing Page built with pure HTML & CSS, focused on elegant UI design, structured sections, and a warm, inviting user experience.",
    tech: ["HTML", "CSS"],
    date: "Completed",
    icon: <Layout className="text-emerald-500" />,
    github: "https://github.com/Muskan0018/Cafe-Landing-Page",
    link: "https://muskan0018.github.io/Cafe-Landing-Page/",
    bullets: [
      "Built a responsive Cafe Landing Page using pure HTML & CSS.",
      "Designed clean UI with custom typography, colors, and layout sections.",
      "Focused on visual aesthetics to reflect a warm, inviting cafe brand."
    ]
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-emerald-500">Projects</span></h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-emerald-500/30 transition-all"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                  {project.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold bg-white/5 px-2 py-1 rounded">
                  {project.date}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <ul className="space-y-2 mb-8">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-xs text-slate-500 flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 rounded-md bg-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-500 transition-colors text-sm font-medium"
                >
                  <Github size={18} />
                  Code
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-500 transition-colors text-sm font-medium"
                >
                  <ExternalLink size={18} />
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
