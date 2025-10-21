// src/components/organisms/HeroSection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
// FIX: Usar banner.jpg como imagen de fondo
import heroBgImage from "../../../public/banner.jpg"; // <-- ACTUALIZADO

export default function HeroSection({ lang, dict }) {

  const handleScrollToMenu = (event) => { /* ... sin cambios ... */ };

  return (
    <section id="hero" className="relative h-[75vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBgImage} // <-- Usando banner.jpg
          alt={dict.imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={85}
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido (sin cambios) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 /* ... */ >{dict.title}</motion.h1>
        <motion.p /* ... */ >{dict.subtitle}</motion.p>
        <motion.div /* ... */ >
          <button /* ... */ >{dict.button}</button>
        </motion.div>
      </div>
    </section>
  );
}