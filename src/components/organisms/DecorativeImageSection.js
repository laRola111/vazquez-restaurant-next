// src/components/organisms/DecorativeImageSection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// FIX: Importar imágenes directamente
import imgTacos from '../../../public/platos/Image00007.jpg';
import imgBurrito from '../../../public/platos/Image00002.jpg';
import imgNachos from '../../../public/platos/Image00010.jpg';
import imgSteak from '../../../public/platos/Image00013.jpg';

// NOTE: Ahora usamos las variables importadas
const galleryImages = [
  { src: imgTacos, alt: 'Tacos crujientes' },
  { src: imgBurrito, alt: 'Burrito Mi Tierra' },
  { src: imgNachos, alt: 'Nachos de Fajita' },
  { src: imgSteak, alt: 'Mexican Steak' },
];

export default function DecorativeImageSection({ lang, dict }) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              // FIX: Usar image.src.src como key si el import devuelve un objeto
              key={image.src.src || index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md"
            >
              <Image
                // NOTE: src ahora es la variable importada
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 45vw, 22vw"
                quality={75}
                loading="lazy"
                // placeholder="blur" // Puedes añadir blur si importas estáticamente
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}