/**** Tailwind Config - Paleta da Logo ****/ 
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        phone: '430px'
      },
      colors: {
        brand: {
          green: {
            50: '#f0f4e8',
            100: '#d9e5c4',
            200: '#b8d196',
            300: '#96bd68',
            400: '#7da947',
            500: '#667A2B', // verde principal da logo
            600: '#5a6b25',
            700: '#4d5a1e',
            800: '#404918',
            900: '#2d340f'
          },
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#FF8A00', // laranja da logo (sol)
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12'
          },
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280', // cinza das montanhas
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 8px 30px -8px rgba(0, 0, 0, 0.25)',
        'soft-lg': '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'green': '0 8px 30px -8px rgba(102, 122, 43, 0.3)',
        'green-lg': '0 20px 40px -12px rgba(102, 122, 43, 0.25)',
        'orange': '0 8px 30px -8px rgba(255, 138, 0, 0.3)',
        'orange-lg': '0 20px 40px -12px rgba(255, 138, 0, 0.25)'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-soft': 'bounceSoft 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem'
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};
