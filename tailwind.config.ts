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
      fontSize: {
        "headline": "4rem",
        "sub-headline": "2.6rem",
        "article": "1.4rem"
      },
      fontFamily: {
        "arial-rounded": "Arial Rounded MT",
        "rage-italic": "Rage",
        "playwrite-netherland": "Playwrite NL"
      },
      listStyleType: {
        "circle": "circle"
      }
    },
  },
  plugins: [],
}

