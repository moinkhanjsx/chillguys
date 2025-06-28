/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-blue-500',
    'text-white',
    'shadow-neumorph',
    'shadow-neumorph-button',
    'bg-gray-100',
    'text-blue-500',
    'text-gray-800',
    'text-gray-600',
    'text-gray-700',
    'hover:text-blue-500',
    'hover:bg-blue-600',
    'hover:shadow-lg',
    'active:scale-95',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-opacity-50',
    'bg-gradient-to-r',
    'from-blue-50',
    'to-blue-100',
    'transition-colors',
    'duration-200',
    'ease-in-out'
  ]
}
