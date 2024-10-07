/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3f0af0",
        secondary: "#210c47",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif', 'Roborto'],
      },
      container:{
        center: true,
        padding: "0",
       
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.pointer-events-auto-on-hover': {
          pointerEvents: 'auto',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

