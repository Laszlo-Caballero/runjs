/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cornflower-blue": {
          50: "#f2f5fc",
          100: "#e1e8f8",
          200: "#cad8f3",
          300: "#a6bfea",
          400: "#6b91db",
          500: "#5c7dd5",
          600: "#4862c8",
          700: "#3e51b7",
          800: "#384495",
          900: "#313b77",
          950: "#222749",
        },
      },
    },
  },
  plugins: [],
};
