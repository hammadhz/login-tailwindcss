/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors:{
      primary: "#f2f2f2",
      secondary: "#6c496f",
      third: "#ffffff",
      fourth: "#dfdfdf",
      fifth: "#999999",
      sixth: "#734d76",
      seventh: "#8d6590"
    },
    fontFamily:{
      "helvetic": ["HelveticaNeue"]
    },
    backgroundImage:{
      "bg-gradient": "radial-gradient(circle, rgba(99,65,102,1) 0%, rgba(48,15,50,1) 70%)"
    },
    extend: {},
  },
  plugins: [],
}
