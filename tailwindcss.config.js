// @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"], // Match all HTML and JS files
    theme: {
      extend: {
        fontSize: {
          '9xl': '8rem', // Add custom large text size
          '10xl': '10rem',
        },
        colors: {
          red: {
            850: '#b20000', // Add a custom red shade
          },
        },
      },
    },
    plugins: [],
  };
