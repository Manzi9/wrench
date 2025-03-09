/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-color": "var(--secondary-color)",
        "accent-color": "var(--accent-color)",
      },
      scale: {
        102: "1.02",
      },
      backdropBlur: {
        md: "20px",
      },
      fontFamily: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
