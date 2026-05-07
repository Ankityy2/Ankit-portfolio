'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

const typeIcons = {
  'Academic / Project': GraduationCap,
  'Entrepreneurial': Briefcase,
};

const typeColors = {
  'Academic / Project': '#00f5ff',
  'Entrepreneurial': '#fbbf24',
};

export default function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute left-1/4 bottom-1/4 w-80 h-80 rounded-full bg-[#fbbf24]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <SectionHeading
          tag="Experience"
          title="My"
          highlight="Journey"
          subtitle="Building real-world skills through projects, academics, and entrepreneurship."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff]/40 via-[#8b5cf6]/30 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, i) => {
              const Icon = typeIcons[exp.type as keyof typeof typeIcons] || Briefcase;
              const color = typeColors[exp.type as keyof typeof typeColors] || '#00f5ff';

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.2, duration: 0.7 }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 -translate-x-1/2">
                    <div
                      className="relative w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: `${color}15`, border: `1px solid ${color}40` }}
                    >
                      <Icon size={16} style={{ color }} />
                      {/* Pulse */}
                      <span
                        className="absolute inset-0 rounded-xl animate-ping opacity-20"
                        style={{ background: color }}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="glass border border-white/8 rounded-3xl p-8 hover:border-white/15 transition-all duration-300"
                    style={{ '--exp-color': color } as React.CSSProperties}
                  >
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-xl text-white">{exp.role}</h3>
                        <p className="font-mono text-sm mt-1" style={{ color }}>{exp.company}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span
                          className="font-mono text-xs px-3 py-1.5 rounded-full border inline-block"
                          style={{ borderColor: `${color}30`, background: `${color}10`, color }}
                        >
                          {exp.type}
                        </span>
                        <p className="font-mono text-xs text-white/30 mt-2">{exp.duration}</p>
                      </div>
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed mb-5">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((a) => (
                        <div key={a} className="flex items-start gap-2">
                          <CheckCircle2 size={13} style={{ color }} className="mt-0.5 flex-shrink-0" />
                          <span className="text-white/50 text-xs leading-relaxed">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
