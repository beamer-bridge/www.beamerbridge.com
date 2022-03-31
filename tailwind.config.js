module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      black: '#001B23',
      'dark-teal': '#005E63',
      'sea-green': '#05B0AB',
      mint: '#F7FFFC',
      peach: '#F7937C',
      rosa: '#FFEDEB',
      'neon-green': '#6DF451',
      'neon-yellow': '#BDFF3E',

      'grey-dark': '#001423',
    },
    extend: {
      backgroundImage: {
        'radial-teal': 'radial-gradient(50% 50% at 50% 50%, #00404B 24.74%, rgba(0, 27, 35, 0) 100%)',
        'radial-grey-teal': 'linear-gradient(180deg, #001423 0%, #00404B 100%)',
        'radial-teal-sea-green': 'linear-gradient(180deg, #00404B 0%, #027175 53.65%, #05B0AB 100%)',
      },
      lineHeight: {
        '9xl': '10rem',
      }
    },
  },
  plugins: [],
}
