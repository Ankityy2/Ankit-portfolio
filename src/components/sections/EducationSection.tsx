'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function EducationSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="section-padding relative">
      <div className="absolute right-0 top-1/2 w-72 h-72 rounded-full bg-[#00f5ff]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <SectionHeading
          tag="Education"
          title="Academic"
          highlight="Foundation"
          subtitle="Strong theoretical roots in mathematics and computer science."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="glass border border-white/8 rounded-3xl p-8 hover:border-[#00f5ff]/20 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#00f5ff]/10 border border-[#00f5ff]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} className="text-[#00f5ff]" />
              </div>

              {/* Info */}
              <h3 className="font-display font-bold text-xl text-white leading-tight mb-2">
                {edu.degree}
              </h3>
              <p className="gradient-text font-display font-bold text-base mb-4">
                {edu.institution}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-white/40">
                  <Calendar size={13} />
                  <span className="font-mono text-xs">{edu.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={13} className="text-[#fbbf24]" />
                  <span className="font-mono text-xs text-[#fbbf24]">{edu.gpa}</span>
                </div>
              </div>

              <div className="border-t border-white/5 pt-5">
                <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-3">Key Topics</p>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-lg glass border border-white/8 text-white/50"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
