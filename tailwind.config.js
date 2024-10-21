/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        paraColor: 'rgba(17, 17, 17, 0.6)',
        anchorColor:'rgb(96, 71, 236)'
      }
    },
  },
  plugins: [],
}

