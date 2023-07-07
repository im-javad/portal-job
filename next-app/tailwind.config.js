/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      run: "#fff",
      appColor_1: "#051622",
      appColor_2: "#1ba098",
      appColor_3: "#cca57b",
      appColor_4: "#444444",
      appColor_5: "#e95d00",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
