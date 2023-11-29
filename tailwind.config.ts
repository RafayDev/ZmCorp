/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'nav-color': '#e1e2e3',
        'expertise':'#f6f6f6',
        'servicers':'#41b3b4',
        'work':'#F6F6F6',
        'contact-us':'#50545e',
      },
      textColor:{
        'li-color': '#17c3ab',
        'work-grey':'#707070',
        'work-green':'#f6f6f6',
        'servicers':'#41b3b4',
      },
      maxHeight:{
        'max-video-h': '700px',
      },
    },
  },
  plugins: [],
}
