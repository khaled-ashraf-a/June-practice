/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hero: '#DCE5E2',
        offWhite: '#F9F9F9',
        grayText: '#4B4B4B',
        cardGray: '#F8F9FA'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        readex: ['Readex Pro', 'sans-serif']
      },
      fontSize: {
        '13px': '0.8125rem', // 13px
        '14px': '0.875rem', // 14px
        '15px': '0.9375rem', // 15px
        '16px': '1rem', // 16px
        '17px': '1.0625rem', // 17px
        '18px': '1.125rem', // 18px
        '22px': '1.375rem', // 22px
        '24px': '1.5rem', // 24px
        '28px': '1.75rem', // 28px
        '32px': '2rem', // 32px
        '42px': '2.625rem', // 42px
        '58px': '3.625rem' // 58px
      }
    }
  },
  plugins: [],
}