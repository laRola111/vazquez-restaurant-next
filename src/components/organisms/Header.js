// src/components/organisms/Header.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Header({ lang, dict }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastYPos, setLastYPos] = useState(0);

  // --- Efectos (sin cambios) ---
  useEffect(() => { /* ... scroll visibility ... */ }, [lastYPos]);
  useEffect(() => { if (isMenuOpen) setIsMenuOpen(false); }, [pathname, isMenuOpen]);
  useEffect(() => { /* ... block scroll ... */ }, [isMenuOpen]);

  // FIX: Actualizar enlaces para apuntar a las nuevas páginas de menú
  const navLinks = [
    { name: dict.home, href: `/${lang}/` }, // Enlace directo a la home
    { name: dict.breakfast, href: `/${lang}/menu/breakfast` }, // Nueva ruta
    { name: dict.lunchDinner, href: `/${lang}/menu/lunch-dinner` }, // Nueva ruta
    { name: dict.drinks, href: `/${lang}/menu/drinks` }, // Nueva ruta
    // { name: dict.contact, href: `/${lang}/#contact` }, // Mantener si hay sección de contacto en home
  ];

  // FIX: Simplificar handleLinkClick, ya no necesita scroll suave para menú
  const handleLinkClick = (e, href) => {
    // Si es un enlace de ancla (ej. #contact), mantener scroll suave
    if (href.includes('#')) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // Siempre cerrar el menú móvil al hacer clic
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-background/90 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } `}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex-shrink-0 flex items-center">
            <span className="font-extrabold text-2xl text-primary hover:text-primary-light transition-colors">
              VAZQUEZ <span className="text-secondary">#3</span>
            </span>
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)} // Usar handleLinkClick simplificado
                className="text-base font-medium text-secondary hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botones Derecha */}
          <div className="flex items-center space-x-4">
             <div className="hidden md:block">
               <LanguageSwitcher />
             </div>
            <button
              className="md:hidden text-secondary hover:text-primary z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Panel Menú Móvil */}
      <div
        className={`fixed inset-0 bg-background z-30 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-16 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)} // Usar handleLinkClick simplificado
              className="text-xl font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          {/* <div className="mt-8"> <LanguageSwitcher /> </div> // Opcional aquí también */}
        </div>
      </div>
    </>
  );
}