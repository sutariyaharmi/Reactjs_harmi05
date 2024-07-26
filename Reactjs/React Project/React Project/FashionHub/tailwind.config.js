/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens:{
          'vsm':'420px',
          'msm' : '500px',
          'lmd':'600px',
          'xmd': '650px', 
          'llmd':'700px',
          'lllmd':'800px',
          'slg':'900px',
          'mlg':'1130px',
          'mmlg':'1217',
          'lg':'1270px'
          
        },
      },
    },
    plugins: [],
  }