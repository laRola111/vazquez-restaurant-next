// src/components/organisms/AboutSection.js
'use client';

import { motion } from 'framer-motion';

export default function AboutSection({ lang, dict }) {
  return (
    // NOTE: Sección con fondo amarillo (accent) y padding
    <section id="about" className="py-16 md:py-24 bg-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animación de entrada para el contenedor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Texto "Since 2001" */}
          <p className="font-sans text-sm font-semibold tracking-wider uppercase text-secondary mb-2">
            {dict.since}
          </p>
          {/* Texto principal "Everything done with love" */}
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            {dict.mainText}
          </h2>
          {/* Descripción ajustada */}
          <p className="font-sans text-base md:text-lg text-secondary max-w-2xl mx-auto">
            {dict.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}