import React, { PropTypes } from 'react'
import config from '../config'
import {
  Text
} from 'react-native'

const fontColor = (props, colors, context) => {

}

const size = (fontSize, fontSizes, lineHeightAddition) => {

  const style = {}

  // 0, 1, 2, 3, 4, 5, 6
  if (typeof fontSize === 'number') {
    style.fontSize = fontSizes[fontSize]
    style.lineHeight = fontSizes[fontSize] + lineHeightAddition
  }

  return style
}

const propsToStyle = (props, bold, colors) => {

  const style = {}

  if (props.bold) {
    style.fontWeight = bold
  }

  if (props.light) {
    style.color = colors.midgray
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

const BaseText = ({ style, fontSize, baseStyle, Component, ...props }, { panza }) => {

  const { fontSizes, bold, colors, lineHeightAddition } = {...config, ...panza}

  const sx = [
    baseStyle,
    size(fontSize, fontSizes, lineHeightAddition),
    propsToStyle(props, bold, colors),
    style
  ]

  const Element = Component || Text

  return <Element style={sx} {...props}>{props.children}</Element>

}

BaseText.displayName = 'BaseText'

BaseText.propTypes = {
  fontSize: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  color: PropTypes.string
}

BaseText.defaultProps = {
  color: 'default'
}

BaseText.contextTypes = {
  panza: PropTypes.object
}

export default BaseText
