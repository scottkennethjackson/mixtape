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

      backgroundImage: {
        'background-img': "url('/public/images/background.jpg')"
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'darkgray': '#282c34',
        'darkgrey': '#282c34',
        'lightblue': '#61dafb'
      },

      fontFamily: {
        'marker': ['var(--marker)', 'sans-serif'],
        'work': ['var(--work)', 'sans-serif']
      },
    },
  },
  plugins: [],
};
