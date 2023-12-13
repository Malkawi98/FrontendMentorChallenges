/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('./images/pattern-background-desktop.svg')",
        'mobile': "url('/images/pattern-background-mobile.svg')",
      },
      zIndex: {
        'n': '-1',
      },
      colors: {
        primary: {
          paleBlue: 'hsl(225, 100%, 94%)',
          brightBlue: 'hsl(245, 75%, 52%)',
          textGrey: '#8a8a8a'
        },
        neutral: {
          veryPaleBlue: 'hsl(225, 100%, 98%)',
          desaturatedBlue: 'hsl(224, 23%, 55%)',
          darkBlue: 'hsl(223, 47%, 23%)',
        },
      },
      fontFamily: {
        body: ['Red Hat Display', 'sans-serif'],
      },
      fontSize: {
        '16px': '16px',
      },
      fontWeight: {
        500: '500',
        700: '700',
        900: '900',
      },
    }
  }
}