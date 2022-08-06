/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#000',
        white: '#fff',
        opal: '#CCD6F6',
        darkOpal: '#8892B0',
        lightText: '#76797d',
        backgroundBlue: '#001E3C',
        skyBlue: '#3399FF'
      },
      screens: {
        sm: '388px'
      }
    }
  },
  plugins: []
};
