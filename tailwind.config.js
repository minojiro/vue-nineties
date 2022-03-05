const theme = {
  colors: {
    'cyan': '#6ff',
    'light-gray': '#e0e0e0',
    'black': '#000',
    'white': '#fff',
    'blue': '#1fb6ff',
    'purple': '#7e5bef',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
    'transparent': 'transparent',
  },
  fontFamily: {
    sans: ["ＭＳ ゴシック", 'sans-serif'],
    serif: ["ＭＳ 明朝", 'serif'],
  },
  extend: {
    flex: {
      '999': '999'
    }
  },
  animation: {
    'marquee': 'marquee 5s ease-in infinite',
  },
  keyframes: {
    marquee: {
      'from': {
        transform: 'translateX(0)',
        paddingLeft: '100%'
      },
      'to': {
        transform: 'translateX(-100%)',
        paddingLeft: '0'
      },
    }
  }
}

module.exports = {
  content: [
    './src/components/**/*.vue',
  ],
  theme,
}
