/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          amber: '#F59E0B',
          'amber-glow': '#DC2626',
          cyan: '#38BDF8',
          'cyan-glow': '#0284C7',
        },
        dark: {
          900: '#050810',
          800: '#0A0F1E',
          700: '#0F1629',
          600: '#141D35',
          500: '#1A2545',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      },
      boxShadow: {
        'neon': '0 0 18px rgba(245, 158, 11, 0.25), 0 0 48px rgba(245, 158, 11, 0.08)',
        'neon-sm': '0 0 10px rgba(245, 158, 11, 0.18)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
