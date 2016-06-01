import React, { PropTypes } from 'react'
import {
  Platform
} from 'react-native'
import {
  NavIconContainer
} from './index'
import {
  TouchableIcon
} from '../Icons'

const defaultColor = Platform.select({
  ios: 'primary',
  android: 'default'
})

const defaultSize = Platform.select({
  ios: 35,
  android: 25
})

/**
 * A wrapper for <Icon /> that properly displays
 * it in a NavBar, and makes it touchable.
 */

const NavTouchableIcon = (props) => {
  const child = React.Children.only(props.children)
  const clone = React.cloneElement(child, {
    color: child.props.color || defaultColor,
    size: typeof child.props.size === 'number'
      ? child.props.size
      : defaultSize
  })

  return (
    <NavIconContainer>
      <TouchableIcon onPress={props.onPress}>
        {clone}
      </TouchableIcon>
    </NavIconContainer>
  )
}

NavTouchableIcon.displayName = 'NavTouchableIcon'

export default NavTouchableIcon
