/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    screens: {},
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cp1: '#BB6CE7',
        cp2: '#5B4387',
        airbRed3: 'hsl(343, 79%, 51%)',
        airbRed4: 'hsl(349, 100%, 61%)',
        airbBlanco: 'hsl(180, 100%, 100%)',
        airbVerde: 'hsl(121, 100%, 32%)',
        airbGreylt: '#DDDDDD',
      },
      fontFamily: {
        'primary': ['Inter'],
        'secondary': ['Avenir']
      },
      maxWidth: {
        'custom1': '1200px',
      },
      backgroundImage:{
        'skyline': 'url(https://raw.githubusercontent.com/court-tek/cwpracticaljs/newculture/assets/images/atlanta-skyline-night-high-contrast-black-white-light-trails-85617749.jpg)',
        'cfamily': 'url(https://raw.githubusercontent.com/court-tek/cwpracticaljs/newculture/assets/images/family1.jpg)'
      }
    },
  },
  plugins: [],
}

