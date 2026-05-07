'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import { Github, ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute right-1/4 top-1/4 w-72 h-72 rounded-full bg-[#fbbf24]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <SectionHeading
          tag="Projects"
          title="What I've"
          highlight="Built"
          subtitle="Production-grade projects that solve real problems with clean architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="project-card group relative glass border border-white/8 rounded-3xl overflow-hidden"
              style={{ borderColor: hovered === project.id ? `${project.color}30` : undefined }}
            >
              {/* Top gradient bar */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="font-mono text-xs px-3 py-1 rounded-full border mb-3 inline-block"
                      style={{ color: project.color, borderColor: `${project.color}30`, background: `${project.color}10` }}
                    >
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2 flex-shrink-0 ml-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 glass border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
                    >
                      <Github size={15} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 glass border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <CheckCircle2 size={13} style={{ color: project.color }} className="mt-0.5 flex-shrink-0" />
                      <span className="font-mono text-xs text-white/50">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-lg text-white/40"
                      style={{ background: `${project.color}08`, border: `1px solid ${project.color}20` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Hover CTA */}
                <AnimatePresence>
                  {hovered === project.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-5 pt-4 border-t border-white/5"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider"
                        style={{ color: project.color }}
                      >
                        View on GitHub <ArrowUpRight size={14} />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Background glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{ opacity: hovered === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}08 0%, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Ankityy2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm"
          >
            <Github size={18} />
            View All Projects on GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
