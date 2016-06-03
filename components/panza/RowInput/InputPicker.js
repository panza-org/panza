import React, {PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Animated,
  LayoutAnimation,
  Platform
} from 'react-native'

import {
  PrimaryText,
  Base,
  InputRowCell,
  SecondaryText,
  InputExpandable,
  TouchableInput,
  config
} from '../index'

/**
 * On iOS we always want the input field to expand downwards
 * to reveal the picker. On Android, we want to render the
 * Picker in dialog form when touched.
 */

class InputPicker extends React.Component {

  static displayName = 'InputPicker'

  static propTypes = {
    /** a function called when toggling the visibility of the picker. (iOS only) **/
    onToggleExpansion: PropTypes.func.isRequired,
    editable: PropTypes.bool,

    /** the picker value displayed in the row. (iOS only) **/
    value: PropTypes.string,

    /** the label for the picker **/
    label: PropTypes.string.isRequired,

    /** controls whether the picker is visible. (iOS only) **/
    expanded: PropTypes.bool
  }

  static contextTypes = {
    panza: PropTypes.object
  }

  static defaultProps = {
    editable: true
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {Platform.OS === 'android'
          ? this.renderAndroid()
          : this.renderIOS()
        }
      </View>
    )
  }

  renderAndroid() {

    const {
      label,
      editable
    } = this.props

    const {
      panza
    } = this.context

    const { fontSizes } = {...config, ...panza}


    const androidStyles = {
      padding: 0,
      fontSize: fontSizes[4]
    }

    const child = React.Children.only(this.props.children)
    const clone = React.cloneElement(child, {
      enabled: editable,
      style: Object.assign(androidStyles, child.props.style)
    })

    return (
      <Base px={1} pt={2}>
        <Base px={1}>
          <SecondaryText light>{label}</SecondaryText>
        </Base>
        {clone}
      </Base>
    )

  }

  renderIOS() {

    const {
      label,
      value,
      expanded,
      onToggleExpansion,
      editable,
      backgroundColor,
      ...other
    } = this.props

    const Row = (
      <TouchableInput
        label={label}
        value={value}
        onPress={onToggleExpansion}
        backgroundColor={backgroundColor}
        disabled={!editable}
        {...other}
      />
    )

    return (
      <InputExpandable
        expanded={expanded}
        Row={Row}>
          {React.Children.only(this.props.children)}
      </InputExpandable>
    )
  }
}

export default InputPicker
