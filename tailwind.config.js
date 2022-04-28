
const plugin = require('tailwindcss/plugin')

module.exports = {
  

  content: ["./src/**/*.{html,js}",
  './pages/**/*.{js,ts,jsx,tsx}','./node_modules/tw-elements/dist/js/**/*.js',
  './components/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    screens: {
      'xs':'380px',
      'sm': '640px',
      'md': '868px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary':'#e635a2da',
        'primary_light': '#f3dca1',
        'secondary':  '#FBB710',
        'textcolor': '#4B5563',
        'header_color': '#030303',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
    }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('tw-elements/dist/plugin'),
  ],
}