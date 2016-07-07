import React from 'react'
import { TextBase } from '../Base'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  Platform
} from 'react-native'

/**
 * Our base icon component that all other icons
 * compose. It uses ionicons, as provided by
 * react-native-vector-icons
 */

const BaseIcon = (props) => {
  const {
    name,
    iconSize,
    ...other
  } = props

  console.log('ICON SIZE', iconSize)
  return (
    <TextBase
      name={name}
      iconSize={iconSize}
      Component={Icon}
      {...other}
    />
  )
}

BaseIcon.displayName = 'BaseIcon'

BaseIcon.defaultProps = {
  iconSize: 35
}

export default BaseIcon
