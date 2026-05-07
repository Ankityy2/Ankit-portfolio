'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeadingProps {
  tag: string;
  title: string;
  highlight: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  tag, title, highlight, subtitle, align = 'center'
}: SectionHeadingProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <p className="section-tag mb-4">{`// ${tag}`}</p>
      <h2 className="font-display text-4xl sm:text-5xl font-black leading-tight">
        <span className="text-white/90">{title} </span>
        <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/50 text-base max-w-xl mx-auto font-body leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-px w-12 bg-gradient-to-r from-[#00f5ff] to-transparent" />
        <div className="w-2 h-2 rounded-full bg-[#00f5ff]" />
        <div className="h-px w-12 bg-gradient-to-l from-[#8b5cf6] to-transparent" />
      </div>
    </motion.div>
  );
}
