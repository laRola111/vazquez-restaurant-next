// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); // Necesario para extender fuentes en v3

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores base (adaptados)
        background: '#FAF3E0', // Tono crema/beige claro
        foreground: '#4E342E', // Marrón oscuro (secondary.DEFAULT) para texto principal
        muted: '#A1887F',      // Marrón más claro para texto secundario

        // Colores de la marca Vazquez (del PDF y análisis)
        primary: {
          DEFAULT: '#E65100', // Naranja vibrante principal
          light: '#FFA726',   // Variante más clara
          dark: '#BF360C',    // Variante más oscura
        },
        secondary: {
          DEFAULT: '#4E342E', // Marrón oscuro
          light: '#795548',   // Variante más clara
          dark: '#3E2723',    // Variante más oscura
        },
        accent: {
          DEFAULT: '#FFCA28', // Amarillo cálido (del fondo del PDF)
          light: '#FFD54F',   // Variante más clara
        },
      },
      fontFamily: {
        // Sintaxis correcta para extender fuentes en v3
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
         // Placeholder para el patrón
        'vazquez-pattern': "url('/images/vazquez-pattern.svg')", // Ajusta la ruta si es necesario
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Plugin para estilos de prosa
  ],
};