import React, { PropTypes } from 'react'
import { Text } from '../index'
import { TextInput, Platform } from 'react-native'

/**
 * A basic input
 * @composes Text
 */

class Input extends React.Component {

  focus() {
    this.refs.input.focus()
  }

  render() {
    const props = this.props
    return (
      <Text
        ref='input'
        baseStyle={{
          ...Platform.select({
            web: {
              outline: 'none',
              borderColor: 'transparent',
              borderWidth: 0
            }
          })
        }}
        underlineColorAndroid='transparent'
        {...props}
        Component={TextInput}
      />
    )
  }

}


Input.propTypes = {
  tiny: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  giant: PropTypes.bool,
  inverted: PropTypes.bool,
  placeholderTextColor: PropTypes.string
}

Input.defaultProps = {
  placeholderTextColor: '#888'
}

Input.displayName = 'Input'

export default Input
