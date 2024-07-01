/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        borderC: 'rgba(0, 0, 0, 0.1)',
        slatePurple: '#726E8D',
        deepIndigo: '#2A254B',
        lightGrayTransparent: 'rgba(249, 249, 249, 0.15)',
        footerWhite: 'rgba(255, 255, 255, 0.15)',
        lightGray: '#F9F9F9'
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      fontSize: {
        '14px': '0.875rem', // 14px
        '16px': '1rem', // 16px
        '18px': '1.125rem', // 18px
        '20px': '1.25rem', // 20px
        '24px': '1.5rem', // 24px
        '32px': '2rem', // 32px
        '36px': '2.25rem', // 36px
      }
    }
  },
  plugins: [],
}