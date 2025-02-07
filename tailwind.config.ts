import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Cambia de "media" a "class" para alternar el modo oscuro manualmente
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, // Centra el contenedor automáticamente
      padding: "1rem", // Opcional: agrega un padding horizontal
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
