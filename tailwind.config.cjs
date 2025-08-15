/**** Tailwind Config ****/ 
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#667A2B',
          dark: '#333333',
          accent: '#FF8A00'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(0,0,0,0.25)'
      }
    }
  },
  plugins: []
};
