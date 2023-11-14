/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background_primary: "#040404",
        background_secondary: "#262626",
      },
    },
  },
  plugins: [],
};
