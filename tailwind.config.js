/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-popup': "url('../public/images/loginbg.png')",
        'navbar-bg': "url('../public/images/navbar-bg.png')",
        'table': "url('../public/images/table.png')"

      },
      fontFamily: {
        'qalisso': ['Qalisso', 'sans-serif'],
        'gabriela': ['Gabriela', 'serif'],
      },

    }
  },
  plugins: [],
}
