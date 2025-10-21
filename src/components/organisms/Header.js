// src/components/organisms/Header.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'; // Heroicons
import { FaSearch } from 'react-icons/fa'; // Font Awesome icon <-- CORREGIDO
import LanguageSwitcher from '../ui/LanguageSwitcher';
import logo from '../../../public/logo2.png';

export default function Header({ lang, dict }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastYPos, setLastYPos] = useState(0);
  const [localSearchTerm, setLocalSearchTerm] = useState(searchParams.get('q') || '');

  const isMenuPage = pathname.includes('/menu/');

  // Efecto visibilidad scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentYPos = window.scrollY;
      const isScrollingUp = currentYPos < lastYPos;
      setIsVisible(isScrollingUp || currentYPos < 50);
      setLastYPos(currentYPos);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastYPos]);

  // Efecto cerrar menú en cambio de ruta
  useEffect(() => { if (isMenuOpen) setIsMenuOpen(false); }, [pathname, isMenuOpen]);

  // Efecto bloquear scroll body
  useEffect(() => { document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'; return () => { document.body.style.overflow = 'auto'; }; }, [isMenuOpen]);

  // Efecto sincronizar/limpiar búsqueda
   useEffect(() => {
      if (!isMenuPage) {
          setLocalSearchTerm('');
      } else {
          setLocalSearchTerm(searchParams.get('q') || '');
      }
  }, [isMenuPage, pathname, searchParams]);

  const navLinks = [
    { name: dict.home, href: `/${lang}/` },
    { name: dict.breakfast, href: `/${lang}/menu/breakfast` },
    { name: dict.lunchDinner, href: `/${lang}/menu/lunch-dinner` },
    { name: dict.drinks, href: `/${lang}/menu/drinks` },
  ];

  const handleLinkClick = (e, href) => {
    if (href.includes('#')) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setLocalSearchTerm(newSearchTerm);
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (!newSearchTerm) {
      current.delete('q');
    } else {
      current.set('q', newSearchTerm);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.replace(`${pathname}${query}`);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b border-secondary/10 shadow-sm transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } `}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
          <Link href={`/${lang}`} className="flex-shrink-0 flex items-center">
            <Image src={logo} alt="Vazquez Restaurant #3 Logo" height={50} className="w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-base font-semibold text-secondary hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
            {isMenuPage && (
              <div className="relative ml-4">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={localSearchTerm}
                  onChange={handleSearchChange}
                  className="px-4 py-1.5 pl-8 rounded-full border border-secondary/30 bg-white text-secondary placeholder-muted text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent w-40"
                />
                <FaSearch className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-muted text-sm" />
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
             <div className="hidden md:block"> <LanguageSwitcher /> </div>
            <button className="md:hidden text-secondary hover:text-primary z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-background z-30 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-20 space-y-8">
          {isMenuPage && (
            <div className="relative w-4/5 max-w-xs mb-4">
               <input
                 type="text"
                 placeholder="Buscar platillo..."
                 value={localSearchTerm}
                 onChange={handleSearchChange}
                 className="w-full px-5 py-2.5 pl-10 rounded-full border border-secondary/30 bg-white text-secondary placeholder-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
               />
               <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted text-base" />
             </div>
          )}
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-2xl font-semibold text-secondary hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
          <div className="mt-10"> <LanguageSwitcher /> </div>
        </div>
      </div>
    </>
  );
}