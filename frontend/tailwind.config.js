/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      boxShadow: {
        'text-md': '2px 2px 4px rgba(0, 0, 0, 0.5)', // Custom text shadow
      },
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#FFFFFF"
      },
    },

    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      sans: ["Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "760px"
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
        },
      });
    },
  ],
}

