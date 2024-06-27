/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('/img/bg.jpg')",
      }
    },
  },
  plugins: [],
}