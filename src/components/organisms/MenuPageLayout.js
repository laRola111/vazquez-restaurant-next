// src/components/organisms/MenuPageLayout.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import MenuDisplay from './MenuDisplay'; // <-- IMPORT MenuDisplay

export default function MenuPageLayout({ pageTitle, menuData, categoryOrder }) { // <-- ADD menuData, categoryOrder props
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-background min-h-screen">
      {/* Cabecera (sin cambios) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-12 bg-accent/30"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            {pageTitle}
          </h1>
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Buscar platillo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-full border border-secondary/30 bg-white text-secondary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted text-lg" />
          </div>
        </div>
      </motion.div>

      {/* Contenedor Principal del Menú */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* FIX: Render MenuDisplay directly, passing props */}
        <MenuDisplay
          menuData={menuData}
          categoryOrder={categoryOrder}
          searchTerm={searchTerm}
        />
      </div>
       {/* Notas (sin cambios) */}
    </div>
  );
}