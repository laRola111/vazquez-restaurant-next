// src/components/organisms/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import logo from '../../../public/logo2.png'; // <-- IMPORTAR LOGO

const contactData = {
  phone: '(512) 219-9858',
  email: 'vazquezrestaurant45@gmail.com',
  address: '13729 Research Blvd, Austin, TX 78750 Suite #860',
};

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-secondary hover:text-primary transition-colors"
  >
    <Icon size={24} />
  </a>
);

export default function Footer({ lang, dict }) {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { name: dict.navbar.home, href: `/${lang}/` },
    { name: dict.navbar.breakfast, href: `/${lang}/menu/breakfast` },
    { name: dict.navbar.lunchDinner, href: `/${lang}/menu/lunch-dinner` },
    { name: dict.navbar.drinks, href: `/${lang}/menu/drinks` },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200 text-secondary mt-auto"> {/* Fondo gris un poco más oscuro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Columna 1: Logo */}
          <div className="space-y-4 md:col-span-1 lg:col-span-1">
            <Link href={`/${lang}`} className="inline-block">
               {/* FIX: Usar imagen del logo */}
               <Image
                src={logo}
                alt="Vazquez Restaurant #3 Logo"
                height={40} // Ajustar altura
                className="w-auto"
              />
            </Link>
          </div>

          {/* Columnas 2, 3, 4 y Copyright (sin cambios funcionales, solo heredarán colores) */}
          <div className="md:justify-self-start">
            <h3 className="text-base font-semibold text-foreground mb-4">{dict.footer.quickLinks || 'Quick Links'}</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:justify-self-start">
             <h3 className="text-base font-semibold text-foreground mb-4">{dict.footer.contactInfo || 'Contact Info'}</h3>
             <address className="space-y-2 text-sm not-italic text-secondary-light">
               <p>
                 <a href={`tel:${contactData.phone}`} className="hover:text-primary transition-colors">
                   {contactData.phone}
                 </a>
               </p>
               <p className="break-all">
                 <a href={`mailto:${contactData.email}`} className="hover:text-primary transition-colors">
                   {contactData.email}
                 </a>
               </p>
               <p>
                 <a
                   href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-primary transition-colors"
                 >
                   {contactData.address}
                 </a>
               </p>
             </address>
          </div>
           <div className="md:col-span-3 lg:col-span-1 lg:justify-self-end">
             <h3 className="text-base font-semibold text-foreground mb-4">{dict.footer.followUs || 'Follow Us'}</h3>
             <div className="flex space-x-4">
               <SocialLink href="https://www.facebook.com/share/17BcdfAhGn/?mibextid=wwXIfr" icon={FaFacebookF} label="Facebook" />
             </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs">
          <p className="text-gray-500"> {/* ... */} </p>
        </div>
      </div>
    </footer>
  );
}