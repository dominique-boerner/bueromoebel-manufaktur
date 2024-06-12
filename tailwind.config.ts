/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#024064",
        "on-primary": "#FFFFFF",
        "secondary": "#FDB201",
        "on-secondary": "#FFFFFF",
      },
      fontFamily: {
        "arial-rounded": "Arial Rounded MT",
        "rage-italic": "Rage"
      }
    },
  },
  plugins: [],
}

