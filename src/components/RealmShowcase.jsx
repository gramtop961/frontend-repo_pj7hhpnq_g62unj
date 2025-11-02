import React from 'react';
import { motion } from 'framer-motion';

const realms = [
  {
    name: 'Obsidian Veil',
    desc: 'A cathedral of code where neon prayers echo through vaulted circuits.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Violet Expanse',
    desc: 'Endless dunes of stardust painted by auroras and algorithmic winds.',
    img: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Chromatic Abyss',
    desc: 'A rift between realities, stitched by iridescent ribbons of light.',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  },
];

const RealmCard = ({ name, desc, img, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: i * 0.05 }}
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
  >
    <div className="relative h-64 w-full overflow-hidden sm:h-80">
      <img src={img} alt={name} className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </div>
    <div className="relative p-6">
      <h3 className="font-heading text-xl font-semibold text-white">{name}</h3>
      <p className="mt-2 text-sm text-purple-100/80">{desc}</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-fuchsia-400/60 to-transparent" />
        <span className="text-xs text-fuchsia-300">View portal →</span>
      </div>
    </div>
  </motion.div>
);

const RealmShowcase = () => {
  return (
    <section id="realms" className="relative bg-[#0b0014] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(88,28,135,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl font-bold sm:text-4xl"
          >
            Realms Beyond the Screen
          </motion.h2>
          <p className="mt-3 text-purple-100/80">
            Traverse curated dimensions shaped by light, motion, and myth.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {realms.map((r, i) => (
            <RealmCard key={r.name} {...r} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealmShowcase;
