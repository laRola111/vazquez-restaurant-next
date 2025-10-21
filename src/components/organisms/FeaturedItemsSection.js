// src/components/organisms/FeaturedItemsSection.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Definir platillos destacados y sus imágenes (ajusta nombres e imágenes)
const featured = [
  { nameKey: 'item1Name', image: '/platos/Image00013.jpg', link: '/menu/lunch-dinner?q=Menudo' }, // Menudo
  { nameKey: 'item2Name', image: '/platos/Image00021.jpg', link: '/menu/breakfast?q=Chilaquiles' }, // Chilaquiles
  { nameKey: 'item3Name', image: '/platos/Image00009.jpg', link: '/menu/lunch-dinner?q=Pastor' }, // Tacos al Pastor
  { nameKey: 'item4Name', image: '/platos/28.jpg', link: '/menu/lunch-dinner?q=Enchiladas' }, // Enchiladas
];

// Componente para cada tarjeta de platillo
const FeatureCard = ({ item, dict, lang, index }) => {
  const name = dict[item.nameKey] || "Platillo"; // Obtener nombre traducido

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group" // Añadir group para hover effect
    >
      <Link href={`/${lang}${item.link}`} className="block">
        <div className="relative aspect-[4/3]">
          <Image
            src={item.image}
            alt={name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
            className="transition-transform duration-300 group-hover:scale-105" // Zoom on hover
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-serif font-semibold text-xl text-secondary-dark group-hover:text-primary transition-colors">
            {name}
          </h3>
          {/* Podríamos añadir precio o descripción corta si quisiéramos */}
        </div>
      </Link>
    </motion.div>
  );
};

export default function FeaturedItemsSection({ lang, dict }) {
  if (!dict) return null; // No renderizar si no hay diccionario

  return (
    <section className="py-16 md:py-24 bg-gray-50"> {/* Fondo gris muy claro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true, amount: 0.5 }}
           className="text-3xl md:text-4xl font-serif font-bold text-center text-primary mb-12 md:mb-16"
        >
          {dict.title} {/* Nuestros Favoritos / Our Favorites */}
        </motion.h2>

        {/* Grid de Platillos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((item, index) => (
            <FeatureCard key={item.nameKey} item={item} dict={dict} lang={lang} index={index} />
          ))}
        </div>

        {/* Botón Ver Menú Completo */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.5 }}
           viewport={{ once: true, amount: 0.5 }}
           className="text-center mt-12 md:mt-16"
         >
           <Link
              href={`/${lang}/menu/lunch-dinner`} // Enlaza al menú principal
              className="inline-block bg-primary text-white font-semibold text-lg px-8 py-3 rounded-md shadow-lg hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              {dict.viewMenuButton}
            </Link>
         </motion.div>
      </div>
    </section>
  );
}