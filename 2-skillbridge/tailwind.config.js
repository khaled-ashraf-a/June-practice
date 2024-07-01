/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'big': '40.5rem',
        '172px':  '10.75rem',
        '266px': '16.625rem',
        '50px': '3.125rem'
      },
      colors: {
        bodyBackground: '#F7F7F8',
        orangeColor: '#FF9500',
        blackColor: '#262626',
        lightOrange: '#FFF4E5',
        cardWhite: '#FCFCFD',
        borderWhite: '#F1F1F3',
        darkText: '#59595A',    // paragraphs
        gray50: '#4C4C4D',
        gray100: '#333333',
        freePlan: '#FFF9F0'
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'sans-serif']
      },
      fontSize: {
        '14px': '0.875rem', // 14px
        '16px': '1rem',     // 16px
        '18px': '1.125rem', // 18px
        '20px': '1.25rem',  // 20px
        '24px': '1.5rem',   // 24px
        '26px': '1.625rem', // 26px
        '28px': '1.75rem',  // 28px
        '36px': '2.25rem',  // 36px
        '38px': '2.375rem', // 38px
        '50px': '3.125rem', // 50px
        '60px': '3.75rem',     // 60px
        '160px': '10rem'    // 160px

        /* 15px - 3×
22px - 2×
28px - 6×
38px - 6×
48px - 6×
50px - 6×
60px - 8×
80px - 8×
36px - 1× */
      }
    }
  },
  plugins: [],
}