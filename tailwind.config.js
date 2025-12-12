/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
      secondary: ['Inter', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
    },
    extend: {
      colors: {
        primary: '#000000', // Pure black for premium feel
        secondary: '#0A0A0A', // Slightly lighter for cards/surfaces
        accent: '#8b5cf6', // Vivid Violet
        'accent-hover': '#7c3aed',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.3)',
        'glow-hover': '0 0 30px rgba(255, 255, 255, 0.5)',
        'glow-sm': '0 0 15px rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'site': "url('./assets/site-bg.jpg')", // Keep if needed, or remove
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 50%)",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

