import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-black py-14 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        >
          <div className="text-center sm:text-left">
            <h3 className="font-heading text-lg font-semibold">Astral Atelier</h3>
            <p className="mt-1 text-sm text-purple-100/70">Crafted at the edge of shadow and code.</p>
          </div>

          <div className="flex items-center gap-3">
            <a href="#spells" className="text-xs text-purple-100/80 transition hover:text-white">Spells</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#realms" className="text-xs text-purple-100/80 transition hover:text-white">Realms</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#" className="text-xs text-purple-100/80 transition hover:text-white">Rituals</a>
          </div>
        </motion.div>

        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <p className="mt-6 text-center text-xs text-purple-100/60">© {new Date().getFullYear()} Astral Atelier. All rites reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
