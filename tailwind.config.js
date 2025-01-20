/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'text': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'text-lg': '0 4px 8px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}

