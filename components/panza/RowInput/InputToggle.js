import React, { PropTypes } from 'react'
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

import config from '../config'

/**
 * An basic input row with a label and Switch, allowing
 * the user to toggle a boolean value.
 */

class InputToggle extends React.Component {

  static displayName = 'InputToggle'

  static propTypes = {
    style: PropTypes.any,
    value: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string,
    label: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired,
    editable: PropTypes.bool
  }

  static defaultProps = {
    backgroundColor: 'transparent',
    editable: true,
    onTintColor: 'success'
  }

  static contextTypes = {
    panza: PropTypes.object
  }

  render () {
    const {
      style,
      label,
      value,
      editable,
      onValueChange,
      switchProps,
      onTintColor,
      backgroundColor,
      ...other
    } = this.props

    const {
      panza
    } = this.context

    const { colors } = { ...config, ...panza || {} }
    let tintColor = colors[onTintColor]

    return (
      <InputRowCell>
        <Base pl={2}>
          <PrimaryText>
            {label}
          </PrimaryText>
        </Base>
        <Base flex={1}>
          <Switch
            style={styles.switch}
            value={value}
            edisabled={!editable}
            onTintColor={tintColor}
            {...switchProps}
            onValueChange={onValueChange}
          />
      </Base>
    </InputRowCell>
    )

  }
}


const styles = StyleSheet.create({
  switch: {
    alignSelf: 'flex-end',
    marginRight: 16,
    ...Platform.select({
      android: {
        marginVertical: 13
      }
    })
  }
})

module.exports = InputToggle
