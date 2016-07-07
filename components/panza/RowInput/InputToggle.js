import React, { PropTypes } from 'react'
import {
  Switch,
  Platform,
  StyleSheet
} from 'react-native'
import {
  Base,
  Text,
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
    editable: PropTypes.bool,
    switchProps: PropTypes.object,
    onTintColor: PropTypes.string
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
      label,
      value,
      editable,
      onValueChange,
      switchProps,
      onTintColor
    } = this.props

    const {
      panza
    } = this.context

    const { colors } = { ...config, ...panza || {} }
    let tintColor = colors[onTintColor]

    return (
      <InputRowCell>
        <Base pl={2}>
          <Text>
            {label}
          </Text>
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
