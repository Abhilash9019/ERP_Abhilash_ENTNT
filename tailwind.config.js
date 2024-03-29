module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        cyan: { 900: "#003f62" },
        white: { A700_01: "#ffffff", A700: "#fefeff" },
        gray: {
          50: "#fafafa",
          100: "#f7f7f7",
          300: "#e7e7e3",
          600: "#70706e",
          "900_33": "#23232133",
          "900_03": "#1c1c1a",
          "900_4c": "#2323214c",
          "900_01": "#232321",
          "900_90": "#23232190",
          "900_7e": "#2323217e",
          "900_a2": "#232321a2",
          "900_0c": "#2323210c",
          "600_01": "#79767c",
          "900_02": "#151514",
        },
        black: { 900: "#000000", "900_90": "#00000090", "900_a2": "#000000a2" },
        orange: { 400: "#ffa52f" },
        blue_gray: { 900: "#36323b" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", opensans: "Open Sans", rubik: "Rubik" },
      opacity: { 0.6: 0.6, 0.4: 0.4, 0.8: 0.8 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
