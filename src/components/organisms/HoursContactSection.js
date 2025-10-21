// src/components/organisms/HoursContactSection.js
'use client';

import { useState } from 'react'; // <-- Añadir useState
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
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, amount: 0.3 }}
    className="flex justify-between items-baseline py-2 border-b border-secondary/10 last:border-b-0 md:flex-col md:items-start md:border-b-0 md:py-1"
   >
    <div className="md:mb-1">
      <p className="font-semibold text-secondary-dark">{dayEn}</p>
      <p className="text-sm text-muted">{dayEs}</p>
    </div>
    <p className="font-bold text-lg text-secondary-dark md:text-base">{time}</p>
  </motion.div>
);

export default function HoursContactSection({ lang, dict }) {
    // NOTE: Estados para el formulario (aún sin lógica de envío)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Verificación inicial por si dict no llega
    if (!dict) {
        console.warn("HoursContactSection: Dictionary (dict prop) is missing!");
        return null; // O mostrar un mensaje de error/carga
    }

    // NOTE: Función placeholder para manejar el envío (a implementar después)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado (simulado):", { name, email, message });
        // Aquí iría la lógica para enviar el formulario (ej: API, Supabase function)
        alert('Mensaje enviado (simulación)'); // Placeholder
        setName('');
        setEmail('');
        setMessage('');
    };


  return (
    <section id="hours-contact" className="py-16 md:py-24 bg-background"> {/* Fondo crema */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Columna 1: Horarios */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             viewport={{ once: true, amount: 0.2 }}
             className="text-center md:text-left"
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 border-b-2 border-primary pb-2 inline-block">
              {dict.title}
            </h2>
            <div className="space-y-1"> {/* Menos espacio vertical entre líneas */}
              <HourLine dayEs="Lunes a Miércoles" dayEn="Monday thru Wednesday" time={dict.mondayWedTime} delay={0.2} />
              <HourLine dayEs="Jueves y Viernes" dayEn="Thursday & Friday" time={dict.thursdayFriTime} delay={0.3} />
              <HourLine dayEs="Sábado" dayEn="Saturday" time={dict.saturdayTime} delay={0.4} />
              <HourLine dayEs="Domingo" dayEn="Sunday" time={dict.sundayTime} delay={0.5} />
            </div>
          </motion.div>

          {/* Columna 2: Contacto y Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center md:text-left"
          >
            {/* Título Contacto */}
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 border-b-2 border-primary pb-2 inline-block">
              {dict.contactTitle}
            </h2>
            {/* Información de Contacto */}
           

            {/* --- Inicio del Formulario --- */}
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
               {dict.formTitle || 'Send us a Message'} {/* Título del formulario */}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">{dict.formNamePlaceholder || 'Name'}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={dict.formNamePlaceholder || 'Your Name'}
                  required
                  className="w-full px-4 py-2 border border-secondary/30 rounded-md bg-white text-secondary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">{dict.formEmailPlaceholder || 'Email'}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={dict.formEmailPlaceholder || 'Your Email'}
                  required
                  className="w-full px-4 py-2 border border-secondary/30 rounded-md bg-white text-secondary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">{dict.formMessagePlaceholder || 'Message'}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={dict.formMessagePlaceholder || 'Your Message'}
                  required
                  className="w-full px-4 py-2 border border-secondary/30 rounded-md bg-white text-secondary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-primary text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-background"
                >
                  {dict.formSendButton || 'Send'}
                </button>
              </div>
            </form>
            {/* --- Fin del Formulario --- */}
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
              {dict.locationTitle}
            </h2>
             <div className="space-y-3 text-secondary-dark mb-8"> {/* Añadido margen inferior */}
              <p className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-3 text-primary" />
                <a href={`tel:${contactData.phone}`} className="hover:text-primary transition-colors">{contactData.phone}</a>
              </p>
              <p className="flex items-center justify-center md:justify-start break-all"> {/* break-all para emails largos */}
                <FaEnvelope className="mr-3 text-primary" />
                <a href={`mailto:${contactData.email}`} className="hover:text-primary transition-colors">{contactData.email}</a>
              </p>
            </div>
            <div className="flex items-start justify-center md:justify-start text-secondary-dark">
              <FaMapMarkerAlt className="mr-3 text-primary mt-1 flex-shrink-0" size={20}/> {/* Icono un poco más grande */}
              {/* NOTE: Enlace a Google Maps */}
              <a
                 href={`https://googleusercontent.com/maps.google.com/0${encodeURIComponent(contactData.address)}`}
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