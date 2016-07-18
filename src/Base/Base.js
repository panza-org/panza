import React, { PropTypes } from 'react'
import { View } from 'react-native'
import colorTransform from 'color'
import getBaseStyle, { getColor } from './utils/getBaseStyle'
import { themeProvider } from '../config'

/**
 * A general purpose component that converts our props into styles
 * defined by the user. Heavily inspired by (and somewhat directly copied)
 * from rebass.
 */

export class Base extends React.Component {

  static propTypes = {

    /** Custom Component **/
    Component: PropTypes.any,

    /** Regular style attribute **/
    style: PropTypes.any,

    /** Base style **/
    baseStyle: PropTypes.any,

    /** Underlay color. Use 'darken' to automatically darken the backgroundColor. **/
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
    height: PropTypes.number,

    /** set the width of the element **/
    width: PropTypes.number,

    /** theme provided by a higher order component **/
    panza: PropTypes.object
  }

  static displayName = 'Base'

  render() {

    const {
      style,
      Component,
      baseStyle,
      underlayColor,
      panza,
      ...props
    } = this.props

    const { styles, other } = getBaseStyle(props, panza)
    const { colors } = panza

    const sx = [
      baseStyle,
      styles,
      style
    ]

    // determine underlay colour
    const underlay = (underlayColor && (underlayColor === 'darken') && props.backgroundColor)
      ? colorTransform(getColor(props.backgroundColor, colors))
        .darken(0.1)
        .hexString()
      : underlayColor

    const Element = Component || View

    return <Element {...other} underlayColor={underlay} style={sx} />

  }

}

export default themeProvider(Base)
