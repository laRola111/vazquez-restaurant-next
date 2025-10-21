// src/components/organisms/AboutSection.js
'use client';

import Image from 'next/image'; // Importar Image
import { motion } from 'framer-motion';
import mascotImage from '../../../public/logo1.png'; // Importar la imagen de la mascota

export default function AboutSection({ lang, dict }) {
  return (
    // Sección con fondo crema y padding vertical
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
            {/* Texto "Since 2001" */}
            <p className="font-sans text-sm font-semibold tracking-wider uppercase text-muted mb-2">
              {dict.since}
            </p>
            {/* Texto principal "Todo hecho con amor" */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              {dict.mainText}
            </h2>
            {/* Descripción */}
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
            className="relative flex justify-center items-center" // Centrar la imagen
          >
            <Image
              src={mascotImage} // Usar la mascota importada
              alt="Mascota de Vazquez Restaurant #3" // Alt text específico
              width={350} // Ancho deseado (ajusta según sea necesario)
              height={350} // Alto deseado (ajusta según sea necesario)
              style={{ objectFit: 'contain' }} // Contener la imagen sin recortar
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}