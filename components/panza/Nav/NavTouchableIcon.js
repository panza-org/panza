import React, { PropTypes } from 'react'
import {
  NavIconContainer
} from './index'
import {
  TouchableIcon
} from '../Icons'


const NavTouchableIcon = (props) => {
  const child = React.Children.only(props.children)
  const clone = React.cloneElement(child, {
    color: child.props.color || 'primary',
    size: typeof child.props.size === 'number'
      ? child.props.size
      : 35
  })

  return (
    <NavIconContainer>
      <TouchableIcon onPress={props.onPress}>
        {clone}
      </TouchableIcon>
    </NavIconContainer>
  )
}


export default NavTouchableIcon
