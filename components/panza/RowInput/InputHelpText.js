import React, { PropTypes } from 'react'
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
 * InputHelpText is typically used after an InputGroup to
 * offer additional information about the above inputs. This is
 * just a simple wrapper around SecondaryText with some padding
 * provided, and the text color set to light.
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
