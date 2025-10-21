// src/components/organisms/HeroSection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Importar Link para el botón
import heroImage from "../../../public/platos/Image00017.jpg"

export default function HeroSection({ lang, dict }) {
  // El botón ahora será un Link
  const menuLink = `/${lang}/menu/lunch-dinner`; // Enlaza a la página principal del menú

  return (
    // Sección principal con fondo crema y padding
    <section id="hero" className="relative bg-background pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Columna Izquierda: Texto y Botón */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left z-10" // Asegurar que el texto esté sobre elementos curvos
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-dark leading-tight mb-4">
              {dict.title} {/* Bienvenidos a Vázquez... */}
            </h1>
            <p className="font-sans text-lg sm:text-xl text-muted mb-8 max-w-lg mx-auto md:mx-0">
              {dict.subtitle} {/* Desde 2001... */}
            </p>
            {/* Botón como Link */}
            <Link
              href={menuLink}
              className="inline-block bg-primary text-white font-semibold text-lg px-8 py-3 rounded-md shadow-lg hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-background" // Offset adaptado al fondo
            >
              {dict.button} {/* Ver Menú Completo */}
            </Link>
          </motion.div>

          {/* Columna Derecha: Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative aspect-[4/3] md:aspect-square rounded-lg overflow-hidden shadow-xl mx-auto max-w-md md:max-w-none" // Controlar tamaño máximo en móvil
          >
            <Image
              src={heroImage}
              alt={dict.imageAlt}
              fill
              style={{ objectFit: 'cover' }}
              priority
              quality={85}
              sizes="(max-width: 768px) 80vw, 40vw" // Ajustar sizes
            />
          </motion.div>

        </div>
      </div>

      {/* Elemento Curvo Decorativo (Opcional, requiere ajustes) */}
      {/* Podríamos añadir un SVG o div con bordes redondeados aquí */}
      {/* Ejemplo simple con un div */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 overflow-hidden z-0">
         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150%] h-full bg-primary/80 rounded-t-[50%]"></div> {/* Curva naranja */}
      </div>

    </section>
  );
}