import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom elegant cozy earthy palette
        brand: {
          cream: "#F5EFE6",
          beige: "#D8C4B6",
          brown: "#6B4F3A",
          gold: "#C8A97E",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        thai: ["var(--font-thai)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
