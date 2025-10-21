// src/components/organisms/GallerySection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// NOTE: Selección de 6 imágenes de la carpeta /public/platos para la galería principal
const galleryImages = [
  { src: '/platos/Image00013.jpg', alt: 'Menudo' }, // Menudo
  { src: '/platos/Image00009.jpg', alt: 'Tacos al Pastor Plate' }, // Plato Pastor
  { src: '/platos/Image00021.jpg', alt: 'Chilaquiles Plate' }, // Plato Chilaquiles
  { src: '/platos/28.jpg', alt: 'Enchilada' }, // Enchilada closeup
  { src: '/platos/Image00012.jpg', alt: 'Migas Rancheras' }, // Migas Rancheras
  { src: '/platos/Image00017.jpg', alt: 'Assortment of Mexican Dishes' }, // Mesa con varios platos
];

export default function GallerySection({ lang, dict }) {
  if (!dict?.gallery?.title) {
    console.warn("GallerySection: Dictionary keys missing!");
    return null; // No renderizar si falta el título
  }

  return (
    // NOTE: Sección con fondo crema (igual al fondo base) y padding
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la Sección */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-primary mb-12 md:mb-16"
        >
          {dict.gallery.title}
        </motion.h2>

        {/* Cuadrícula de Imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src} // Usar src como key es más estable si el array cambia
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay secuencial
              viewport={{ once: true, amount: 0.4 }} // Se anima un poco antes de estar totalmente visible
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group" // Contenedor con aspect ratio
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 45vw, 30vw" // Tamaños optimizados para grid
                quality={75}
                loading="lazy"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105" // Efecto zoom al pasar el ratón
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}