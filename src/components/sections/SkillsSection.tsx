'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

const categories = [
  { key: 'languages', label: 'Languages', color: '#00f5ff' },
  { key: 'frameworks', label: 'Frameworks', color: '#8b5cf6' },
  { key: 'data', label: 'Data & ML', color: '#fbbf24' },
  { key: 'tools', label: 'Tools', color: '#f43f5e' },
];

interface Skill { name: string; level: number }

function SkillBar({ skill, color, delay, inView }: { skill: Skill; color: string; delay: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-mono text-sm text-white/80">{skill.name}</span>
        <span className="font-mono text-xs" style={{ color }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [active, setActive] = useState('languages');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const activeCategory = categories.find(c => c.key === active)!;
  const activeSkills = skills[active as keyof typeof skills] as Skill[];

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute left-0 top-1/2 w-80 h-80 rounded-full bg-[#00f5ff]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <SectionHeading
          tag="Skills"
          title="My"
          highlight="Expertise"
          subtitle="A curated stack of technologies I use to build and ship products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Category tabs */}
          <div className="space-y-3">
            <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-6">Categories</p>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  active === cat.key
                    ? 'border-opacity-40 glass'
                    : 'border-white/5 hover:border-white/15'
                }`}
                style={active === cat.key ? { borderColor: `${cat.color}40` } : {}}
              >
                <div>
                  <p className="font-display font-bold text-sm" style={{ color: active === cat.key ? cat.color : 'rgba(255,255,255,0.7)' }}>
                    {cat.label}
                  </p>
                  <p className="font-mono text-xs text-white/30 mt-0.5">
                    {(skills[cat.key as keyof typeof skills] as Skill[]).length} skills
                  </p>
                </div>
                {active === cat.key && (
                  <motion.div
                    layoutId="cat-dot"
                    className="w-2 h-2 rounded-full"
                    style={{ background: cat.color }}
                  />
                )}
              </button>
            ))}

            {/* Tech icons cloud */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {skills.icons.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.05 * i }}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-lg glass border border-white/8 text-white/50 hover:text-[#00f5ff] hover:border-[#00f5ff]/30 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Skill bars */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="glass border border-white/8 rounded-3xl p-8 space-y-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-8 rounded-full" style={{ background: activeCategory.color }} />
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">{activeCategory.label}</h3>
                    <p className="font-mono text-xs text-white/40">Proficiency levels</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {activeSkills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      color={activeCategory.color}
                      delay={0.05 * i}
                      inView={inView}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Proficiency legend */}
            <div className="mt-4 flex items-center gap-6 px-2">
              {[
                { label: 'Beginner', range: '< 50%' },
                { label: 'Intermediate', range: '50–75%' },
                { label: 'Advanced', range: '75–90%' },
                { label: 'Expert', range: '90%+' },
              ].map(({ label, range }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="font-mono text-[10px] text-white/30">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
