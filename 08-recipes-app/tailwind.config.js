/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#84BD00',
      },
      fontFamily: {
        nunito: ['Nunito'],
        montserrat: ['Montserrat'],
        montez : ['Montez'],
      }
    },
  },
  plugins: [],
}

