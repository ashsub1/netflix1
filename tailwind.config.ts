
import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "netflix-red": "#E50914",
      },
      boxShadow: {
        "soft": "0 8px 30px rgba(0,0,0,0.15)"
      },
      borderRadius: {
        "2xl": "1rem"
      }
    },
  },
  plugins: [],
};
export default config;
