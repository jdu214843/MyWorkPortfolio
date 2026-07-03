"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderOpen, GitBranch } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm mb-2 tracking-widest uppercase">
            03. Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Work
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm">
            A selection of projects I&apos;ve built for clients and participated in.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-gray-900/40 border border-gray-800/80 rounded-2xl p-6 hover:border-violet-500/40 transition-all hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(139,92,246,0.08)] flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <FolderOpen size={18} />
                </div>
                <div className="flex items-center gap-3">
                  {project.contributed && (
                    <span className="text-xs text-amber-400/80 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <GitBranch size={10} />
                      Contributed
                    </span>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-gray-600 hover:text-violet-400 transition-colors"
                    >
                      <FaGithub size={17} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live site"
                      className="text-gray-600 hover:text-violet-400 transition-colors"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-violet-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-violet-400/80 bg-violet-500/8 border border-violet-500/15 px-2.5 py-1 rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs text-gray-600 px-2 py-1">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
