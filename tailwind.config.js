/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
                'montserrat-bold': ['montserratbold', ...defaultTheme.fontFamily.sans],
                'montserrat-extra-bold': ['montserratextrabold', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                admin: '#82786FFF',
                citoyen: '#FF7200FF',
                culture: '#002F2FFF',
                economie: '#0098DBFF',
                jeunesse: '#00B092FF',
                sante: '#D71F85FF',
                sport: '#98C02DFF',
                social: '#CB0044FF',
                tourisme: '#8A5A9DFF',
                blue: {
                    light: '#4ae0c7'
                },
            },
        },
        plugins: [],
    }
}