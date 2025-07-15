/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       animation: {
        fadeOut: 'fadeOut 3s forwards',
      },
      keyframes: {
      fadeOut: {
      '0%, 80%': { opacity: '1' },
      '100%': { opacity: '0' },
          },
        },
      
      colors: {
        pinky: '#fbe3e8',
        teeny: '#ebf6f5',
        bluegreeny: '#5cbdb9',
        brightblue: '#51e2f5',
        bluegreen: '#9df9ef',
        dustywhite: '#edf756',
        pinksand: '#ffa8b6',
        darkteal: '#347571',
        coral: '#FF1D58',
        rose: '#F75990',
        cream: '#FFF685',
        aqua: '#00DDFF',
        deepblue: '#0049B7',
      },
      fontFamily: {
        antic: ['"Antic Didone"', 'serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        flamenco: ['"Flamenco"', 'cursive'],
        cinzel: ['"Cinzel"', 'serif'],
      },
    },
  },
  plugins: [],
}
