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
