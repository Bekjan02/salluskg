/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#45651C',
        dark: '#2D2D2D',
        'light-yellow': '#E5EFB2',
        'light-blue': '#BEEAE0',
        'light-green': '#DBEEDE',
        button: '',
        green: '#BBDA81',
      },
      backgroundImage: {
        button: 'linear-gradient(78.72deg, #36CBB9 2.27%, #A7D545 77.31%)',
        hero: 'url("/src/assets/images/hero-bg.png")',
      },
      screens: {
        'lg-md': '992px',
        'full-hd': '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          'full-hd': '120px',
        },
      },
      fontFamily: {
        Archivo: ['Archivo', 'sans-serif'],
        // Inter: []
      },
    },
  },
  plugins: [],
};
