// src/components/organisms/HoursContactSection.js
'use client';

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Datos de contacto (Confirmar Suite #860 vs #850)
const contactData = {
  phone: '(512) 219-9858',
  email: 'vazquezrestaurant45@gmail.com',
  address: '13729 Research Blvd, Austin, TX 78750 Suite #860', // Usando #860 temporalmente
};

// Componente auxiliar para cada línea de horario con animación mejorada
const HourLine = ({ dayEs, dayEn, time, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30, y: 10 }} // Inicia ligeramente abajo y a la izquierda
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 * index }} // Delay escalonado
    viewport={{ once: true, amount: 0.3 }}
    className="mb-3 md:mb-4" // Más espacio entre líneas
  >
    {/* // NOTE: Texto blanco sobre fondo naranja */}
    <p className="font-semibold text-white">{dayEn}</p>
    <p className="text-sm text-gray-200">{dayEs}</p> {/* Español un poco más tenue */}
    <p className="font-bold text-lg text-white">{time}</p>
  </motion.div>
);

export default function HoursContactSection({ lang, dict }) {
  // Los labels bilingües se manejan igual

  return (
    <section id="hours-contact" className="py-16 md:py-24 bg-background">
      {/* // NOTE: Contenedor principal ajustado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} // Animación de entrada más notable
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* // FIX: Contenedor exterior ahora usa bg-accent y shadow-xl */}
        <div className="bg-accent p-1.5 rounded-xl shadow-xl"> {/* Padding pequeño para efecto marco */}
          {/* // FIX: Contenedor interior usa bg-primary y texto secondary-dark */}
          <div className="bg-primary text-secondary-dark p-6 md:p-10 rounded-lg text-center">

            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              // FIX: Título ahora blanco sobre fondo naranja
              className="text-3xl md:text-4xl font-serif font-bold mb-8 md:mb-10 text-white"
            >
              {dict.title} {/* "Hours - Horas" */}
            </motion.h2>

            {/* Horarios */}
            <div className="mb-8 md:mb-10">
              {/* // NOTE: Pasamos 'index' para el delay escalonado */}
              <HourLine dayEs="Lunes a Miércoles" dayEn="Monday thru Wednesday" time={dict.mondayWedTime} index={1} />
              <HourLine dayEs="Jueves y Viernes" dayEn="Thursday & Friday" time={dict.thursdayFriTime} index={2} />
              <HourLine dayEs="Sábado" dayEn="Saturday" time={dict.saturdayTime} index={3} />
              <HourLine dayEs="Domingo" dayEn="Sunday" time={dict.sundayTime} index={4} />
            </div>

            {/* Separador */}
            <hr className="border-accent/60 my-6 md:my-8" />

            {/* Contacto y Ubicación */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              {/* Contacto */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }} // Delay ajustado
                viewport={{ once: true }}
                // FIX: Texto blanco sobre fondo naranja
                className="text-white"
              >
                {/* // FIX: Título en blanco */}
                <h3 className="font-semibold text-xl mb-3">{dict.contactTitle}</h3>
                <p className="flex items-center justify-center mb-1">
                  <FaPhoneAlt className="mr-2" />
                  {/* // FIX: Enlaces usan accent-light (amarillo claro) para hover */}
                  <a href={`tel:${contactData.phone}`} className="hover:text-accent-light transition-colors">{contactData.phone}</a>
                </p>
                <p className="flex items-center justify-center break-all">
                  <FaEnvelope className="mr-2" />
                  <a href={`mailto:${contactData.email}`} className="hover:text-accent-light transition-colors">{contactData.email}</a>
                </p>
              </motion.div>

              {/* Ubicación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }} // Delay ajustado
                viewport={{ once: true }}
                 // FIX: Texto blanco sobre fondo naranja
                className="text-white"
              >
                 {/* // FIX: Título en blanco */}
                <h3 className="font-semibold text-xl mb-3">{dict.locationTitle}</h3>
                <div className="flex items-start justify-center"> {/* Alineado arriba para direcciones largas */}
                  <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                     // FIX: Enlaces usan accent-light (amarillo claro) para hover
                    className="hover:text-accent-light transition-colors"
                  >
                    {contactData.address}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}