/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'bottom': 'url("../images/bg-pattern-bottom.svg")',
        'top': 'url("../images/bg-pattern-top.svg")',
        'card': 'url("../images/bg-pattern-card.svg")',
        'person': 'url("../images/image-victor.jpg")',

        'mobile': 'url("assets/images/background-pattern-mobile.svg")',
      },
      colors: {
        primary: {
          'dark-cyan': 'hsl(185, 75%, 39%)',
          'very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
          'dark-grayish-blue': 'hsl(227, 10%, 46%)',
        },
        neutral: {
          'dark-gray': 'hsl(0, 0%, 59%)',
        },
      },
      fontFamily: {
        body: ['Kumbh Sans', 'sans-serif'],
      },
      fontSize: {
        'body': '18px',
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
      },
    }
  }
}