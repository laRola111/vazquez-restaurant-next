// src/components/organisms/MenuPageLayout.js
'use client'; // Sigue siendo necesario por framer-motion

import { motion } from 'framer-motion';
// Ya no necesitamos FaSearch ni useState
import MenuDisplay from './MenuDisplay';

// FIX: Recibe searchTerm como prop, ya no maneja estado local de búsqueda
export default function MenuPageLayout({ pageTitle, menuData, categoryOrder, searchTerm }) {

  // DEBUG: Verificar props al inicio del componente
  // console.log("--- MenuPageLayout RECIBIDO ---");
  // console.log("pageTitle:", pageTitle);
  // console.log("categoryOrder:", categoryOrder); // <-- ¿Llega aquí?
  // console.log("searchTerm:", searchTerm);
  // console.log("-------------------------------");


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
          {/* --- BUSCADOR ELIMINADO DE AQUÍ --- */}
        </div>
      </motion.div>

      {/* Contenedor Principal del Menú */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-0">
         {/* FIX: Asegurarse de pasar todos los props necesarios a MenuDisplay */}
        <MenuDisplay
          menuData={menuData}
          categoryOrder={categoryOrder} // Pasar el prop recibido
          searchTerm={searchTerm} // Pasar el prop recibido
        />
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