import React, { PropTypes } from 'react'
import { TextBase } from '../Base'
import Icon from 'react-native-vector-icons/Ionicons'

/**
 * Our base icon component that all other icons
 * compose. It uses ionicons, as provided by
 * react-native-vector-icons
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

BaseIcon.displayName = 'BaseIcon'

BaseIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number
}

BaseIcon.defaultProps = {
  size: 35
}

export default BaseIcon
