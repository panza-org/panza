const getTextStyle = (props, defaults) => {

  const {
    fontSize, lineHeight, bold, thin, thick,
    light, inverted, color, textAlign, ...other
  } = props

  const {
    colors, fontSizes, lineHeights
  } = defaults

  const style = {}

  // font weights
  if (bold) {
    style.fontWeight = defaults.bold
  } else if (thin) {
    style.fontWeight = defaults.thin
  } else if (thick) {
    style.fontWeight = defaults.thick
  }

  // font colour
  if (light) {
    style.color = colors.midgray
  } else if (inverted) {
    style.color = colors.inverted
  } else if (color && colors[color]) {
    style.color = colors[color]
  } else if (typeof color === 'string') {
    style.color = color
  }

  // text alignment
  if (textAlign) {
    style.textAlign = textAlign
  }

  // font sizes
  if (typeof fontSize === 'number') {
    style.fontSize = fontSizes[fontSize]
    if (lineHeight) {
      // for now, we round it, because of a bug in react-native android
      style.lineHeight = Math.round((fontSizes[fontSize] * lineHeights[lineHeight]))
    }
  }

  return { textStyle: style, other }
}

export default getTextStyle
