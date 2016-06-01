import React, { PropTypes } from 'react'
import config from '../config'
import {
  Text
} from 'react-native'

const fontColor = (props, colors, context) => {

}

const size = (fontSize, fontSizes) => {

  const style = {}

  // 0, 1, 2, 3, 4, 5, 6
  if (typeof fontSize === 'number') {
    style.fontSize = fontSizes[fontSize]
    style.lineHeight = fontSizes[fontSize] + 3
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


const BaseText = ({ style, fontSize, baseStyle, Component, ...props }, { panza }) => {

  const { fontSizes, bold, colors } = {...config, ...panza}

  const sx = [
    baseStyle,
    size(fontSize, fontSizes),
    propsToStyle(props, bold, colors),
    style
  ]

  const Element = Component || Text

  return <Element style={sx} {...props}>{props.children}</Element>

}

BaseText.proptypes = {
  fontSize: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6])
}

BaseText.contextTypes = {
  panza: PropTypes.object
}

export default BaseText
