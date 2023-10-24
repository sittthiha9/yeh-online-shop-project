/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'text': '#0e0806',
      'background': '#f1e3df',
      'primary': '#562f24',
      'secondary': '#e7cdc5',
      'accent': '#9e5642',
      'text2': '#f1ede4',
      'background2': '#1b160e',
      'primary2': '#b79f71',
      'secondary2': '#3B311D',
      'accent2': '#aa8c55',
      'white': '#fff',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
