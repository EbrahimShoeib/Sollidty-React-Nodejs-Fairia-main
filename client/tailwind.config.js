/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#020617',
        secondary: '#0a042f',
        ter: '#fde047',
      },
    },
  },
  plugins: [],
}

