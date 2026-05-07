'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send (replace with EmailJS or your backend)
    await new Promise(r => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f5ff]/2 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <SectionHeading
          tag="Contact"
          title="Let's"
          highlight="Work Together"
          subtitle="Open to full-time opportunities, freelance projects, and collaborations in Delhi NCR."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Availability tag */}
            <div className="glass border border-[#00f5ff]/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400 tracking-wider">AVAILABLE FOR HIRE</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Actively looking for entry-level roles in <span className="text-white font-semibold">Data Analytics</span>,{' '}
                <span className="text-white font-semibold">Full Stack Development</span>, or{' '}
                <span className="text-white font-semibold">Software Development</span> in Delhi NCR.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#00f5ff]" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{label}</p>
                    {href ? (
                      <a href={href} className="font-body text-sm text-white/70 hover:text-[#00f5ff] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-white/70">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">Find Me Online</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: personalInfo.github, label: 'GitHub' },
                  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 glass border border-white/10 rounded-2xl flex items-center justify-center text-white/50 hover:text-[#00f5ff] hover:border-[#00f5ff]/40 hover:glow-cyan transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass border border-white/8 rounded-3xl p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="form-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="form-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="form-input w-full rounded-xl px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="form-input w-full rounded-xl px-4 py-3 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="btn-primary w-full py-4 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-70"
              >
                <span className="flex items-center gap-2">
                  {status === 'idle' && (<><Send size={16} /> Send Message</>)}
                  {status === 'sending' && (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                      />
                      Sending...
                    </span>
                  )}
                  {status === 'sent' && (<><CheckCircle size={16} /> Message Sent!</>)}
                  {status === 'error' && 'Try Again'}
                </span>
              </button>

              <p className="font-mono text-xs text-white/25 text-center">
                Or email directly at{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-[#00f5ff]/60 hover:text-[#00f5ff]">
                  {personalInfo.email}
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
