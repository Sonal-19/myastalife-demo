// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./navbar.html",
    "./sidebar.html",
    "./content.html",
    "./dashboard.html",
    // Add any other files where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  // ADD THIS SAFELIST SECTION
  safelist: [
    'md:group-[.md\\:w-20]:hidden',
    'md:group-[.md\\:w-20]:mr-0',
  ],
};