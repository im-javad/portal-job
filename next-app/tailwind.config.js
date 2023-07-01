/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      appColor_1: "#272727",
      appColor_2: "#FAB162",
      appColor_3: "#0bbdb3",
      appColor_4: "#1a1818",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
