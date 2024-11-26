/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      sm: { max : "639px"},
      md: {max: "767px"},
      lg: {max: "1023px"},
      xl: {max: "1279px"}
    },
    extend: {
      animation: {
        loader: "loader 3s infinite linear",
      },
      keyframes: {
        loader: {
          "0%": { backgroundPosition: "-800px 0" },
          "100%": { backgroundPosition: "800px 0" },
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}