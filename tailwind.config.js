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
        'ayuda': "url('/foto5.jpg')",
      },
    },
  plugins: [],
  }
}
