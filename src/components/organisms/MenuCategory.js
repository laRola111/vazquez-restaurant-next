// src/components/organisms/MenuCategory.js
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItem';

export default function MenuCategory({ categoryData, categoryKey }) {
  if (!categoryData || !categoryData.items || categoryData.items.length === 0) {
    return null;
  }

  // Variante solo para el contenedor (fade-in)
  const categoryContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };


  return (
    // FIX: Cambiado whileInView por animate para activar la animación al cargar
    // FIX: Eliminado viewport ya que animate no lo necesita para este efecto simple
    <motion.div
      id={categoryKey}
      initial="hidden"
      animate="visible" // <-- CAMBIO AQUÍ
      variants={categoryContainerVariants}
      className="mb-12 md:mb-16"
    >
      {/* Título de la Categoría */}
      <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 text-center border-b-2 border-primary/50 pb-3">
        {categoryData.categoryTitle}
      </h3>

      {/* Nota de la Categoría */}
      {categoryData.note && (
        <p className="text-sm text-muted mb-6 text-center italic">
          {categoryData.note}
        </p>
      )}

      {/* Lista de Items en Grid */}
      {/* NOTE: AnimatePresence se mantiene para animaciones de salida/entrada de MenuItem si se filtran */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
        <AnimatePresence>
          {categoryData.items.map((item, index) => (
            <MenuItem
              key={item.name || index}
              item={item}
              index={index}
              categoryTitle={categoryData.categoryTitle}
            />
          ))}
        </AnimatePresence>
      </div>

       {/* Nota especial al final */}
      {categoryData.burroNote && (
        <p className="text-base text-secondary font-semibold mt-8 text-center border-t border-secondary/20 pt-4">
          {categoryData.burroNote}
        </p>
      )}
    </motion.div>
  );
}