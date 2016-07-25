import React, { PropTypes } from 'react'
import { TextBase } from '../Base'
import Icon from 'react-native-vector-icons/Ionicons'

/**
 * Our base icon component that all other icons
 * compose. It uses Ionicons 3, as provided by
 * react-native-vector-icons on Android and iOS.
 * To use this on the web, you must include a link
 * tag to the Ionicons 3 stylesheet.
 *
 * @Platform ios, android, web
 * @Composes TextBase
 */

const BaseIcon = (props) => {
  const {
    name,
    size,
    ...other
  } = props

  return (
    <TextBase
      name={name}
      size={size}
      Component={Icon}
      {...other}
    />
  )
}

BaseIcon.displayName = 'Icon'

BaseIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
}

BaseIcon.defaultProps = {
  size: 35
}

export default BaseIcon
