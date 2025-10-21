// src/components/organisms/HoursContactSection.js
'use client';

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Datos de contacto (igual que antes)
const contactData = {
  phone: '(512) 219-9858',
  email: 'vazquezrestaurant45@gmail.com',
  address: '13729 Research Blvd, Austin, TX 78750 Suite #860',
};

// Componente HourLine (sin cambios)
const HourLine = ({ dayEs, dayEn, time, delay }) => (
  <motion.div /* ... */ >
    <p className="font-semibold text-secondary-dark">{dayEn}</p>
    <p className="text-sm text-muted">{dayEs}</p>
    <p className="font-bold text-lg text-secondary-dark">{time}</p>
  </motion.div>
);

// FIX: Ahora 'dict' es directamente el objeto hoursContact
export default function HoursContactSection({ lang, dict }) {
  // Verificación inicial por si dict no llega
  if (!dict) {
      console.warn("HoursContactSection: Dictionary (dict prop) is missing!");
      return null;
  }

  // Las traducciones ahora se acceden directamente desde dict
  const mondayWedLabel = lang === 'es' ? dict.mondayWed : 'Monday thru Wednesday'; // Ejemplo (no usado directamente en JSX ahora)

  return (
    <section id="hours-contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Columna 1: Horarios */}
          <motion.div /* ... */ >
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 border-b-2 border-primary pb-2 inline-block">
              {/* FIX: Acceder directamente a dict.title */}
              {dict.title}
            </h2>
            <div>
              {/* FIX: Acceder directamente a dict.xxxTime */}
              <HourLine dayEs="Lunes a Miércoles" dayEn="Monday thru Wednesday" time={dict.mondayWedTime} delay={0.2} />
              <HourLine dayEs="Jueves y Viernes" dayEn="Thursday & Friday" time={dict.thursdayFriTime} delay={0.3} />
              <HourLine dayEs="Sábado" dayEn="Saturday" time={dict.saturdayTime} delay={0.4} />
              <HourLine dayEs="Domingo" dayEn="Sunday" time={dict.sundayTime} delay={0.5} />
            </div>
          </motion.div>

          {/* Columna 2: Contacto */}
          <motion.div /* ... */ >
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 border-b-2 border-primary pb-2 inline-block">
              {/* FIX: Acceder directamente a dict.contactTitle */}
              {dict.contactTitle}
            </h2>
            <div className="space-y-3 text-secondary-dark">
              <p className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-3 text-primary" />
                <a href={`tel:${contactData.phone}`} className="hover:text-primary transition-colors">{contactData.phone}</a>
              </p>
              <p className="flex items-center justify-center md:justify-start break-all">
                <FaEnvelope className="mr-3 text-primary" />
                <a href={`mailto:${contactData.email}`} className="hover:text-primary transition-colors">{contactData.email}</a>
              </p>
            </div>
          </motion.div>

          {/* Columna 3: Ubicación */}
          <motion.div /* ... */ >
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 border-b-2 border-primary pb-2 inline-block">
              {/* FIX: Acceder directamente a dict.locationTitle */}
              {dict.locationTitle}
            </h2>
            <div className="flex items-start justify-center md:justify-start text-secondary-dark">
              <FaMapMarkerAlt className="mr-3 text-primary mt-1 flex-shrink-0" />
              <a /* ... href y target ... */ className="hover:text-primary transition-colors">
                {contactData.address}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}