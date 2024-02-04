/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gunmetal': '#243441',
        'silver': '#B8B6B7',
        'savety-orange': '#E98033',
        'sandy-brown': '#ffb078',
        'anti-flash-white': '#EBEBEB',
        'hover-white': '#E4E4E4',
        'hover-dark': '#263644'
      }
    },
  },
  plugins: [],
}