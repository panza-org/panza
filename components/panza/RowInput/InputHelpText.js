import React, {PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {
  SecondaryText,
  Base
} from '../index'

/**
 * Help text typically used after an <InputGroup>
 * to inform users about fields, or groups of fields.
 */

class InputHelpText extends React.Component {

  static displayName = 'InputHelpText'

  render () {

    const {
      children,
      ...other
    } = this.props

    return (
      <Base p={2}>
        <SecondaryText light {...other}>
          {children}
        </SecondaryText>
      </Base>
    )

  }
}

export default InputHelpText
