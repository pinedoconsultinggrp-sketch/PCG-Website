/** @type {import('tailwindcss').Config} */
export default {
  // Both language entry points, so no class used only in one gets purged.
  content: ["./index.html", "./es/index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Mirrors of the custom properties in src/styles.css, for utility use.
      colors: {
        navy: "#1F3A5F",
        clay: { DEFAULT: "#C4562F", dark: "#A8451F" },
        sage: "#5F7A5A",
      },
      fontFamily: {
        display: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: { '2xl': '14px' },
    },
  },
  plugins: [],
}
