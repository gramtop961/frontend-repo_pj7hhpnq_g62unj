import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Vignette + gradient veil */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_200px_rgba(0,0,0,0.9)]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-purple-200/90 backdrop-blur"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
          Enter the Astral Net
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="font-heading bg-gradient-to-b from-white via-purple-100 to-fuchsia-200 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          A Dark Fantasy Web Odyssey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-5 max-w-2xl text-base text-purple-100/80 sm:text-lg"
        >
          Where cybernetic dreams weave with arcane power. Explore realms of neon mist, ritual code, and cosmic artistry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#realms"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 px-6 py-3 text-sm font-semibold shadow-xl shadow-fuchsia-900/30 transition hover:shadow-fuchsia-900/50"
          >
            <span className="relative z-10">Begin the Descent</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#spells"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Learn the Rites
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
