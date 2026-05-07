'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certifications } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import { BadgeCheck } from 'lucide-react';

export default function CertificationsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <SectionHeading
          tag="Certifications"
          title="Verified"
          highlight="Credentials"
          subtitle="Industry-recognized certifications across data science, cloud, and development."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="cert-card glass border border-white/8 rounded-2xl p-6 flex items-start gap-4 hover:border-white/20 transition-all"
              style={{ '--cert-color': cert.color } as React.CSSProperties}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
              >
                <BadgeCheck size={20} style={{ color: cert.color }} />
              </div>
              <div className="min-w-0">
                <h4 className="font-display font-bold text-sm text-white leading-snug mb-1">
                  {cert.name}
                </h4>
                <p className="font-mono text-xs text-white/40">{cert.issuer}</p>
                <span
                  className="inline-block mt-2 font-mono text-[10px] px-2 py-0.5 rounded-full"
                  style={{ color: cert.color, background: `${cert.color}15`, border: `1px solid ${cert.color}25` }}
                >
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
