import React, { PropTypes } from 'react'
import config from '../config'
import { View } from 'react-native'
import colorTransform from 'color'

/**
* The below functions are taken from rebass
* https://github.com/jxnblk/rebass/tree/master/src/util
**/

const n = (key, x, s) => typeof x === 'number' ? { [key]: s[x] } : null

export const margins = (props, scale) => {

  const s = scale || []
  const {
    m, mx, my, mt, mr, mb, ml
  } = props || {}

  const result = Object.assign({},
    n('margin', m, s),
    n('marginTop', mt, s),
    n('marginBottom', mb, s),
    n('marginTop', my, s),
    n('marginBottom', my, s),
    n('marginLeft', ml, s),
    n('marginRight', mr, s),
    n('marginLeft', mx, s),
    n('marginRight', mx, s)
  )

  return result
}

export const paddings = (props, scale) => {
  const s = scale || []
  const {
    p, px, py, pt, pr, pb, pl
  } = props || {}

  const result = Object.assign({},
    n('padding', p, s),
    n('paddingTop', pt, s),
    n('paddingBottom', pb, s),
    n('paddingTop', py, s),
    n('paddingBottom', py, s),
    n('paddingLeft', pl, s),
    n('paddingRight', pr, s),
    n('paddingLeft', px, s),
    n('paddingRight', px, s)
  )

  return result
}

const getColor = (color, colors) => {
  if (color && colors[color]) {
    return colors[color]
  }

  return color
}

export function radii (props, r = 2) {
  const {
    rounded
  } = props || {}

  let borderRadius

  if (rounded === true) {
    borderRadius = r
  } else if (rounded === false) {
    borderRadius = 0
  } else if (typeof rounded === 'number') {
    borderRadius = rounded
  }

  if (typeof borderRadius === 'undefined') {
    return {}
  }

  return { borderRadius }
}

export const colorStyle = (props, colors = {}) => {

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

/**
 * A general purpose component that converts our props into styles
 * defined by the user. Heavily inspired by (and somewhat directly copied)
 * from rebass.
 */

class Base extends React.Component {

  static propTypes = {

    /** Custom Component **/
    Component: PropTypes.any,

    /** Regular style attribute **/
    style: PropTypes.any,

    /** Base style **/
    baseStyle: PropTypes.any,

    /** Underlay color. Use 'darken' to automatically darken the backgroundColor **/
    underlayColor: PropTypes.string,

    /** Margin **/
    m: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Margin top **/
    mt: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Margin right **/
    mr: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Margin bottom **/
    mb: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Margin left **/
    ml: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Margin x-axis **/
    mx: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Margin y-asix **/
    my: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding **/
    p: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding top **/
    pt: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding right **/
    pr: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding bottom **/
    pb: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding left **/
    pl: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding x-axis **/
    px: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding y-axis **/
    py: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Background color **/
    backgroundColor: PropTypes.string,

    /** Border radius **/
    rounded: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number
    ]),

    /** Border color **/
    borderColor: PropTypes.string,

    /** flex property **/
    flex: PropTypes.number,

    /** flex-wrap property **/
    wrap: PropTypes.bool,

    /** set flex-direction to column **/
    column: PropTypes.bool,

    /** set flex-direction to row **/
    row: PropTypes.bool,

    /** set align-items property **/
    align: PropTypes.string,

    /** set justify-content property **/
    justify: PropTypes.string,

    /** set the height of the element **/
    height: PropTypes.string
  }

  static displayName = 'Base'

  static contextTypes = {
    panza: PropTypes.object
  }

  render() {

    const {
      style,
      Component,
      baseStyle = {},
      wrap,
      underlayColor,
      flex,
      row,
      column,
      align,
      height,
      justify,
      ...props
    } = this.props

    const {
      panza
    } = this.context

    const {
      scale,
      colors,
      borderRadius
    } = { ...config, ...panza }

    const sx = [
      baseStyle,
      style,
      margins(props, scale),
      paddings(props, scale),
      colorStyle(props, colors, panza),
      radii(props, borderRadius),
      flex ? { flex } : null,
      wrap ? { flexWrap: 'wrap' } : null,
      column ? { flexDirection: 'column' } : null,
      row ? { flexDirection: 'row' } : null,
      align ? { alignItems: align } : null,
      justify ? { justifyContent: justify } : null,
      height ? { height } : null
    ]

    const underlay = (underlayColor === 'darken' && props.backgroundColor)
      ? colorTransform(getColor(props.backgroundColor, colors))
        .darken(0.1)
        .hexString()
      : underlayColor

    const Element = Component || View

    return <Element {...props} underlayColor={underlay} style={sx} />

  }

}

export default Base
