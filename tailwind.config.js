/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-white':'#EEF2F3',
        'color-black':'#010000',
        'color-gray':'#403E3E',
        'color-blue':'#5591C5',
      },
      fontFamily:{
        'title':'Poppins'
      }
    },
  },
  plugins: [],
}

