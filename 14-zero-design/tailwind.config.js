/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brightYellow: '#E2B013',
        cardGray: 'rgba(0, 0, 0, 0.04)',
        footerGray: '#333333'
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      fontSize: {
          '10px': '0.625rem',
          '11px': '0.6875rem',
          '14px': '0.875rem',
          '15px': '0.9375rem',
          '16px': '1rem',
          '18px': '1.125rem',
          '22px': '1.375rem',
          '24px': '1.5rem',
          '26px': '1.625rem',
          '36px': '2.25rem',
          '50px': '3.125rem',
          '96px': '6rem'

        
      }
    }
  },
  plugins: [],
}