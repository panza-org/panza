// Overridable base theme.
// to override this, do the following:

// import { customizeTheme } from 'panza'
//
// customizeTheme({
//   colors: {
//     primary: 'black'
//   },
//   fontSizes: [
//     48,
//     32,
//     24,
//     20,
//     18,
//     16,
//     14
//   ]
// })


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

export default {

  // Font sizes scale
  fontSizes: [
    48,
    32,
    24,
    20,
    17,
    15,
    12
  ],

  // Line-height scale
  lineHeights: [
    0.7,
    1,
    1.3,
    1.5,
    2,
    2.5,
    3
  ],

  // Padding / Margin scale
  scale: [
    0,
    8,
    16,
    32,
    64
  ],

  colors: {
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
    light: baseColors.midgray,
    inverted: baseColors.white
  },

  fontWeights: {
    bold: '600',
    thick: '800',
    thin: '300'
  },

  inverted: baseColors.white,
  borderColor: 'rgba(0, 0, 0, 0.15)',
  invertedBorderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 2
}
