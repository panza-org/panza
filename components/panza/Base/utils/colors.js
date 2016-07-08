export const getColor = (color, colors) => {
  if (color && colors[color]) {
    return colors[color]
  }

  return color
}

const colorStyle = (props, colors = {}) => {

  const {
    backgroundColor,
    borderColor
  } = props || {}

  const result = {}

  if (backgroundColor) {
    result.backgroundColor = getColor(backgroundColor, colors)
  }

  if (borderColor) {
    result.borderColor = getColor(borderColor, colors)
  }

  return result
}

export default colorStyle
