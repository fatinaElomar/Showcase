/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './public/index.html'
  ],
  darkMode: 'class', // enable dark mode using 'dark' class
  theme: {
    extend: {
      fontFamily: {
        display: ['Reckless', 'Georgia', 'serif'],
        body: ['Roobert', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'Roboto', 'Ubuntu', '"Helvetica Neue"', 'sans-serif'],
      },
      colors: {
        ink: '#111827', // main text color
      },
      boxShadow: {
        glass: '0 4px 60px rgba(0, 0, 0, 0.05)',
      },
      transitionProperty: {
        colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
        shadow: 'box-shadow',
      },
      transitionDuration: {
        300: '300ms',
      },
    },
  },
  plugins: [],
}
