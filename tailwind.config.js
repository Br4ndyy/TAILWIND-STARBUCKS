/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        'puti':'#ffffff',
        'maitim':'#2b2b2b',
        'lasalle':'#006341',
        'semento':'hsl(240,1.51%,50.98%)',
        'medyolasalle':'#f1f8f5',
        'medyolasalle2':'#d4e9e2',
      }
    },
  },
  plugins: [],
}

