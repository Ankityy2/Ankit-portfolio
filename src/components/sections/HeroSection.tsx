'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import dynamic from 'next/dynamic';
import { personalInfo } from '@/lib/data';
import { MapPin, Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HeroSection() {
  const roles = personalInfo.roles.flatMap((r) => [r, 1800]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00f5ff]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#8b5cf6]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left — Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 w-fit">
              <div className="glass border border-[#00f5ff]/20 rounded-full px-4 py-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse" />
                <span className="font-mono text-xs text-[#00f5ff] tracking-widest">
                  AVAILABLE FOR WORK
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="font-display font-black leading-none">
                <span className="block text-white/90 text-5xl sm:text-6xl lg:text-7xl tracking-tight">
                  Hi, I'm
                </span>
                <span className="block text-6xl sm:text-7xl lg:text-8xl tracking-tight shimmer-text">
                  Ankit Yadav
                </span>
              </h1>
            </motion.div>

            {/* Role animation */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="font-mono text-white/40 text-sm">{'>'}</span>
              <div className="font-display text-xl sm:text-2xl font-bold">
                <TypeAnimation
                  sequence={roles as (string | number)[]}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={40}
                  repeat={Infinity}
                  className="gradient-text"
                />
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-white/40">
              <MapPin size={14} />
              <span className="font-mono text-xs tracking-wider">Delhi NCR, India</span>
            </motion.div>

            {/* Bio snippet */}
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-base leading-relaxed max-w-lg font-body"
            >
              MCA Graduate from CDAC-GGSIPU Noida (GPA: 8.04) — building intelligent full-stack apps,
              data pipelines, and AI systems. I turn complex problems into elegant solutions.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-primary px-8 py-4 rounded-xl text-sm flex items-center gap-2"
              >
                <span className="flex items-center gap-2">
                  <Mail size={16} />
                  Hire Me
                </span>
              </button>
              <a
                href="/resume.pdf"
                download
                className="btn-outline px-8 py-4 rounded-xl text-sm flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 glass border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:text-[#00f5ff] hover:border-[#00f5ff]/40 hover:glow-cyan transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              <span className="font-mono text-xs text-white/30 tracking-widest">FOLLOW</span>
            </motion.div>
          </motion.div>

          {/* Right — 3D canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            {/* Glow behind canvas */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-radial from-[#00f5ff]/10 via-[#8b5cf6]/5 to-transparent" />
            <HeroCanvas />

            {/* Floating stats cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 -left-4 glass border border-white/10 rounded-2xl px-4 py-3 hidden lg:block"
            >
              <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">GPA</p>
              <p className="font-display text-2xl font-black gradient-text">8.04</p>
              <p className="font-mono text-[10px] text-white/40">CDAC-GGSIPU</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-12 -left-4 glass border border-white/10 rounded-2xl px-4 py-3 hidden lg:block"
            >
              <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Projects</p>
              <p className="font-display text-2xl font-black gradient-text-gold">4+</p>
              <p className="font-mono text-[10px] text-white/40">Production</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -right-4 glass border border-white/10 rounded-2xl px-4 py-3 hidden lg:block"
            >
              <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Stack</p>
              <p className="font-display text-2xl font-black" style={{ color: '#8b5cf6' }}>15+</p>
              <p className="font-mono text-[10px] text-white/40">Technologies</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} className="text-[#00f5ff]/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
