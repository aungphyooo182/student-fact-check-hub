import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Crucial: This tells Tailwind to scan all TSX files
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#020617",
        accent: "#6366f1",
      },
      fontFamily: {
        // Custom fonts loaded via @font-face in src/App.css
        press: ['"Z03 Press"', "system-ui", "sans-serif"],
        latyay: ['"Z09 LatYaySat"', "system-ui", "sans-serif"],
        cartoon: ['"Z10 Cartoon"', "system-ui", "sans-serif"],
        khithaungg: ['"Z20 KhitHaungg"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
