// src/components/organisms/Header.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import logo from '../../../public/logo2.png'; // Make sure this path is correct

export default function Header({ lang, dict }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastYPos, setLastYPos] = useState(0);

  // Read the current query param value ONCE per render for initialization
  const initialQueryParamValue = searchParams.get('q') || '';
  const [localSearchTerm, setLocalSearchTerm] = useState(initialQueryParamValue);

  const isMenuPage = pathname.includes('/menu/');

  // --- Effects ---
  // Visibility effect
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

  // Close menu effect
  useEffect(() => { if (isMenuOpen) setIsMenuOpen(false); }, [pathname, isMenuOpen]);

  // Scroll lock effect
  useEffect(() => { document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'; return () => { document.body.style.overflow = 'auto'; }; }, [isMenuOpen]);

  // FIX: Effect to sync input with URL param 'q' - Depend on the actual value from searchParams.get()
  useEffect(() => {
      const qParamValue = searchParams.get('q') || '';
      // Only update local state if it differs from the URL param
      if (qParamValue !== localSearchTerm) {
         setLocalSearchTerm(qParamValue);
      }
      // Depend directly on the result of searchParams.get('q')
      // Also depend on pathname in case navigation clears the param implicitly
  }, [searchParams.get('q'), pathname]);


  const navLinks = [
    // Ensure dict is defined before accessing its properties
    { name: dict?.home || 'Home', href: `/${lang}/` },
    { name: dict?.breakfast || 'Breakfast', href: `/${lang}/menu/breakfast` },
    { name: dict?.lunchDinner || 'Lunch & Dinner', href: `/${lang}/menu/lunch-dinner` },
    { name: dict?.drinks || 'Drinks', href: `/${lang}/menu/drinks` },
  ];

  const handleLinkClick = (e, href) => {
    // Basic link click handling + close menu
    if (href.includes('#')) {
      // Handle scroll if needed, omitted for brevity as it wasn't the issue
    }
    setIsMenuOpen(false);
  };

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setLocalSearchTerm(newSearchTerm); // Update input field

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const termToUse = newSearchTerm.trim();

    if (!termToUse) {
      current.delete('q');
    } else {
      current.set('q', termToUse);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";

    if (isMenuPage) {
      router.replace(`${pathname}${query}`); // Use replace for filtering effect
    }
    // Don't auto-redirect from non-menu pages while typing
  };

   const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
        const termToUse = localSearchTerm.trim();
         if (!isMenuPage && termToUse) { // If on home page and submitting search
            const current = new URLSearchParams();
            current.set('q', termToUse);
            const query = `?${current.toString()}`;
            router.push(`/${lang}/menu/lunch-dinner${query}`); // Navigate to main menu page
         } else if (isMenuPage) { // If already on menu page, ensure URL is updated
             handleSearchChange({ target: { value: localSearchTerm } });
         }
         e.preventDefault();
    }
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
            {/* Ensure logo path is correct */}
            <Image src={logo} alt="Vazquez Restaurant #3 Logo" height={50} className="w-auto" priority />
          </Link>

          {/* Desktop Nav + Search */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Render links only if dict is loaded */}
            {dict && navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-base font-semibold text-secondary hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
            {/* Search Input */}
            <div className="relative ml-4">
              <input
                type="text"
                placeholder="Buscar..."
                value={localSearchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleSearchSubmit}
                className="px-4 py-1.5 pl-8 rounded-full border border-secondary/30 bg-white text-secondary placeholder-muted text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent w-40 md:w-48 lg:w-56"
              />
              <FaSearch className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-muted text-sm" />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
             <div className="hidden md:block"> <LanguageSwitcher /> </div>
            <button className="md:hidden text-secondary hover:text-primary z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 bg-background z-30 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-20 space-y-8">
          {/* Mobile Search Input */}
          <div className="relative w-4/5 max-w-xs mb-4">
             <input
               type="text"
               placeholder="Buscar platillo..."
               value={localSearchTerm}
               onChange={handleSearchChange}
               onKeyDown={handleSearchSubmit}
               className="w-full px-5 py-2.5 pl-10 rounded-full border border-secondary/30 bg-white text-secondary placeholder-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
             />
             <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted text-base" />
           </div>
          {/* Mobile Nav Links */}
          {dict && navLinks.map((link) => (
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