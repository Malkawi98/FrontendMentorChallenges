/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': 'url("../assets/images/background-pattern-desktop.svg")',
        'mobile': 'url("assets/images/background-pattern-mobile.svg")',
        'icon-minus': 'url("assets/images/icon-minus.svg")',
        'icon-plus': 'url("assets/images/icon-plus.svg")',
        'icon-star': 'url("assets/images/icon-star.svg")',
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightPink: 'hsl(275, 100%, 97%)',
        grayishPurple: 'hsl(292, 16%, 49%)',
        darkPurple: 'hsl(292, 42%, 14%)',
      },
      fontFamily: {
        body: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'body': '15px',
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
      },
    }
  }
}