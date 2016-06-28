import React, { PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Animated,
  LayoutAnimation,
  Platform,
  DatePickerIOS,
  Dimensions
} from 'react-native'

import {
  PrimaryText,
  Base
} from '../index'

import InputRowCell from './InputRowCell'

const screen = Dimensions.get('window')

import config from '../config'

/**
 * A touchable input field that expands (iOS) or
 * pops up (Android) to reveal a picker widget.
 */

class InputExpandable extends React.Component {

  static displayName = 'InputExpandable'

  static propTypes = {
    expanded: PropTypes.bool.isRequired,
    Row: PropTypes.node.isRequired
  }

  render () {

    const {
      expanded,
      Row,
      children,
      ...other
    } = this.props

    return (
      <View style={{ flex: 1 }}>
        {Row}
        {expanded && (
          <View style={styles.pickerWrapper}>
            {React.Children.only(children)}
          </View>
        )}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  pickerWrapper: {
    overflow: 'hidden',
    flexDirection: 'column',
    width: screen.width,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})

export default InputExpandable
