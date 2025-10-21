// src/components/organisms/DecorativeImageSection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// NOTE: Seleccionamos 4 imágenes representativas de la carpeta /public/platos
const galleryImages = [
  { src: '/platos/Image00005.jpg', alt: 'Tacos crujientes' }, // (Original)
  { src: '/platos/IMG_0044.jpeg', alt: 'Tacos de Barbacoa' },
  { src: '/platos/Image00010.jpg', alt: 'Nachos de Fajita' }, // (Original)
  { src: '/platos/27.jpg', alt: 'Mexican Steak' },          // (Original)
];

export default function DecorativeImageSection({ lang, dict }) {
  // NOTE: El alt text del diccionario ya no se usa directamente aquí,
  // pero podría usarse para un título opcional si se quisiera añadir.

  return (
    // FIX: Cambiado el fondo a blanco (bg-white) y ajustado el padding
    <section className="py-16 md:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* FIX: Reemplazada imagen única por una cuadrícula de 4 imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md" // Contenedor para cada imagen
            >
              <Image
                src={image.src}
                alt={image.alt} // Usamos alt text específico por imagen
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 45vw, 22vw" // Ajustar sizes para grid
                quality={75} // Calidad ligeramente menor para galería
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}