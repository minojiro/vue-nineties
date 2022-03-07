const theme = {
  colors: {
    'sys-gray': {
      200: '#DBDBDB',
      500: '#BFBFBF',
      800: '#808080',
    },
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
    backgroundImage: {
      rainbow: "linear-gradient(to right, red, orange, yellow, green, aqua, blue, purple)",
    },
    flex: {
      '999': '999'
    }
  },
  animation: {
    'blink': 'blink 2s linear infinite',
    'marquee': 'marquee 5s ease-in infinite',
  },
  keyframes: {
    blink: {
      '0%': {
        visibility: 'hidden',
      },
      '50%': {
        visibility: 'hidden',
      },
      '100%': {
        visibility: 'visible',
      },
    },
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
