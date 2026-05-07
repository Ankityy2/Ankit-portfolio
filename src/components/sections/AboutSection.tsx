'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import { Code2, Database, Brain, Layers } from 'lucide-react';

const traits = [
  { icon: Code2, label: 'Full Stack Dev', desc: 'React, Next.js, Node, Flask', color: '#00f5ff' },
  { icon: Database, label: 'Data Analyst', desc: 'SQL, Power BI, Pandas', color: '#8b5cf6' },
  { icon: Brain, label: 'ML Engineer', desc: 'Scikit-learn, NLP, GPT', color: '#fbbf24' },
  { icon: Layers, label: 'Systems Thinker', desc: 'Cloud, Architecture, APIs', color: '#f43f5e' },
];

const stats = [
  { value: '8.04', label: 'GPA', sub: 'CDAC-GGSIPU' },
  { value: '4+', label: 'Projects', sub: 'Production-grade' },
  { value: '15+', label: 'Technologies', sub: 'Mastered' },
  { value: '2026', label: 'Graduate', sub: 'MCA' },
];

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute right-0 top-1/2 w-96 h-96 rounded-full bg-[#8b5cf6]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <SectionHeading
          tag="About Me"
          title="The Story"
          highlight="Behind the Code"
          subtitle="From mathematics to machines — a developer driven by curiosity and precision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass border border-white/8 rounded-3xl p-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00f5ff]/10 border border-[#00f5ff]/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-black text-lg gradient-text">AK</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">Ankit Yadav</h3>
                  <p className="font-mono text-xs text-[#00f5ff] tracking-widest mt-0.5">MCA · CDAC-GGSIPU Noida</p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed text-sm">
                {personalInfo.summary}
              </p>

              <p className="text-white/60 leading-relaxed text-sm">
                Beyond code, I run <span className="text-[#fbbf24] font-semibold">AK Clothing</span> — a clothing brand with a custom-built e-commerce platform,
                which taught me more about product ownership than any classroom could.
                I love the intersection of technical depth and real-world impact.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Python', 'React', 'SQL', 'Power BI', 'ML', 'Node.js'].map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-full glass border border-white/10 text-white/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map(({ value, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass border border-white/8 rounded-2xl p-4 text-center"
                >
                  <p className="font-display font-black text-2xl gradient-text leading-none">{value}</p>
                  <p className="font-display font-bold text-xs text-white/80 mt-1">{label}</p>
                  <p className="font-mono text-[10px] text-white/30 mt-0.5">{sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Trait cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {traits.map(({ icon: Icon, label, desc, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass border border-white/8 rounded-2xl p-6 group hover:border-white/20 transition-all duration-300"
                style={{ '--card-color': color } as React.CSSProperties}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <h4 className="font-display font-bold text-white text-base mb-1">{label}</h4>
                <p className="font-mono text-xs text-white/40">{desc}</p>
                <div
                  className="mt-4 h-px w-full opacity-30"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
