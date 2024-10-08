import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-md": "0px 1px 3px 0px rgba(0, 0, 0, 0.1)", // Equivalent to #0000001A
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryBlue: "#2858E9",
        gold: "#EF9F1D",
        grey: "#4B5563",
      },
    },
  },
  plugins: [],
};
export default config;
