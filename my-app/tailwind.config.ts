import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        hover: "var(--hover)",
        gray: "var(--gray)",
        lightBlue: "var(--light-blue)",
        Yellow: "var(--yellow)",
        Purple: "var(--purple)",
        lightOrange: "var(--light-orange)",
        Red: "var(--red)",
        Orange: "var(--orange)",
        Teal: "var(--teal)",
        Blue: "var(--blue)",
      },
      fontFamily: {
        Antonio: "var(--font-antonio)",
        Sparta: "var(--font-sparta)",
      },
    },
  },
  plugins: [],
} satisfies Config;
