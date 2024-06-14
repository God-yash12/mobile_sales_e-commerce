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
      fontFamily:{
        'sans': ['Roboto', 'sans-serif'],
      },
      container:{
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          // lg: "4rem",
          // xl: "5rem", 
        },
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

