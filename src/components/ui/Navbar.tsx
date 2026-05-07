'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/lib/data';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg glass flex items-center justify-center border border-[#00f5ff]/20 group-hover:border-[#00f5ff]/60 group-hover:glow-cyan transition-all duration-300">
              <span className="font-display font-black text-lg gradient-text">AK</span>
            </div>
            <span className="font-display font-bold text-sm tracking-widest text-white/70 group-hover:text-white transition-colors hidden sm:block">
              ANKIT Yadav
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 font-mono text-xs tracking-wider uppercase transition-colors ${
                  active === link.href.replace('#', '')
                    ? 'text-[#00f5ff]'
                    : 'text-white/50 hover:text-white/90'
                }`}
              >
                {active === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-md glass border border-[#00f5ff]/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-5 py-2 rounded-lg text-xs font-mono tracking-wider"
            >
              Resume ↗
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-primary px-5 py-2 rounded-lg text-xs"
            >
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[73px] z-40 glass-strong border-b border-white/5 md:hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left py-3 px-4 rounded-lg font-mono text-sm tracking-wider uppercase transition-all ${
                    active === link.href.replace('#', '')
                      ? 'text-[#00f5ff] glass border border-[#00f5ff]/20'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
                <a href="/resume.pdf" target="_blank" className="btn-outline flex-1 py-3 rounded-lg text-xs text-center font-mono">
                  Resume ↗
                </a>
                <button onClick={() => scrollTo('#contact')} className="btn-primary flex-1 py-3 rounded-lg text-xs">
                  <span>Hire Me</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
