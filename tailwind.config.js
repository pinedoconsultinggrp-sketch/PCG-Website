/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0ea5a7" }
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
}
