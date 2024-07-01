/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blackC: '#1E1D1B',
        weird: '#BBAFAA',
        orangeC: '#F37138',
        
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '9px': '0.5625rem', // 9px
        '10px': '0.625rem', // 10px
        '12px': '0.75rem', // 12px
        '14px': '0.875rem', // 14px
        '15px': '0.9375rem', // 15px
        '20px': '1.25rem', // 20px
        '23px': '1.4375rem', // 23px
        '24px': '1.5rem', // 24px
        '25px': '1.5625rem', // 25px
        '55px': '3.4375rem', // 55px
        '57px': '3.5625rem', // 57px
        '58px': '3.625rem', // 58px
        '59px': '3.6875rem', // 59px
        '121px': '7.5625rem', // 121px
    }
    
    }
  },
  plugins: [],
}