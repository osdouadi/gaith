import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
    },
    fontSize: {
      xs: "0.75rem", 
      sm: "0.875rem",
      base: "1rem", 
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem", 
      "3xl": "1.875rem",
      "4xl": "2.25rem", 
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#15999e",
        white: "#fefefe",
        yellow: {
          "50": "#fefdcd",
          "100": "#fdfc9b",
          "200": "#fdfb81",
          "300": "#fdfa66",
          "400": "#fcf94f",
          "500": "#fcf936",
          "600": "#fcf81d",
        },
        red: {
          "300": "#e74645",
        },
      },
    },
  },
  plugins: [],
};
export default config;
