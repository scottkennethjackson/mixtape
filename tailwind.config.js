/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      spacing: {
        '10%': '10%',
        '15%': '15%'
      },

      boxShadow: {
        'bottom': '0 .25rem .25rem .25rem #000000'
      },

      backgroundImage: {
        'background-img': "url('/public/images/background.jpg')"
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'darkgrey': '#282c34',
        'lightblue': '#61dafb',
        'hoverblue': '#56c0dd',
        'activeblue': '#4ba6c0'
      },

      fontFamily: {
        'marker': ['var(--marker)', 'sans-serif'],
        'work': ['var(--work)', 'sans-serif']
      },
    },
  },
  plugins: [],
};
