import React, {PropTypes} from 'react'
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


class InputPicker extends React.Component {

  static displayName = 'InputPicker'

  static propTypes = {
    hasFocus: PropTypes.bool.isRequired,
    onRequestFocus: PropTypes.func.isRequired,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    underlayColor: PropTypes.string,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    showMore: true,
    underlayColor: 'rgba(0,0,0,0.1)'
  }

  renderAndroid() {
    return (
      <View style={styles.wrapperAndroid}>
        <View style={styles.androidLabel}>
          <Text style={[styles.labelText]}>
            {this.props.label}
          </Text>
        </View>
        <View>
          {this.props.children}
        </View>
      </View>
    )
  }

  render () {

    if (Platform.OS === 'android') {
      return this.renderAndroid()
    }

    return (
      <View style={{ flex: 1}}>

        <InputRowCell>
          <TouchableHighlight
            style={[styles.input]}
            underlayColor={this.props.underlayColor}
            activeOpacity={this.props.disabled ? 1 : 0.4}
            onPress={() => {
              if (this.props.disabled) return
              this.togglePicker()
            }}>
            <View style={styles.rowContainer}>
              {this.props.label && (
                <Base pl={2}>
                  <PrimaryText>
                    {this.props.label}
                  </PrimaryText>
                </Base>
              )}
              <Base flex={1} align='flex-end' pr={2}>
                <PrimaryText light style={[this.props.hasFocus && { color: config.colors.red }]}>
                  {this.props.value}
                </PrimaryText>
              </Base>
            </View>
          </TouchableHighlight>
        </InputRowCell>

        <View
          pointerEvents={this.props.hasFocus ? 'auto' : 'none'}
          style={[styles.pickerWrapper, !this.props.hasFocus && {
            height: 0
          }]}>
          {this.props.children}
        </View>
      </View>
    )
  }

  togglePicker() {
    if (this.props.hasFocus) {
      this.props.onRequestClose()
    } else {
      this.props.onRequestFocus()
    }
  }
}

var styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    flex: 1
  },
  androidLabel: {
    paddingLeft: 15,
    paddingTop: 15
  },
  wrapperAndroid: {
    // paddingLeft: 15
  },
  labelText: {
    flex: 1,
    color: 'black',
  },
  dateText: {
    marginVertical: 12,
    paddingRight: 15,
    textAlign: 'left',
    flex: 1
  },
    arrowRight: {
    width: 30,
    height: 30,
    marginRight: 5,
    alignSelf: 'center',
    alignItems: 'center'
  },  arrow: {
      paddingRight: 5,
      paddingLeft: 5,
      marginRight: 5,
      paddingTop: 3,
      alignSelf: 'center',
      alignItems: 'center'
    },
  pickerWrapper: {

      overflow: 'hidden',
      flexDirection: 'column',
      width: screen.width,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },

    rowContainer: { height: 55, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', flex: 1}
})

export default InputPicker
