// Basically copied from the excellent Rebass library
// https://github.com/jxnblk/rebass/blob/master/src/config.js

const baseColors = {
  blue: '#08e',
  black: '#111',
  white: '#fff',
  gray: '#fafafa',
  midgray: '#8F8E94',
  darkgray: '#1e1e1e',
  red: '#c30016',
  orange: '#f70',
  green: '#1c7'
}

const colors = {
  ...baseColors,
  primary: baseColors.blue,
  secondary: baseColors.darkgray,
  default: baseColors.black,
  info: baseColors.blue,
  success: baseColors.green,
  positive: baseColors.green,
  negative: baseColors.red,
  warning: baseColors.orange,
  error: baseColors.red,
  light: baseColors.midgray
}

const fontSizes = [
  48,
  32,
  24,
  20,
  17,
  15,
  12
]

const lineHeights = [
  0.7,
  1,
  1.2,
  1.5,
  2,
  2.5,
  3
]


const scale = [
  0,
  8,
  16,
  32,
  64
]

const inverted = colors.white

const bold = '600'
const thick = '800'
const thin = '300'
const borderColor = 'rgba(0, 0, 0, 0.25)'
const borderRadius = 2


const config = {
  fontSizes,
  lineHeights,
  borderRadius,
  borderColor,
  colors,
  inverted,
  thick,
  bold,
  thin,
  scale
}

export default config
