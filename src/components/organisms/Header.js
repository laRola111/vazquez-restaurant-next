// src/components/organisms/Header.js
'use client';

import { useState, useEffect, useCallback } from 'react'; // Añadir useCallback
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import logo from '../../../public/logo2.png'; // Asegúrate que la ruta es correcta

export default function Header({ lang, dict }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // --- Estados ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastYPos, setLastYPos] = useState(0);

  // FIX: Leer el valor 'q' directamente para inicializar y usar como dependencia estable
  const currentQueryParamValue = searchParams.get('q') || '';
  const [localSearchTerm, setLocalSearchTerm] = useState(currentQueryParamValue);

  const isMenuPage = pathname.includes('/menu/');

  // --- Effects ---
  // Visibilidad al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentYPos = window.scrollY;
      setIsVisible(currentYPos < 50 || currentYPos < lastYPos);
      setLastYPos(currentYPos);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastYPos]);

  // Cerrar menú móvil al cambiar ruta
  useEffect(() => { setIsMenuOpen(false); }, [pathname]);

  // Bloquear scroll del body con menú móvil abierto
  useEffect(() => { document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'; }, [isMenuOpen]);

  // FIX: Sincronizar input con URL (dependencia estable)
  useEffect(() => {
    // Actualiza el input solo si el parámetro URL realmente cambió
    if (currentQueryParamValue !== localSearchTerm) {
      setLocalSearchTerm(currentQueryParamValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQueryParamValue]); // Depender solo del valor string

  // --- Links de Navegación (con verificación de dict) ---
  const navLinks = dict ? [
    { name: dict.navbar?.home || 'Home', href: `/${lang}/` },
    { name: dict.navbar?.breakfast || 'Breakfast', href: `/${lang}/menu/breakfast` },
    { name: dict.navbar?.lunchDinner || 'Lunch & Dinner', href: `/${lang}/menu/lunch-dinner` },
    { name: dict.navbar?.drinks || 'Drinks', href: `/${lang}/menu/drinks` },
  ] : [];

  // --- Manejadores ---
  const handleLinkClick = useCallback(() => setIsMenuOpen(false), []); // Simple cierre

  // Actualiza URL mientras se escribe (solo en páginas de menú)
  const handleSearchChange = useCallback((e) => {
    const newSearchTerm = e.target.value;
    setLocalSearchTerm(newSearchTerm);

    if (isMenuPage) { // Solo actualiza URL si ya estamos en menú
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      const termToUse = newSearchTerm.trim();
      if (!termToUse) {
        current.delete('q');
      } else {
        current.set('q', termToUse);
      }
      const search = current.toString();
      const query = search ? `?${search}` : "";
      router.replace(`${pathname}${query}`); // Actualiza query param
    }
  }, [isMenuPage, pathname, router, searchParams]);

  // Navega o actualiza URL al presionar Enter
  const handleSearchSubmit = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const termToUse = localSearchTerm.trim();
      const current = new URLSearchParams();
      if (termToUse) {
        current.set('q', termToUse);
      }
      const search = current.toString();
      const query = search ? `?${search}` : "";

      if (!isMenuPage && termToUse) { // Desde Home u otra página -> Navegar a menú principal
        router.push(`/${lang}/menu/lunch-dinner${query}`);
      } else if (isMenuPage) { // Si ya estamos en menú -> Asegurar que URL esté actualizada (replace)
        router.replace(`${pathname}${query}`);
      }
      // Opcional: Cerrar menú móvil si estaba abierto
      setIsMenuOpen(false);
    }
  }, [isMenuPage, lang, localSearchTerm, pathname, router]);


  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b border-secondary/10 shadow-sm transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex-shrink-0">
            <Image src={logo} alt="Vazquez Restaurant #3 Logo" height={50} className="w-auto" priority />
          </Link>

          {/* Navegación Desktop + Buscador */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={handleLinkClick} className="text-base font-semibold text-secondary hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
            {/* Buscador */}
            <div className="relative ml-4">
              <input
                type="text"
                placeholder="Buscar..."
                value={localSearchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleSearchSubmit}
                aria-label="Buscar en el menú"
                className="px-4 py-1.5 pl-8 rounded-full border border-secondary/30 bg-white text-secondary placeholder-muted text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent w-40 md:w-48 lg:w-56"
              />
              <FaSearch className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-muted text-sm pointer-events-none" /> {/* Evita que el icono interfiera */}
            </div>
          </div>

          {/* Botones Derecha */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block"> <LanguageSwitcher /> </div>
            <button className="md:hidden text-secondary hover:text-primary z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
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
        <div className="flex flex-col items-center justify-center h-full pt-20 space-y-8">
          {/* Buscador Móvil */}
          <div className="relative w-4/5 max-w-xs mb-4">
             <input
               type="text"
               placeholder="Buscar platillo..."
               value={localSearchTerm}
               onChange={handleSearchChange}
               onKeyDown={handleSearchSubmit}
               aria-label="Buscar en el menú"
               className="w-full px-5 py-2.5 pl-10 rounded-full border border-secondary/30 bg-white text-secondary placeholder-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
             />
             <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted text-base pointer-events-none" />
           </div>
          {/* Enlaces Móviles */}
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={handleLinkClick} className="text-2xl font-semibold text-secondary hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
          <div className="mt-10"> <LanguageSwitcher /> </div>
        </div>
      </div>
    </>
  );
}