import React, { PropTypes } from 'react'
import config from '../config'
import { View } from 'react-native'
import colorTransform from 'color'
import colorStyle, { getColor } from './utils/colors'
import margins from './utils/margins'
import paddings from './utils/paddings'
import radii from './utils/radii'


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
