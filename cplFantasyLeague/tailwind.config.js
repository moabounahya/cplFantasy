/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#03dbfc',
        secondary: '#027a9d',
        accent: '#f0f0f0',
        
      }
    },
  },
  plugins: [],
}

