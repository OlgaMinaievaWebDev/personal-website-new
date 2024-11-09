/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        background: "#1E293B", //slate Gray
        textPrimary: "#F5F5F5", // Off-White
        accent: "#14B8A6", // Teal
        accentSecondary: "#64748B", // Steel Blue
        highlight: "#FFD700", // Gold
      },
    },
  },
  plugins: [],
};
