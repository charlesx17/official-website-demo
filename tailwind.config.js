module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'black-film': "url('/src/components/assests/bgfilm.jpg')",
      },
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
