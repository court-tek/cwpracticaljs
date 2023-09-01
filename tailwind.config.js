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
        airbRed2: 'hsl(333, 94%, 44%)',
        airbRed3: 'hsl(343, 79%, 51%)',
        airbRed4: 'hsl(349, 100%, 61%)',
        airbBlanco: 'hsl(180, 100%, 100%)',
        airbVerde: 'hsl(121, 100%, 32%)',
        airbGreylt: '#DDDDDD',
      },
      fontFamily: {
        'primary': ['Inter'],
        'secondary': ['Avenir']
      }
    },
  },
  plugins: [],
}

