import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
 fontFamily: {
  firesans: ["var(--font-fire-sans)", "cursive"],
  poppins: ["var(--font-poppins-med)", "cursive"],
   },
    },
  },
  plugins: [],
};
export default config;
