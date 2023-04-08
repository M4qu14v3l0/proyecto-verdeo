/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'titulos': 'DM Serif Text, serif',
        'botones':'Noto Sans, sans-serif',
      },
      colors: {
        'fondo': '#EDEDED',
        'verde': '#175A34',
        'verde2': '#56B87F',
        'amarillo': '#F4B847',
        'rojo': '#9F2E05',
        'tipografia': '#161616',
        'blanco': '#FFFFFF',
        'rosa': '#F5A88C',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        'xl': '30px',
      },
      backgroundImage: {
        'nos': "url('/foto1.jpg')",
        'dir': "url('/foto2.jpg')",
        'voluntario': "url('/foto3.jpg')",
        'donar': "url('/foto4.jpg')",
        'donar2': "url('/donacion.jpg')",
        'donar3': "url('/donar3.jpg')",
        'tips': "url('/tips.jpg')",
        'ayuda': "url('/foto5.jpg')",
        'hero': "url('/hero.jpg')",
        'hacemosPortada':"url('/portadaHacemos.svg')",
        'alpaca':"url('/alpaca.svg')",
        'comunidad': "url('/comunidad.jpg')"
      },
      gridTemplateRows: {
        '16': 'repeat(3, auto)',
      },
      translate: {
        'cursor': '.02rem',
      },
      keyframes: {
        display: {
          '0%': {
              transform: 'translateY(-2rem)',
          },
        },
        display2: {
          '0%': {
              transform: 'translateY(-1rem)',
          },
        },
      },
      animation: {
        display: 'display 500ms ease-out',
        display2: 'display2 500ms ease-out',
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
