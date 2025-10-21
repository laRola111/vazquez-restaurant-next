// src/components/organisms/HoursContactSection.js
'use client';

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Datos de contacto (Confirmar Suite #860 vs #850)
const contactData = {
  phone: '(512) 219-9858',
  email: 'vazquezrestaurant45@gmail.com',
  address: '13729 Research Blvd, Austin, TX 78750 Suite #860', // Usando #860
};

// Componente auxiliar para líneas de horario (sin cambios funcionales)
const HourLine = ({ dayEs, dayEn, time, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    viewport={{ once: true, amount: 0.3 }}
    className="mb-3" // Espacio entre líneas
  >
    {/* // FIX: Usar colores definidos (secondary-dark, muted) */}
    <p className="font-semibold text-secondary-dark">{dayEn}</p>
    <p className="text-sm text-muted">{dayEs}</p>
    <p className="font-bold text-lg text-secondary-dark">{time}</p>
  </motion.div>
);

export default function HoursContactSection({ lang, dict }) {
  // Las traducciones se manejan igual

  return (
    // FIX: Sección con fondo crema, padding vertical
    <section id="hours-contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* // FIX: Usar Grid para 3 columnas en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Columna 1: Horarios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center md:text-left"
          >
            {/* Título de Horarios */}
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 border-b-2 border-primary pb-2 inline-block">
              {dict.hoursContact.title} {/* Hours - Horas */}
            </h2>
            {/* Lista de Horarios */}
            <div>
              <HourLine dayEs="Lunes a Miércoles" dayEn="Monday thru Wednesday" time={dict.hoursContact.mondayWedTime} delay={0.2} />
              <HourLine dayEs="Jueves y Viernes" dayEn="Thursday & Friday" time={dict.hoursContact.thursdayFriTime} delay={0.3} />
              <HourLine dayEs="Sábado" dayEn="Saturday" time={dict.hoursContact.saturdayTime} delay={0.4} />
              <HourLine dayEs="Domingo" dayEn="Sunday" time={dict.hoursContact.sundayTime} delay={0.5} />
            </div>
          </motion.div>

          {/* Columna 2: Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 border-b-2 border-primary pb-2 inline-block">
              {dict.hoursContact.contactTitle} {/* CONTACTO / CONTACT */}
            </h2>
            <div className="space-y-3 text-secondary-dark"> {/* Texto marrón oscuro */}
              <p className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-3 text-primary" /> {/* Icono naranja */}
                <a href={`tel:${contactData.phone}`} className="hover:text-primary transition-colors">{contactData.phone}</a>
              </p>
              <p className="flex items-center justify-center md:justify-start break-all">
                <FaEnvelope className="mr-3 text-primary" /> {/* Icono naranja */}
                <a href={`mailto:${contactData.email}`} className="hover:text-primary transition-colors">{contactData.email}</a>
              </p>
            </div>
          </motion.div>

          {/* Columna 3: Ubicación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 border-b-2 border-primary pb-2 inline-block">
              {dict.hoursContact.locationTitle} {/* UBICACIÓN / LOCATION */}
            </h2>
            <div className="flex items-start justify-center md:justify-start text-secondary-dark"> {/* Texto marrón oscuro */}
              <FaMapMarkerAlt className="mr-3 text-primary mt-1 flex-shrink-0" /> {/* Icono naranja */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {contactData.address}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}