/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        erg: {
          orange: '#FF8A00',
          yellow: '#FFCC00',
          blue: '#1E88E5',
          green: '#2E7D32',
          red: '#D32F2F',
          purple: '#7B1FA2',
          dark: '#121212',
          surface: '#1E1E1E',
          card: '#242424',
          border: '#333333'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Roboto Mono', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
