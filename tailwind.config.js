/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#C4171F',
        'blue': '#2A3561',
      },
    },
    keyframes: {
      "slideUpPauseDown": {
        '0%': { transform: 'translateY(100%)' },
        '25%': { transform: 'translateY(0px)' },
        '75%': { transform: 'translateY(0px)' },
        '100%': { transform: 'translateY(100%)' },
      }
    },
    animation: {
      slideUpPauseDown: 'slideUpPauseDown var(--animation-duration, 2s) infinite',
    }
  },
  plugins: [],
}

