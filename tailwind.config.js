/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        fade: 'fadeIn .2s ease-in-out'
      },
      aspectRatio: {
        '9/16': '9/16'
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0.8 },
          '100%': { opacity: 1 }
        }
      })
    }
  },
  plugins: []
};
