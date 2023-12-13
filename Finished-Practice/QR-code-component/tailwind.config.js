/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'qr': 'url("./images/image-qr-code.png")',
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightGray: 'hsl(212, 45%, 89%)',
        grayishBlue: 'hsl(220, 15%, 55%)',
        darkBlue: 'hsl(218, 44%, 22%)',
        'lightBlue': '#d5e1ef',
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