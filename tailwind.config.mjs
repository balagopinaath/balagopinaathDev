/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#60A5FA",
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
        },
        accent: {
          light: "#FF9F7F",
          DEFAULT: "#FF7F50",
          dark: "#FF6347",
        },
        background: {
          light: "#F8FAFC",
          DEFAULT: "#FFFFFF",
          dark: "#F1F5F9",
        },
        text: {
          primary: "#0F172A",
          secondary: "#475569",
          muted: "#94A3B8",
          light: "#F8FAFC",
        },
        dark: {
          light: "#334155",
          DEFAULT: "#1E293B",
          dark: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};
