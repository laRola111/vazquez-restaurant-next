// src/components/organisms/AboutSection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import mascotImage from '../../../public/logo1.png';

export default function AboutSection({ lang, dict }) {
  // FIX: Acceder al texto de agradecimiento usando la nueva clave mainTextKey
  const mainText = dict[dict.mainTextKey] || dict.mainText; // Fallback al mainText anterior si falta la clave nueva

  return (
    <section id="about" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Columna Izquierda: Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center md:text-left"
          >
            {/* FIX: Texto "Since 2007" */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              {/* NOTE: Usamos el texto obtenido del diccionario */}
              {dict.since}
            </h2>
            <p className="font-sans text-sm font-semibold tracking-wider uppercase text-muted mb-2">
              {mainText}
            </p>
            {/* FIX: Texto principal de agradecimiento */}
            {/* NOTE: La descripción corta puede quedarse o eliminarse */}
            <p className="font-sans text-base md:text-lg text-secondary max-w-xl mx-auto md:mx-0">
              {dict.description}
            </p>
          </motion.div>

          {/* Columna Derecha: Imagen de la Mascota */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <Image
              src={mascotImage}
              alt={dict.imageAlt} // Usar alt text del diccionario
              width={350}
              height={350}
              style={{ objectFit: 'contain' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}