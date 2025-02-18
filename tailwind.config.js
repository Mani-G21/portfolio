/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'selector',
    theme: {
      extend: {
        colors: { 
          primary: {
            100: '#D0A9F9',
            
          }
        },
        fontFamily: {
          'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }
  
  