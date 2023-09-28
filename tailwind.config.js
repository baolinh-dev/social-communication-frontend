/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: { 
      colors: {
        primary: '#212f48', // Màu chính
        secondary: '#2B3B58', // Màu phụ
      },
    }
  },
  plugins: []
}