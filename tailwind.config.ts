import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1080px",
      },
      colors: {
        main: "#0E0E0E",
        secondary: "#1C1C1C",

        rose: {
          50: "#E7D4E1",
          100: "#EDCBE2",
          200: "#EBABD7",
          300: "#FC88D7",
          400: "#ED81CB",
          500: "#E55EBA",
          600: "#F145AC",
          700: "#E1259C",
          800: "#D11094",
          900: "#A81178",
          950: "#8A0A61",
        },

        hover: "#FC88D7",
        disabled: "#886D7F",
        text: "#F8F8F8",
        "text-alt": "#B8A3B1",
        "text-negative": "#4CD076",
      },
      fontFamily: {
        primary: ["Martian Mono", "monospace"],
        secondary: ["Arial"],
      },
    },
  },
  plugins: [],
};
export default config;
