// src/components/organisms/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../public/logo2.png"
import { FaFacebookF /*, FaInstagram, FaWhatsapp */ } from 'react-icons/fa'; // Importa los íconos necesarios

// Datos de contacto estáticos
const contactData = {
  phone: '(512) 219-9858', // Del sitio web actual y PDF
  email: 'vazquezrestaurant45@gmail.com', // Del sitio web actual
  address: '13729 Research Blvd, Austin, TX 78750 Suite #850', // Del sitio web actual y PDF
  facebook: 'https://www.facebook.com/VazquezRestaurant3/', // Asumiendo URL, ajustar si es diferente
};

// Componente auxiliar para enlaces sociales
const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    // Color base del ícono: marrón claro, hover naranja
    className="text-secondary-light hover:text-primary transition-colors"
    aria-label={label}
  >
    <Icon size={22} /> {/* Ajusta el tamaño si es necesario */}
  </a>
);

export default function Footer({ lang, dict }) {
  const currentYear = new Date().getFullYear();

  // Enlaces rápidos basados en la navegación principal
  const quickLinks = [
    { name: dict.navbar.home, href: `/${lang}/#hero` },
    { name: dict.navbar.breakfast, href: `/${lang}/#breakfast` },
    { name: dict.navbar.lunchDinner, href: `/${lang}/#lunch-dinner` },
    { name: dict.navbar.drinks, href: `/${lang}/#drinks` },
    // { name: dict.navbar.contact, href: `/${lang}/#contact` }, // Si Contacto es una sección
  ];

  return (
    // Fondo gris claro, borde superior, color de texto base marrón oscuro
    <footer className="bg-gray-50 border-t border-gray-200 text-secondary mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Columna 1: Logo Placeholder */}
          <div className="space-y-4 md:col-span-1 lg:col-span-1">
            <Link href={`/${lang}`} className="inline-block">
              {/* Placeholder del Logo con colores */}
             <Image src={logo} alt="Gallardos Cleaning Logo" width={160} height={40} priority className="h-10 w-auto" />
            </Link>
            {/* <p className="text-sm text-secondary-light">{dict.footer.description || 'Authentic Mexican Food.'}</p> */}
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="md:justify-self-center">
             {/* Título en gris oscuro */}
            <h3 className="text-base font-semibold text-foreground mb-4">{dict.footer.quickLinks || 'Quick Links'}</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {/* Enlaces en marrón claro, hover naranja */}
                  <Link href={link.href} className="text-secondary-light hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="md:justify-self-center">
             <h3 className="text-base font-semibold text-foreground mb-4">{dict.footer.contactInfo || 'Contact Info'}</h3>
             {/* Dirección y enlaces en marrón claro, hover naranja */}
             <address className="space-y-2 text-sm not-italic text-secondary-light">
               <p>{contactData.address}</p>
               <p><a href={`tel:${contactData.phone}`} className="hover:text-primary transition-colors">{contactData.phone}</a></p>
               <p><a href={`mailto:${contactData.email}`} className="hover:text-primary transition-colors">{contactData.email}</a></p>
             </address>
          </div>

           {/* Columna 4: Redes Sociales */}
           <div className="md:col-span-3 lg:col-span-1 lg:justify-self-end">
             <h3 className="text-base font-semibold text-foreground mb-4">{dict.footer.followUs || 'Follow Us'}</h3>
             <div className="flex space-x-4">
               {contactData.facebook && <SocialLink href={contactData.facebook} icon={FaFacebookF} label="Facebook"/>}
               {/* Añadir otros íconos si existen */}
             </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs">
           {/* Texto de copyright en gris medio */}
          <p className="text-gray-500">
            &copy; {currentYear} Vazquez Restaurant #3. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}