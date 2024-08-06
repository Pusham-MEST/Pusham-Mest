/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add other paths if necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    // Add other plugins if necessary
  ],
}
