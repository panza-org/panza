import React, { PropTypes } from 'react'
import config from '../config'
import { View } from 'react-native'
import colorTransform from 'color'

const n = (key, x, s) => typeof x === 'number' ? { [key]: s[x] } : null

const margins = (props, scale) => {

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

const paddings = (props, scale) => {
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

export const colorStyle = (props, colors, context) => {
  colors = colors || {}
  const {
    backgroundColor,
    color,
    inverted
  } = props || {}

  const result = {}


  if (color && colors[color]) {
    result.color = colors[color]
  } else if (typeof color === 'string') {
    result.color = color
  }


  if (backgroundColor && colors[backgroundColor]) {
    result.backgroundColor = colors[backgroundColor]
  } else if (typeof backgroundColor === 'string') {
    result.backgroundColor = backgroundColor
  }

  if (color && colors[color]) {
    const invertedColor = context && context.inverted
    if (inverted) {
      result.color = invertedColor || colors.white
      result.backgroundColor = colors[color]
    } else {
      result.color = colors[color]
    }
  }

  return result
}

/**
 * A general purpose component that converts our props into styles
 * defined by the user. Heavily inspired (and somewhat directly copied)
 * by rebass.
 */

const Base = ({
  style,
  Component,
  baseStyle = {},
  wrap,
  underlayColor,
  flex,
  row,
  column,
  auto,
  align,
  justify,
  ...props
}, { panza }) => {

  const { scale, colors } = {...config, ...panza}

  const sx = [
    baseStyle,
    style,
    margins(props, scale),
    paddings(props, scale),
    colorStyle(props, colors, panza),
    flex ? { flex } : null,
    wrap ? { flexWrap: 'wrap' } : null,
    column ? { flexDirection: 'column' } : null,
    row ? { flexDirection: 'row' }: null,
    align ? { alignItems: align } : null,
    justify ? { justifyContent: justify } : null,
  ]


  const underlay = (
    underlayColor === 'darken' &&
    props.backgroundColor &&
    colors[props.backgroundColor]
  )
    ? colorTransform(colors[props.backgroundColor]).darken(0.1).hexString()
    : null


  const Element = Component || View

  return <Element {...props} underlayColor={underlay} style={sx}  />

}


Base.displayName = 'Base'

Base.propTypes = {

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
}

Base.contextTypes = {
  panza: PropTypes.object
}

export default Base
