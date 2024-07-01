/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purpleC: '#A259FF',
        grayBg: '#2B2B2B',
        cardGray: '#3B3B3B',
        smallTextGray: '#858584',
        footerGray: '#CCCCCC'
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace']
      },
      fontSize: {
        '12px': '0.75rem', // 12px
        '16px': '1rem', // 16px
        '22px': '1.375rem', // 22px
        '24px': '1.5rem', // 24px
        '28px': '1.75rem', // 28px
        '38px': '2.375rem', // 38px
        '51px': '3.1875rem', // 51px
        '67px': '4.1875rem', // 67px
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%)',
    },
    
    },
    variants: {
      extend: {
        backdropFilter: ['responsive'], // enable responsive variants
      },
    }
  },
  plugins: [],
}