import React, {PropTypes} from 'react'
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
    style,
    ...other
  } = props

  const child = React.Children.only(children)

  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}>
        {child}
    </TouchableOpacity>
  )

}

TouchableIcon.displayName = 'TouchableIcon'

TouchableIcon.propTypes = {
  onPress: PropTypes.func.isRequired
}

export default TouchableIcon
