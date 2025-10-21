// src/components/organisms/MenuCategory.js
'use client';

import { motion, AnimatePresence } from 'framer-motion'; // <-- Importar AnimatePresence
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
    // Aplicar animación de entrada solo al contenedor de categoría
    <motion.div
      id={categoryKey}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={categoryContainerVariants} // Usar variante simple
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
      {/* FIX: Envolver el mapeo con AnimatePresence */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
        <AnimatePresence>
          {categoryData.items.map((item, index) => (
            <MenuItem
              key={item.name || index} // La key es crucial para AnimatePresence
              item={item}
              index={index} // Podemos seguir usándolo para un delay si queremos
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