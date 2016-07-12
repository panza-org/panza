import React, { PropTypes } from 'react'
import {
  Text
} from 'react-native'
import margins from './utils/margins'
import paddings from './utils/paddings'
import { themeProvider } from '../config'

/** Props to text-size conversions **/
const size = (fontSize, fontSizes, lineHeight, lineHeights) => {

  const style = {}

  // 0, 1, 2, 3, 4, 5, 6
  if (typeof fontSize === 'number') {
    style.fontSize = fontSizes[fontSize]
    style.lineHeight = Math.round(fontSizes[fontSize] * lineHeights[lineHeight])
  }

  return style
}

/** Custom text styling conversions **/
const propsToStyle = (props, bold, thin, thick, colors) => {

  const style = {}

  if (props.bold) {
    style.fontWeight = bold
  } else if (props.thin) {
    style.fontWeight = thin
  } else if (props.thick) {
    style.fontWeight = thick
  }

  if (props.light) {
    style.color = colors.midgray
  } else if (props.inverted) {
    style.color = colors.inverted
  } else if (props.color && colors[props.color]) {
    style.color = colors[props.color]
  } else if (typeof props.color === 'string') {
    style.color = props.color
  }

  if (props.textAlign) {
    style.textAlign = props.textAlign
  }

  return style

}

/**
 * A general purpose text component which
 * converts props into styles defined in the configuration.
 */

const TextBase = ({
  style,
  fontSize,
  lineHeight,
  baseStyle,
  panza,
  Component,
  ...props
}) => {

  const {
    fontSizes,
    lineHeights,
    bold,
    thin,
    thick,
    colors,
    scale
  } = panza

  const sx = [
    baseStyle,
    margins(props, scale),
    paddings(props, scale),
    size(fontSize, fontSizes, lineHeight, lineHeights),
    propsToStyle(props, bold, thin, thick, colors),
    style
  ]

  const Element = Component || Text

  return <Element style={sx} {...props}>{props.children}</Element>

}

TextBase.displayName = 'TextBase'

TextBase.propTypes = {
  Component: PropTypes.any,
  style: PropTypes.any,
  baseStyle: PropTypes.any,

  /** children (typically text) **/
  children: PropTypes.node,

  /** text size **/
  fontSize: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),

  /** text lineheight **/
  lineHeight: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),

  /** text colour **/
  color: PropTypes.string,

  /** text alignment **/
  textAlign: PropTypes.string,

  /** bold font weight **/
  bold: PropTypes.bool,

  /** thin font weight **/
  thin: PropTypes.bool,

  /** a theme provided by a higher order component **/
  panza: PropTypes.object.isRequired,

  /** use the inverted color (by default, white) **/
  inverted: PropTypes.bool
}

TextBase.defaultProps = {
  color: 'default',
  lineHeight: 1
}


export default themeProvider(TextBase)
