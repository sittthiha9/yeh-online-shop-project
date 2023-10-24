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
      'text2': '#f2f1f3',
      'background2': '#0a090b',
      'primary2': '#646464',
      'secondary2': '#262626',
      'accent2': '#7c9182',
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
