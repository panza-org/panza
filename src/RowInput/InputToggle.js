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

import { themeProvider } from '../config'

/**
 * A row with a label and switch, allowing
 * the user to toggle a boolean value.
 *
 * @Platform ios, android
 * @Composes InputRowCell, Switch
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
    onTintColor: PropTypes.string,

    /** theme provided by panza **/
    panza: PropTypes.object.isRequired
  }

  static defaultProps = {
    backgroundColor: 'transparent',
    editable: true,
    onTintColor: 'success'
  }

  render () {
    const {
      label,
      value,
      editable,
      onValueChange,
      switchProps,
      onTintColor,
      panza
    } = this.props

    const { colors } = panza
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

module.exports = themeProvider(InputToggle)
