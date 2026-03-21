import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';

const educationData = [
  {
    institution: "Chhatrapati Shahu Ji Maharaj University",
    degree: "Bachelor of computer Applications",
    field: "Computer Programming",
    dates: "June 2023 - June 2026",
    status: "Pursuing",
    score: "8.20 CGPA",
    description: "Developing core skills in programming, web development, and databases. Maintaining a strong academic record with a focus on software engineering principles."
  },
  {
    institution: "B.P.M.G. Inter College",
    degree: "Intermediate (Class 12th)",
    dates: "April 2022 - March 2023",
    score: "71%",
    description: "Completed secondary education with a focus on foundational subjects and scientific principles."
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Academic <span className="text-emerald-500">Journey</span></h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </motion.div>

      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/[0.07] transition-all"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap size={80} className="text-emerald-500" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                  {edu.status && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                      {edu.status}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-emerald-400 font-medium flex items-center gap-2">
                    <ChevronRight size={16} />
                    {edu.degree} {edu.field && `• ${edu.field}`}
                  </p>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-500 text-xs font-bold">
                    {edu.score}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {edu.dates}
                </div>
                {index === 0 && (
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    Kanpur, India
                  </div>
                )}
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-3xl">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
