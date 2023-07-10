/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "rgba(54,5,154)"
        }
      }
    ]
  },

  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto", // 👈 for sidebar layout. adds grid-cols-sidebar class
      },
      gridTemplateRows: {
        header: "64px auto", // 👈 for the navbar layout. adds grid-rows-header class
      },
      colors: {
        primaryColour: "rgba(54,5,154)"
      },
    },
  },
  plugins: [require("daisyui")],
}
