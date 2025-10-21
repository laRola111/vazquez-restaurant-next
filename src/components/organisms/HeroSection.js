// src/components/organisms/HeroSection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
// Usaremos Image00017.jpg como imagen principal del Hero por ahora
import heroImage from "../../../public/platos/IMG_0025.png";

export default function HeroSection({ lang, dict }) {
  const menuLink = `/${lang}/menu/lunch-dinner`;

  return (
    // Sección principal con fondo crema, padding ajustado y overflow hidden
    <section id="hero" className="relative bg-background pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"> {/* Contenido principal con z-10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Columna Izquierda: Texto y Botón */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-dark leading-tight mb-4">
              {dict.title}
            </h1>
            <p className="font-sans text-lg sm:text-xl text-muted mb-8 max-w-lg mx-auto md:mx-0">
              {dict.subtitle}
            </p>
            <Link
              href={menuLink}
              className="inline-block bg-white text-primary font-semibold text-lg px-8 py-3 rounded-md shadow-lg hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-background"
            >
              {dict.button}
            </Link>
          </motion.div>

          {/* Columna Derecha: Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            // FIX: Añadir un contenedor extra para la sombra/redondeo y asegurar que la imagen llene
            className="flex justify-center md:justify-end" // Alinear imagen
          >
             <div className="relative aspect-[4/3] w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg overflow-hidden ">
                 <Image
                    src={heroImage}
                    alt={dict.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 500px" // Ajustar sizes
                 />
             </div>
          </motion.div>

        </div>
      </div>

      {/* FIX: Elemento Curvo Decorativo - Posicionado detrás (z-0) y ajustado */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-48 md:h-64 z-0 overflow-hidden" // Aumentar altura
      >
         {/* Curva principal naranja */}
         <div className="absolute -bottom-1/4 left-1/2 transform -translate-x-1/2 w-[200%] md:w-[150%] h-full bg-primary rounded-t-[100%]"></div>
         {/* Curva secundaria amarilla (opcional, para efecto) */}
         {/* <div className="absolute -bottom-1/3 left-1/2 transform -translate-x-1/2 w-[210%] md:w-[160%] h-full bg-accent/50 rounded-t-[100%]"></div> */}
      </div>

    </section>
  );
}