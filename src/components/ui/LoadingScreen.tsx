'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + Math.random() * 18;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050810]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo / Initials */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="relative"
        />
          <div className="w-24 h-24 rounded-2xl glass-strong flex items-center justify-center glow-cyan">
            <span className="text-4xl font-display font-black gradient-text">AY</span>
          </div>
          {/* Orbiting dot */}
          {/* <motion.div
            className="absolute w-3 h-3 rounded-full bg-[#00f5ff]"
            style={{ top: -6, left: -6 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '54px 54px' } as React.CSSProperties}
          />
        </motion.div> */}
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-[#00f5ff]"
            style={{
              top: -6,
              left: -6,
              transformOrigin: '54px 54px',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-2xl font-bold text-white tracking-widest">ANKIT YADAV</h1>
            <p className="font-mono text-xs text-[#00f5ff] tracking-[0.3em] mt-2 uppercase">
              Initializing Portfolio...
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 280 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative"
          >
            <div className="h-[2px] w-70 bg-white/10 rounded-full overflow-hidden" style={{ width: 280 }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${Math.min(progress, 100)}%`,
                  background: 'linear-gradient(90deg, #00f5ff, #8b5cf6, #fbbf24)',
                  backgroundSize: '200% 100%',
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-mono text-[10px] text-white/30">Loading assets</span>
              <span className="font-mono text-[10px] text-[#00f5ff]">{Math.min(Math.round(progress), 100)}%</span>
            </div>
          </motion.div>
      </div>

      {/* Corner decorations */}
      {[
        'top-6 left-6 border-l border-t',
        'top-6 right-6 border-r border-t',
        'bottom-6 left-6 border-l border-b',
        'bottom-6 right-6 border-r border-b',
      ].map((cls, i) => (
        <div key={i} className={`absolute w-8 h-8 border-[#00f5ff]/30 ${cls}`} />
      ))}
    </motion.div>
  );
}


