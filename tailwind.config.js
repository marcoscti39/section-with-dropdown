/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'almost-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)',
        'black': 'rgb(0,0,0)',
        'white': 'rgb(255, 255, 255)',
        'dark-gray': '#404040'
      },
    },
  },
  plugins: [],
}