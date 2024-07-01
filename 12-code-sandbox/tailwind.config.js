/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkGray: '#999999',
        limeGreen: '#EAFF96',
        lightBlack: '#151515',
        borderGray: '#343434'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        
      },
      fontSize: {
        '10px': '0.625rem', // 10px
        '12px': '0.75rem', // 12px
        '13px': '0.8125rem', // 13px
        '15px': '0.9375rem', // 15px
        '16px': '1rem', // 16px
        '17px': '1.0625rem', // 17px
        '18px': '1.125rem', // 18px
        '19px': '1.1875rem', // 19px
        '24px': '1.5rem', // 24px
        '30px': '1.875rem', // 30px
        '32px': '2rem', // 32px
        '35px': '2.1875rem', // 35px
        '47px': '2.9375rem', // 47px
        '48px': '3rem', // 48px
        '64px': '4rem', // 64px
        '104px': '6.5rem', // 104px
      }
    }
  },
  plugins: [],
}