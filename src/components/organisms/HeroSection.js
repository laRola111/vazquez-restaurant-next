// src/components/organisms/HeroSection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import heroBgImage from "../../../public/banner.jpg"

// NOTE: Cambia esta ruta cuando tengas la imagen de fondo deseada (ej. la de image_1ee88e.png)

export default function HeroSection({ lang, dict }) {

  const handleScrollToMenu = (event) => {
    event.preventDefault();
    const menuSection = document.getElementById('menu-digital');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative h-[75vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBgImage}
          alt={dict.imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={85}
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido Centrado */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título con animación */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          // Usar font-serif (Lora), tamaño grande, negrita, blanco, sombra
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-md"
        >
          {dict.title} {/* NOTE: Usará el texto actualizado del diccionario */}
        </motion.h1>

        {/* Subtítulo con animación */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          // Usar font-sans (Open Sans), tamaño mediano, gris claro
          className="font-sans text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
        >
          {dict.subtitle} {/* NOTE: Usará el texto actualizado del diccionario */}
        </motion.p>

        {/* Botón con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleScrollToMenu}
            // Botón naranja, texto blanco, padding, redondeado, sombra, transición
            className="bg-primary text-white font-semibold text-lg px-8 py-3 rounded-md shadow-lg hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-black/50"
          >
            {dict.button}
          </button>
        </motion.div>
      </div>
    </section>
  );
}