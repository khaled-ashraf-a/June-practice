/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        borderGray: '#0B0805'
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Cardo', 'serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      fontSize: {
        '15px': '0.9375rem', // 15px
        '16px': '1rem', // 16px
        '17px': '1.0625rem', // 17px
        '18px': '1.125rem', // 18px
        '20px': '1.25rem', // 20px
        '22px': '1.375rem', // 22px
        '23px': '1.4375rem', // 23px
        '50px': '3.125rem', // 50px
        '51px': '3.1875rem', // 51px
        '52px': '3.25rem', // 52px
        '53px': '3.3125rem', // 53px
        '54px': '3.375rem', // 54px
        '55px': '3.4375rem', // 55px
        '72px': '4.5rem', // 72px
    },
    lineHeight: {
      'extra-loose': '5'  // 80px
    },
    spacing: {
      large: '30rem',      // 480px
      'medium-large': '27.5rem'
    }
    
    }
  },
  plugins: [],
}