/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'my-color1': 'rgba(179, 139, 250, 1)',
        'my-color2': 'rgba(255, 121, 242, 1)',
        'my-color3': 'rgba(67, 230, 252, 1)',
        'my-color4': 'rgba(241, 149, 118, 1)',
        'my-color5': 'rgba(0, 71, 255, 1)',
        'my-color6': 'rgba(102, 145, 255, 1)',
      }
    },
  },
  plugins: [],

}

