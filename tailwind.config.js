/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Orbitron', 'sans-serif'],
      secondary: ['Rajdhani', 'sans-serif'],
      tertiary: ['Aldrich', 'sans-serif'],
    },

    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },

    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/my photo.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
}

