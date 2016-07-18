const n = (key, x, s) => typeof x === 'number' ? { [key]: s[x] } : null
const v = (key, x) => x ? { [key]: x } : null

const direction = (row, column) => {
  if (row) return 'row'
  if (column) return 'column'
  return null
}

export const getColor = (color, colors) => {
  if (color && colors[color]) {
    return colors[color]
  }
  return color
}

const getStyle = (props, defaults) => {

  const {
    scale,
    colors,
    borderRadius,
    invertedBorderColor
  } = defaults

  const {

    // colour
    backgroundColor, borderColor,

    // layout
    flex, wrap, column, row, align, justify,
    alignSelf, height, width,

    // margins
    m, mx, my, mt, mr, mb, ml,

    // paddings
    p, px, py, pt, pr, pb, pl,

    // radius
    rounded,

    // other
    ...other

  } = props || {}

  const styles = Object.assign({},

    // paddings
    n('padding', p, scale),
    n('paddingTop', pt, scale),
    n('paddingBottom', pb, scale),
    n('paddingVertical', py, scale),
    n('paddingLeft', pl, scale),
    n('paddingRight', pr, scale),
    n('paddingHorizontal', px, scale),

    // margins
    n('margin', m, scale),
    n('marginTop', mt, scale),
    n('marginBottom', mb, scale),
    n('marginVertical', my, scale),
    n('marginLeft', ml, scale),
    n('marginRight', mr, scale),
    n('marginHorizontal', mx, scale),

    // layout
    v('flex', flex),
    v('alignItems', align),
    v('justifyContent', justify),
    v('height', height),
    v('width', width),
    v('alignSelf', alignSelf),
    wrap ? { flexWrap: 'wrap' } : null,
    (row || column) ? { flexDirection: direction(row, column) } : null,
  )

  // radii
  if (rounded === true) styles.borderRadius = borderRadius
  else if (rounded === false) styles.borderRadius = 0
  else if (typeof rounded === 'number') styles.borderRadius = rounded

  // colors
  if (backgroundColor) {
    styles.backgroundColor = getColor(backgroundColor, colors)
  }

  if (props.inverted) {
    styles.borderColor = invertedBorderColor
  }

  if (borderColor) {
    styles.borderColor = getColor(borderColor, colors)
  }

  if (height) {
    console.log('HEIGHT', styles)
  }

  return {
    styles,
    other
  }

}

export default getStyle
