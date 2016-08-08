import React, { PropTypes } from 'react'
import { View } from 'react-native'
import colorTransform from 'color'
import { getBaseStyle, getColor } from '../utils'
import { themeProvider } from '../config'

/**
 * A general purpose component that converts props into styles
 * defined by our theme. It's heavily inspired by the Base
 * component provided by [rebass](https://github.com/jxnblk/rebass).
 */

export class Base extends React.Component {

  static propTypes = {

    /** Custom Component */
    Component: PropTypes.any,

    /** The base style will be supplanted by style props, or regular style properties. */
    baseStyle: PropTypes.any,

    /** Regular style attribute */
    style: PropTypes.any,

    /** Underlay color. Use 'darken' to automatically darken the backgroundColor. */
    underlayColor: PropTypes.string,

    /** Margin based on the configured scale */
    m: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Margin top based on the configured scale */
    mt: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Margin right based on the configured scale */
    mr: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Margin bottom based on the configured scale */
    mb: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Margin left based on the configured scale */
    ml: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Margin x-axis based on the configured scale */
    mx: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Margin y-asix based on the configured scale */
    my: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding based on the configured scale */
    p: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding top based on the configured scale */
    pt: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding right based on the configured scale */
    pr: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding bottom based on the configured scale */
    pb: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding left based on the configured scale */
    pl: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding x-axis based on the configured scale */
    px: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Padding y-axis based on the configured scale */
    py: PropTypes.oneOf([ 0, 1, 2, 3, 4 ]),

    /** Background color. */
    backgroundColor: PropTypes.string,

    /** Border radius */
    rounded: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number
    ]),

    /** Border color */
    borderColor: PropTypes.string,

    /** Flex property */
    flex: PropTypes.number,

    /** Flex-wrap property */
    wrap: PropTypes.bool,

    /** Set the flex-direction to column */
    column: PropTypes.bool,

    /** Set the flex-direction to row */
    row: PropTypes.bool,

    /** Align-items property */
    align: PropTypes.string,

    /** Justify-content property */
    justify: PropTypes.string,

    /** The height of the element */
    height: PropTypes.number,

    /** The width of the element */
    width: PropTypes.number,

    /** theme provided by a higher order component */
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
