// src/components/organisms/DecorativeImageSection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// FIX: Ruta a la nueva imagen decorativa
const collageImage = '/images/decorative-collage.jpg'; // Asegúrate que este archivo exista en public/images

export default function DecorativeImageSection({ lang, dict }) {
  // Usar el alt text de la sección About o uno genérico
  const altText = dict?.about?.imageAlt || "Collage de platillos mexicanos";

  return (
    // Sección con padding vertical moderado
    <section className="py-10 md:py-16 bg-background"> {/* Fondo crema */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" // Usar max-w-7xl para ancho completo
      >
        <div className="relative aspect-[16/6] md:aspect-[16/5] rounded-lg overflow-hidden shadow-lg"> {/* Aspect ratio más panorámico */}
          <Image
            src={collageImage} // Usar la nueva imagen
            alt={altText}
            fill
            style={{ objectFit: 'cover' }}
            sizes="100vw" // La imagen ocupa casi todo el ancho
            quality={80}
            loading="lazy" // Carga diferida ya que está más abajo en la página
          />
        </div>
      </motion.div>
    </section>
  );
}