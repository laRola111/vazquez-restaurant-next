// src/components/organisms/DecorativeImageSection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// NOTE: Ruta a la imagen del collage. Debes guardar esta imagen en public/images/
const collageImage = '/images/vazquez-collage.png'; // Cambia el nombre si es necesario

export default function DecorativeImageSection({ lang, dict }) {
  return (
    // NOTE: Sección simple para mostrar la imagen, sin padding vertical extra
    <section className="bg-background"> {/* Fondo crema */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10" // Padding horizontal y vertical moderado
      >
        <div className="relative aspect-[16/7] rounded-lg overflow-hidden shadow-lg"> {/* Aspect ratio ajustado para imagen panorámica */}
          <Image
            src={collageImage}
            alt={dict.about.imageAlt} // Reutilizamos el alt text definido en 'about'
            fill
            style={{ objectFit: 'cover' }} // Cubrirá el contenedor
            sizes="(max-width: 1024px) 100vw, 1024px" // Tamaños responsivos
            quality={80}
          />
        </div>
      </motion.div>
    </section>
  );
}