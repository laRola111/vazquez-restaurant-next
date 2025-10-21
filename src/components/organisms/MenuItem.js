// src/components/organisms/MenuItem.js
'use client';

import { motion } from 'framer-motion';

const formatPrice = (price) => {
  if (typeof price === 'number' && !isNaN(price)) {
    return price.toFixed(2);
  }
  return 'N/A';
};

export default function MenuItem({ item, index, categoryTitle }) {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.03 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      key={item.name || index}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      // layout // <-- ELIMINADO/COMENTADO
      className="py-3 border-b border-secondary/10 last:border-b-0"
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
          {item.sizeNote && (<p className="text-xs text-muted mt-1">{item.sizeNote}</p>)}
          {item.addBarbacoa && (<p className="text-xs text-muted mt-1">Añadir Barbacoa: {item.addBarbacoa}</p>)}
          {item.addFajita && (<p className="text-xs text-muted mt-1">Añadir Fajita: {item.addFajita}</p>)}
        </div>

        {/* Precio(s) */}
        <div className="text-right flex-shrink-0 pt-0.5">
          {item.price && ( <p className="font-sans font-bold text-lg text-primary">${formatPrice(item.price)}</p> )}
          {item.priceLg && item.priceSm && ( <> <p className="font-sans font-bold text-md text-secondary">Lg: ${formatPrice(item.priceLg)}</p> <p className="font-sans font-bold text-md text-secondary">Sm: ${formatPrice(item.priceSm)}</p> </> )}
          {categoryTitle === 'Menú Infantil' && !item.price && !item.priceLg && ( <p className="font-sans font-bold text-lg text-primary">$6.00</p> )}
          {categoryTitle !== 'Menú Infantil' && !item.price && !item.priceLg && !item.priceSm && ( <p className="font-sans font-bold text-lg text-primary">-</p> )}
        </div>
      </div>
    </motion.div>
  );
}