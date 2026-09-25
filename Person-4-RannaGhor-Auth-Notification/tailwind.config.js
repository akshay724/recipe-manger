/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sindoor: {
          50: '#fdf2f2',
          100: '#fde4e4',
          200: '#fccdcd',
          300: '#f9a7a7',
          400: '#f27373',
          500: '#e54545',
          600: '#cd2d2d',
          700: '#ab2222',
          800: '#8e1f1f',
          900: '#752020',
          950: '#400c0c',
        },
        terracotta: {
          50: '#fbf5f2',
          100: '#f6eae3',
          200: '#edd6c9',
          300: '#dfb9a5',
          400: '#ce947c',
          500: '#c1755a',
          600: '#af5e44',
          700: '#924a35',
          800: '#773e2e',
          900: '#63372a',
        },
        mustard: {
          50: '#fefbe8',
          100: '#fdf7c3',
          200: '#fbee8c',
          300: '#f8dd4c',
          400: '#f3c71c',
          500: '#e5a93b',
          600: '#c8830f',
          700: '#9f5f10',
          800: '#824b14',
          900: '#6e3e15',
        },
        leaf: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#2d6a4f',
          800: '#1b4332',
          900: '#143426',
        },
        cream: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f4ede0',
          300: '#ede0cb',
          400: '#e2cdb0',
          500: '#d3b491',
        },
        rice: '#FDFCF7',
        charcoal: '#1A1817'
      },
      fontFamily: {
        serif: ['"Rozha One"', '"Cinzel"', 'serif'],
        bengali: ['"Noto Serif Bengali"', '"Hind Siliguri"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 8px 30px -4px rgba(175, 94, 68, 0.08), 0 4px 12px -2px rgba(142, 31, 31, 0.04)',
        'warm-hover': '0 20px 40px -10px rgba(175, 94, 68, 0.16), 0 8px 16px -4px rgba(142, 31, 31, 0.08)',
        'alpana': '0 0 25px 2px rgba(229, 169, 59, 0.25)',
      }
    },
  },
  plugins: [],
}
