/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
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
            },
        },
        plugins: [],
    }
}