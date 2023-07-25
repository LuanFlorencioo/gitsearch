/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          '100': '#C2255C',
          '200': '#D6336C',
        },
        grey: {
          '100': '#191C1F',
          '200': '#212529',
          '300': '#33363A',
          '400': '#373B3E',
          '500': '#A6A8A9',
          '600': '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
