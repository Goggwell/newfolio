import type { Config } from "tailwindcss";

import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "hsl(var(--background))",
        backgroundRGB: "hsl(var(--backgroundRGB))",
        text: "hsl(var(--text))",
        dot: "hsl(var(--dot))",
        programOutine: "hsl(var(--programOutline))",
        program: "hsl(var(--program))",
        select: "hsl(var(--select))",
        themeTitle: "hsl(var(--themeTitle))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
