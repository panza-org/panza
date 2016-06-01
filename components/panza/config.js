// Basically copied from the excellent Rebass library
// https://github.com/jxnblk/rebass/blob/master/src/config.js

import {
  Platform
} from 'react-native'


const baseColors = {
  blue: '#08e',
  black: '#111',
  white: '#fff',
  gray: '#fafafa',
  midgray: '#8F8E94',
  red: '#f52',
  orange: '#f70',
  green: '#1c7'
}

const colors = {
  ...baseColors,
  primary: baseColors.blue,
  secondary: baseColors.midgray,
  default: baseColors.black,
  info: baseColors.blue,
  success: baseColors.green,
  warning: baseColors.orange,
  error: baseColors.red
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

const scale = [
  0,
  8,
  16,
  32,
  64
]

const inverted = colors.white

const bold = '600'
const borderColor = 'rgba(0, 0, 0, 0.25)'
const borderRadius = 2

const config = {
  fontSizes,
  borderRadius,
  borderColor,
  colors,
  inverted,
  bold,
  scale
}

export default config
