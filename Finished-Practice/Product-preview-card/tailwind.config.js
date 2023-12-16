/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          'dark-cyan': 'hsl(158, 36%, 37%)',
          cream: 'hsl(30, 38%, 92%)',
        },
        neutral: {
          'very-dark-blue': 'hsl(212, 21%, 14%)',
          'dark-grayish-blue': 'hsl(228, 12%, 48%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
      width: {
        600: '37.5rem'
      },
      fontSize: {
        'body-copy': '14px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em'
      },
      fontWeight: {
        500: '500',
        700: '700',
      },

    }
  }
}