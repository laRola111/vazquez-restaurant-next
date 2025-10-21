// src/components/organisms/MenuItem.js
'use client';

import { motion } from 'framer-motion';
// Ya no necesitamos Image

const formatPrice = (price) => {
  return price ? price.toFixed(2) : 'N/A';
};

export default function MenuItem({ item, index, categoryTitle }) {
  // Mantener variantes con 'exit' para AnimatePresence
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.03 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      key={item.name || index} // Key es crucial para AnimatePresence
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      // layout // Puedes probar quitando 'layout' si aún da problemas de espaciado
      className="py-3 border-b border-secondary/10 last:border-b-0" // Borde más sutil
    >
      <div className="flex justify-between items-start gap-4">

        {/* Nombre y Descripción */}
        <div className="flex-1">
          <h4 className="font-serif font-semibold text-lg md:text-xl text-secondary-dark leading-snug">
            {item.name}
          </h4>
          {item.description && (
            <p className="text-sm text-muted mt-1 italic">
              {item.description}
            </p>
          )}
          {/* Notas adicionales */}
          {item.sizeNote && (<p className="text-xs text-muted mt-1">{item.sizeNote}</p>)}
          {item.addBarbacoa && (<p className="text-xs text-muted mt-1">Añadir Barbacoa: {item.addBarbacoa}</p>)}
          {item.addFajita && (<p className="text-xs text-muted mt-1">Añadir Fajita: {item.addFajita}</p>)}
        </div>

        {/* --- FIX: RESTAURAR SECCIÓN DE PRECIOS --- */}
        <div className="text-right flex-shrink-0 pt-0.5">
          {/* Precio simple */}
          {item.price && (
            <p className="font-sans font-bold text-lg text-primary">
              ${formatPrice(item.price)}
            </p>
          )}
          {/* Precios Lg/Sm */}
          {item.priceLg && item.priceSm && (
            <>
              <p className="font-sans font-bold text-md text-secondary">Lg: ${formatPrice(item.priceLg)}</p>
              <p className="font-sans font-bold text-md text-secondary">Sm: ${formatPrice(item.priceSm)}</p>
            </>
          )}
          {/* Precio Menú Infantil (si aplica) */}
          {categoryTitle === 'Menú Infantil' && !item.price && !item.priceLg && (
             <p className="font-sans font-bold text-lg text-primary">$6.00</p> // Asumiendo precio fijo
          )}
          {/* Placeholder si no hay precio */}
          {categoryTitle !== 'Menú Infantil' && !item.price && !item.priceLg && !item.priceSm && (
             <p className="font-sans font-bold text-lg text-primary">-</p>
           )}
        </div>
        {/* --- FIN FIX --- */}

      </div>
    </motion.div>
  );
}