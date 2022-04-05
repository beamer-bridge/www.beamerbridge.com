module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      black: '#001B23',
      'dark-teal': '#005E63',
      'sea-green': '#05B0AB',
      mint: '#F7FFFC',
      peach: '#F7937C',
      fire: '#F7602B',
      rosa: '#FFEDEB',
      'neon-green': '#6DF451',
      'neon-yellow': '#BDFF3E',

      'grey-dark': '#001423',
    },
    screens: {
      'md': '500px',
      'lg': '1024px',
      '2xl': '1920px',
    },
    extend: {
      backgroundImage: {
        'radial-teal': 'radial-gradient(50% 50% at 50% 50%, #00404B 24.74%, rgba(0, 27, 35, 0) 100%)',
        'radial-grey-teal': 'linear-gradient(180deg, #001423 0%, #00404B 100%)',
        'radial-teal-sea-green': 'linear-gradient(180deg, #00404B 0%, #027175 53.65%, #05B0AB 100%)',
        'radial-grey-teal-sea': 'linear-gradient(180deg, #001423 0%, #001423 10%, #00404B 70%, #05B0AB 100%)',
        'radial-sea-mint': 'linear-gradient(180deg, #05B0AB 0%, #F7FFFC 100%)',
        'hero-beams': 'url("./assets/hero_beams.png"), linear-gradient(180deg, #001423 0%, #001423 10%, #00404B 70%, #05B0AB 100%)',
      },
      lineHeight: {
        '4xl': '3rem',
        '6xl': '6rem',
        '8xl': '8rem',
        '9xl': '10rem',
      },
      borderRadius: {
        '4xl': '3rem',
      },
      spacing: {
        '101': '25.25rem',
        '120': '30rem',
        '127': '31.75rem',
      },
    },
    dropShadow: {
      'petite': '0 0 5px rgb(0 0 0 / 0.4)',
    }
  },
  plugins: [],
}
