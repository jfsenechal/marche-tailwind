/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        "montserrat-medium": ["montserrat-medium", ...defaultTheme.fontFamily.sans],
        "montserrat-thin": ["montserrat-thin", ...defaultTheme.fontFamily.sans],
        "montserrat-light": ["montserrat-light", ...defaultTheme.fontFamily.sans],
        "montserrat-extra-light": ["montserrat-extra-light", ...defaultTheme.fontFamily.sans],
        "montserrat-regular": ["montserrat-regular", ...defaultTheme.fontFamily.sans],
        "montserrat-bold": ["montserrat-bold", ...defaultTheme.fontFamily.sans],
        "montserrat-semi-bold": ["montserrat-semi-bold", ...defaultTheme.fontFamily.sans],
        "montserrat-extra-bold": ["montserrat-extra-bold", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        administration: "#82786FFF",
        citoyen: "#FF7200FF",
        culture: "#002F2FFF",
        economie: "#0098DBFF",
        jeunesse: "#00B092FF",
        sante: "#D71F85FF",
        sport: "#98C02DFF",
        social: "#CB0044FF",
        tourisme: "#8A5A9DFF",
        cta: {
          light: "#4ae0c7",
          dark: "#487F89FF"
        },
        greylight: "#dee2e6"
      }
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio")
    ]
  }
};
