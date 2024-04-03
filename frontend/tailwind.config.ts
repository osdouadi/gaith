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
      "2xl": "1536px",
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
