import React, { PropTypes } from 'react'
import {
  Text
} from 'react-native'
import { getBaseStyle, getTextStyle } from '../utils'
import { themeProvider } from '../config'

/**
 * A general purpose text component which
 * converts props into styles defined in the configuration.
 * Unlike Base, TextBase supports special Text props.
 */

export const TextBase = ({
  style,
  baseStyle,
  panza,
  children,
  Component,
  ...props
}) => {

  const base = getBaseStyle(props, panza)
  const { textStyle, other } = getTextStyle(base.other, panza)

  const sx = [
    baseStyle,
    base.styles,
    textStyle,
    style
  ]

  const Element = Component || Text

  return <Element style={sx} {...other}>{children}</Element>

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

  /** thick font weight **/
  thick: PropTypes.bool,

  /** a theme provided by a higher order component **/
  panza: PropTypes.object,

  /** use the inverted color (by default, white) **/
  inverted: PropTypes.bool,

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
  height: PropTypes.number,

  /** set the width of the element **/
  width: PropTypes.number
}

TextBase.defaultProps = {
  color: 'default',
  lineHeight: 1
}

export default themeProvider(TextBase)
