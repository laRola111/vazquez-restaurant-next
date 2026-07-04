// src/components/organisms/MenuPageLayout.js
'use client'; // Sigue siendo necesario por framer-motion

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import MenuDisplay from './MenuDisplay';

function MenuPageLayoutContent({ menuData, categoryOrder }) {
  const searchParams = useSearchParams();
  const searchTerm = searchParams ? (searchParams.get('q') || '') : '';
  return (
    <MenuDisplay
      menuData={menuData}
      categoryOrder={categoryOrder}
      searchTerm={searchTerm}
    />
  );
}

export default function MenuPageLayout({ pageTitle, menuData, categoryOrder }) {
  return (
    <div className="bg-background min-h-screen"> {/* Fondo crema */}
      {/* Cabecera Simplificada */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-8 bg-white shadow-sm" // Menos padding, sin buscador
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            {pageTitle}
          </h1>
        </div>
      </motion.div>

      {/* Contenedor Principal del Menú */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-0">
        <Suspense fallback={<p className="text-center text-muted italic">Cargando menú...</p>}>
          <MenuPageLayoutContent
            menuData={menuData}
            categoryOrder={categoryOrder}
          />
        </Suspense>
      </div>

       {/* Notas */}
       {menuData?.notes && (
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-center text-xs text-muted/80 italic space-y-2 border-t border-secondary/10 pt-8 mt-8">
             {menuData.notes.rawFoodWarning && <p>{menuData.notes.rawFoodWarning}</p>}
             {menuData.notes.bonesWarning && <p>{menuData.notes.bonesWarning}</p>}
         </div>
       )}
    </div>
  );
}