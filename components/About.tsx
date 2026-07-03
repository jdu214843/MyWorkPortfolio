"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Users } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies", value: "15+" },
];

const highlights = [
  {
    icon: Code2,
    text: "I focus on writing clean, maintainable, and well-structured code",
  },
  {
    icon: Globe,
    text: "I stay up-to-date with the latest trends in modern web development",
  },
  {
    icon: Users,
    text: "Strong experience working in teams and communicating effectively",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm mb-2 tracking-widest uppercase">
            01. About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 flex items-center justify-center text-white text-7xl font-bold shadow-2xl shadow-violet-900/30">
                AB
              </div>
              <div className="absolute -bottom-3 -right-3 w-64 h-64 rounded-2xl border-2 border-violet-500/20" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl border border-violet-500/20" />
              {/* Status badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 border border-gray-700 rounded-full px-4 py-1.5 flex items-center gap-2 text-sm text-gray-300 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for work
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              I&apos;m <span className="text-white font-medium">Asilbek Boysoatov</span>, a Full Stack Developer from Uzbekistan,
              currently based in <span className="text-white font-medium">Japan</span> — working as a Software Developer at Fujifilm System Services.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              I have strong skills in React, Next.js, and Node.js. I care deeply
              about user experience, performance, and shipping clean, quality
              code that makes an impact.
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-400">
                  <div className="mt-0.5 w-7 h-7 rounded-lg bg-violet-600/15 flex items-center justify-center shrink-0">
                    <item.icon size={14} className="text-violet-400" />
                  </div>
                  <span className="text-sm leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 bg-gray-900/60 rounded-xl border border-gray-800 hover:border-violet-500/30 transition-colors"
                >
                  <div className="text-2xl font-bold text-violet-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
