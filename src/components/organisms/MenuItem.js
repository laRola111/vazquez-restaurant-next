// src/components/organisms/MenuItem.js
'use client'; // <-- AÑADIR ESTA LÍNEA AL PRINCIPIO

import { motion } from 'framer-motion';

// Formatea el precio a dos decimales
const formatPrice = (price) => {
  return price ? price.toFixed(2) : 'N/A';
};

export default function MenuItem({ item, index }) {
  // Animación sutil para cada ítem
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.05 } }
  };

  return (
    <motion.div
      variants={variants}
      className="py-3 border-b border-secondary/20 last:border-b-0"
    >
      <div className="flex justify-between items-start gap-4">
        {/* Nombre y Descripción */}
        <div className="flex-1">
          <h4 className="font-serif font-semibold text-lg text-secondary-dark">
            {item.name}
          </h4>
          {item.description && (
            <p className="text-sm text-muted mt-1 italic">
              {item.description}
            </p>
          )}
           {/* Notas adicionales */}
           {item.sizeNote && (
             <p className="text-xs text-muted mt-1">{item.sizeNote}</p>
           )}
           {item.addBarbacoa && (
             <p className="text-xs text-muted mt-1">Añadir Barbacoa: {item.addBarbacoa}</p>
           )}
            {item.addFajita && (
             <p className="text-xs text-muted mt-1">Añadir Fajita: {item.addFajita}</p>
           )}
        </div>

        {/* Precio(s) */}
        <div className="text-right flex-shrink-0">
          {item.price && (
            <p className="font-sans font-bold text-lg text-secondary">
              ${formatPrice(item.price)}
            </p>
          )}
          {item.priceLg && item.priceSm && (
            <>
              <p className="font-sans font-bold text-md text-secondary">
                Lg: ${formatPrice(item.priceLg)}
              </p>
              <p className="font-sans font-bold text-md text-secondary">
                Sm: ${formatPrice(item.priceSm)}
              </p>
            </>
          )}
           {!item.price && !item.priceLg && !item.priceSm && item.categoryTitle !== 'Menú Infantil' && (
               <p className="font-sans font-bold text-lg text-secondary">-</p>
           )}
        </div>
      </div>
    </motion.div>
  );
}