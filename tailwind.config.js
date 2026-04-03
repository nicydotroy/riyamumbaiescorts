/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#E8195B',
          light: '#FF6B90',
          dark: '#B5003E',
        },
        dark: {
          DEFAULT: '#090909',
          surface: '#111118',
          card: '#1C1C28',
          border: '#2A2A38',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232,25,91,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(232,25,91,0)' },
        },
      },
    },
  },
  plugins: [],
}


