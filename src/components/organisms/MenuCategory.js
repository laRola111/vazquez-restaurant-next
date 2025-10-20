// src/components/organisms/MenuCategory.js
'use client'; // <-- AÑADIR ESTA LÍNEA AL PRINCIPIO

import { motion } from 'framer-motion';
import MenuItem from './MenuItem';

export default function MenuCategory({ categoryData, categoryKey }) {
  if (!categoryData || !categoryData.items || categoryData.items.length === 0) {
    return null;
  }

  // Animación para el contenedor de la categoría
  const categoryVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
  };

  return (
    <motion.div
      id={categoryKey}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={categoryVariants}
      className="mb-12 md:mb-16"
    >
      {/* Título de la Categoría */}
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4 text-center md:text-left border-b-2 border-primary pb-2">
        {categoryData.categoryTitle}
      </h3>

      {/* Nota de la Categoría */}
      {categoryData.note && (
        <p className="text-sm text-muted mb-6 text-center md:text-left italic">
          {categoryData.note}
        </p>
      )}

      {/* Lista de Items */}
      <div>
        {categoryData.items.map((item, index) => (
          <MenuItem key={item.name || index} item={item} index={index} />
        ))}
      </div>

       {/* Nota especial al final */}
      {categoryData.burroNote && (
        <p className="text-sm text-secondary font-semibold mt-4 text-center md:text-left">
          {categoryData.burroNote}
        </p>
      )}
    </motion.div>
  );
}