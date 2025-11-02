import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Sparkles, Shield, Moon, Star } from 'lucide-react';

const spells = [
  {
    icon: Wand2,
    title: 'Glyph of Creation',
    desc: 'Summon immersive realms with fractal precision and ritual code.',
    hue: 'from-fuchsia-500 to-purple-600',
  },
  {
    icon: Sparkles,
    title: 'Aurora Weave',
    desc: 'Layer luminous particles and spectral gradients with ease.',
    hue: 'from-violet-500 to-indigo-600',
  },
  {
    icon: Shield,
    title: 'Ward of Shadow',
    desc: 'Harden your domains with obsidian barriers and rune-level security.',
    hue: 'from-rose-500 to-fuchsia-600',
  },
  {
    icon: Moon,
    title: 'Lunar Sync',
    desc: 'Align motion timings to celestial cycles for ethereal flow.',
    hue: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Star,
    title: 'Nova Burst',
    desc: 'Ignite attention with tasteful micro-interactions and glows.',
    hue: 'from-amber-500 to-orange-600',
  },
];

const SpellCard = ({ icon: Icon, title, desc, hue }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
  >
    <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${hue} opacity-30 blur-3xl`} />
    <div className="relative z-10">
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${hue} text-white shadow-lg shadow-black/30`}>
        <Icon size={22} />
      </div>
      <h3 className="font-heading text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-purple-100/80">{desc}</p>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <button className="mt-4 text-xs font-semibold text-fuchsia-300 transition hover:text-fuchsia-200">
        Cast spell →
      </button>
    </div>
  </motion.div>
);

const SpellGrid = () => {
  return (
    <section id="spells" className="relative z-10 bg-gradient-to-b from-black via-black to-[#0b0014] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl font-bold sm:text-4xl"
          >
            The Grimoire of Motion
          </motion.h2>
          <p className="mt-3 text-purple-100/80">
            Harness forbidden interfaces and spectral UI patterns to craft experiences that shimmer between worlds.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spells.map((s, i) => (
            <SpellCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpellGrid;
