/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#532161", // Imperial Purple
          secondary: "#E5D1E5", // Queen Pink
          accent: "#FDF2F8", // Blush Pink Tint
          bg: "#FFFBFE", // Warm White
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
