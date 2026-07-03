"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { MapPin, Calendar, Briefcase } from "lucide-react";

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm mb-2 tracking-widest uppercase">
            04. Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-violet-600 via-purple-500/50 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] top-5 w-5 h-5 rounded-full bg-gray-950 border-2 border-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.5)]">
                  <div className="w-full h-full rounded-full bg-violet-500/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  </div>
                </div>

                <div className="bg-gray-900/40 border border-gray-800/80 rounded-2xl p-6 hover:border-violet-500/30 transition-all hover:bg-gray-900/60">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg leading-tight">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={13} className="text-violet-400" />
                        <span className="text-violet-400 font-medium text-sm">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-xs text-gray-500 sm:items-end shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={11} />
                        <span>
                          {formatDate(exp.startDate)} —{" "}
                          {exp.endDate ? formatDate(exp.endDate) : "Present"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={11} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="text-violet-500 mt-1.5 shrink-0 text-xs">
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-violet-400/70 bg-violet-500/8 border border-violet-500/15 px-2.5 py-0.5 rounded-full font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
