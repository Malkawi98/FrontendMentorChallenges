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
          'light-red': 'hsla(0, 100%, 67%, .2)',
          'orangey-yellow': 'hsla(39, 100%, 56%, .2)',
          'green-teal': 'hsla(166, 100%, 37%, .2)',
          'cobalt-blue': 'hsla(234, 85%, 45%, .2)',
        },
        gradients: {
          'light-slate-blue-bg': 'hsl(252, 100%, 67%)',
          'light-royal-blue-bg': 'hsl(241, 81%, 54%)',
          'violet-blue-circle': 'hsla(256, 72%, 46%, 1)',
          'persian-blue-circle': 'hsla(241, 72%, 46%, 0)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          'pale-blue': 'hsl(221, 100%, 96%)',
          'light-lavender': 'hsl(241, 100%, 89%)',
          'dark-gray-blue': 'hsl(224, 30%, 27%)',
        },

      },
      fontFamily: {
        body: ['Hanken Grotesk', 'sans-serif'],
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