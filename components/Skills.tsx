"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm mb-2 tracking-widest uppercase">
            02. Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-gray-900/40 border border-gray-800/80 rounded-2xl p-6 hover:border-violet-500/30 transition-all hover:bg-gray-900/60 group"
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-6 group-hover:text-violet-300 transition-colors">
                {cat.category}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-violet-400 text-xs font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: catIdx * 0.1 + skillIdx * 0.08,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-sm mb-4 font-mono">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "Git",
              "Tailwind",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs text-gray-500 border border-gray-800 hover:border-violet-500/30 hover:text-violet-400 px-3 py-1.5 rounded-full transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
