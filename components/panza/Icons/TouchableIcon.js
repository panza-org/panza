import React, {PropTypes} from 'react'
import {
  TouchableOpacity
} from 'react-native'

// todo: accessibility
const TouchableIcon = (props) => {

  const {
    onPress,
    name,
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

TouchableIcon.propTypes = {
  onPress: PropTypes.func.isRequired
}

export default TouchableIcon
