/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter Tight', 'sans-serif'],
      },
      colors: {
        obsidian: '#050505',
        magma: '#FF4500',
      }
    },
  },
  plugins: [],
}