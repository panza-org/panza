import React, { PropTypes } from 'react'
import {
  TouchableOpacity
} from 'react-native'

/**
 * A touchable wrapper for <Icon />
 */

const TouchableIcon = (props) => {

  const {
    onPress,
    children,
    disabled,
    accessibilityLabel,
    style,
    ...other
  } = props

  const child = React.Children.only(children)

  return (
    <TouchableOpacity
      disabled={disabled}
      style={style}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      {...other}
    >
        {child}
    </TouchableOpacity>
  )

}

TouchableIcon.displayName = 'TouchableIcon'

TouchableIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
  accessibilityLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: React.PropTypes.node,
  style: React.PropTypes.object
}

export default TouchableIcon
