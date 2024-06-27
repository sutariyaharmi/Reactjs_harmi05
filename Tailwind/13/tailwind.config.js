/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screen:{
      'lg':'900',
    }
  },
    extend: {
      screens: {
        'lg': '930px',
        },
      spacing:{
        '98':'400px',
        '103':'420px'
      }
    },
  plugins: [],
}