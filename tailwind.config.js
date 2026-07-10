/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        "brand-orange": "#C2410C",
        "brand-orange-dark": "#9A3412",
        "brand-orange-light": "#FB923C",
        "brand-orange-soft": "#FDBA74",
        "brand-peach": "#FED7AA",
        "brand-cream": "#FFF7ED",
        "brand-charcoal": "#111827",
        "card-surface": "#1F2937",
        "card-border": "#374151",
        "hero-start": "#FF6F00",
        "hero-end": "#FF9100",
      },
    },
  },
  plugins: [],
};
