import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SRE Research Center Theme Colors (Matching Logo #00549D)
        emerald: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc8fb",
          400: "#38aaf7",
          500: "#0284c7",
          600: "#0274c7", // tech cerulean blue
          700: "#00549d", // EXACT SRE² LOGO ACADEMIC BLUE
          800: "#05467f", // deep academic navy hover
          900: "#0a3a66", // dark navy
          950: "#072644", // midnight navy
        },

        "purdue-gold": "#00549d", // SRE Blue accent
        "purdue-rush": "#003366", // SRE Navy brand
        "purdue-field": "#0274c7", // SRE Blue hover
        "purdue-black": "#0f172a", // SRE Text slate-900
        "purdue-surface": "#ffffff", // SRE Container/Card white
        "purdue-white": "#003366", // SRE Brand text navy
        "purdue-secondary": {
          gray1: "#64748b", // slate-500
          gray2: "#475569", // slate-600
          gray3: "#334155", // slate-700
        },

        // Clean semantic aliases
        "sre-blue": "#00549d",
        "sre-blue-hover": "#0274c7",
        "sre-navy": "#003366",
        "sre-black": "#0f172a",
        "sre-surface": "#ffffff",
        "sre-white": "#003366",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-outfit)"],
        heading: ["var(--font-outfit)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
