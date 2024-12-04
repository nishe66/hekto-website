/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Josefin': ["Josefin Sans", "sans-serif"],
        'Lato': ["Lato", "sans-serif"]
      },
      backgroundImage: {
        'newsletter': "url('/src/assets/newslater.png')", 
      },
    },
  },
  plugins: [],
}
