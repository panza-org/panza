import React, {PropTypes} from 'react'
var {
  View,
  Switch,
  Platform,
  Text,
  StyleSheet
} = require('react-native')
import {
  Base,
  PrimaryText,
  InputRowCell
} from '../index'

/**
 * An input row with a <Switch /> that allows
 * the user to toggle a value.
 */

class InputToggle extends React.Component {

  static displayName = 'InputToggle'

  static propTypes = {
    style: PropTypes.any,
    value: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string,
    label: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    backgroundColor: 'transparent'
  }

  render () {
    const {
      style,
      label,
      value,
      onValueChange,
      switchProps,
      backgroundColor,
      ...other
    } = this.props

    return (
      <InputRowCell>
        <Base p={2}>
          <PrimaryText>
            {label}
          </PrimaryText>
        </Base>
        <Base flex={1}>
          <Switch
            style={styles.switch}
            value={value}
            {...switchProps}
            onValueChange={onValueChange}
          />
      </Base>
    </InputRowCell>
    )

  }
}

var styles = StyleSheet.create({
  input: {
    borderWidth: 0
  },
  labelText: {
    position: 'absolute',
    marginVertical: 12,
    top: 0,
    left: 15,
    color: '#333'
  },
  switch: {
    marginVertical: 5,
    alignSelf: 'flex-end',
    marginRight: 15,
    ...Platform.select({
      android: {
        marginVertical: 13
      }
    })
  }
})

module.exports = InputToggle
