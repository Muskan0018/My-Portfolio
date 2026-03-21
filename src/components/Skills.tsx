import React from 'react';
import { motion } from 'motion/react';
import { Code2, Globe, Terminal, Cpu, Database } from 'lucide-react';

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <Terminal className="text-emerald-500" />,
    items: ["Core Java", "Spring Boot", "C", "C++", "Python (Basics)"]
  },
  {
    title: "Web Technologies",
    icon: <Globe className="text-emerald-500" />,
    items: ["HTML", "CSS", "JavaScript", "React JS"]
  },
  {
    title: "Database & Tools",
    icon: <Database className="text-emerald-500" />,
    items: ["DBMS (Basics)", "MySQL", "Git", "VS Code", "Postman", "MS Office"]
  },
  {
    title: "Other Skills",
    icon: <Cpu className="text-emerald-500" />,
    items: ["Generative AI (Basics)", "Written & Verbal Communication", "Quick Learner"]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-right flex flex-col items-end"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-emerald-500">Expertise</span></h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all group h-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                {group.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{group.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/5 text-slate-300 text-xs font-medium hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500"
      >
        <p className="text-slate-300 italic text-lg leading-relaxed">
          "Enthusiastic and dedicated BCA student with strong fundamentals in programming, web technologies, and problem-solving. Seeking an entry-level opportunity to apply my skills, learn from real-world challenges, and contribute to the growth of a forward-thinking organization."
        </p>
      </motion.div>
    </section>
  );
};
