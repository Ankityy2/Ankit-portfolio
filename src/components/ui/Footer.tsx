'use client';

import { personalInfo } from '@/lib/data';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl glass border border-[#00f5ff]/20 flex items-center justify-center">
              <span className="font-display font-black text-sm gradient-text">AY</span>
            </div>
            <div>
              <p className="font-display font-bold text-sm text-white/80">Ankit Yadav</p>
              <p className="font-mono text-[10px] text-white/30">Full Stack Developer · Delhi NCR</p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: personalInfo.github },
              { icon: Linkedin, href: personalInfo.linkedin },
              { icon: Mail, href: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass border border-white/8 rounded-xl flex items-center justify-center text-white/40 hover:text-[#00f5ff] hover:border-[#00f5ff]/30 transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Copyright + scroll top */}
          <div className="flex items-center gap-4">
            <p className="font-mono text-xs text-white/25">
              © {new Date().getFullYear()} Ankit Yadav
            </p>
            <button
              onClick={scrollTop}
              className="w-9 h-9 glass border border-white/8 rounded-xl flex items-center justify-center text-white/40 hover:text-[#00f5ff] hover:border-[#00f5ff]/30 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom credit line */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="font-mono text-[10px] text-white/20 tracking-widest">
            BUILT WITH NEXT.JS · FRAMER MOTION · THREE.JS · TAILWIND CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
