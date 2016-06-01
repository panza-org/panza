import React, { PropTypes } from 'react'
import {
  Base,
  InputPicker
} from '../index'
import {
  Platform,
  View,
  Text,
  Dimensions,
  DatePickerIOS,
  DatePickerAndroid,
  StyleSheet
} from 'react-native'

const screen = Dimensions.get('window')

/**
 * Composes <InputPicker /> and provides a cross-platform
 * DatePicker widget as user input.
 */

class InputDatePicker extends React.Component {

  static displayName = 'InputDatePicker'

  static propTypes = {
    hasFocus: PropTypes.bool.isRequired,
    onRequestFocus: PropTypes.func.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    maxDate: PropTypes.string,
    minDate: PropTypes.string,
    mode: PropTypes.string,
    date: PropTypes.object.isRequired,
    underlayColor: PropTypes.string,
    onDateChange: PropTypes.func.isRequired,
    showMore: PropTypes.bool,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    showMore: true
  }

  render() {

    const {
      hasFocus,
      onRequestClose,
      onRequestFocus,
      label,
      value,
      underlayColor,
      disabled,
      ...other
    } = this.props

    const ios = Platform.OS === 'ios'

    return (
      <InputPicker
        hasFocus={hasFocus}
        onRequestFocus={onRequestFocus}
        onRequestClose={onRequestClose}
        label={label}
        value={value}
        underlayColor={underlayColor}
        disabled={disabled}
      >
        {
          ios
            ? this.renderIOS()
            : this.renderAndroid()
        }
      </InputPicker>
    )
  }

  renderIOS() {
    return (
      <View
        pointerEvents={this.props.hasFocus ? 'auto' : 'none'}
        style={[styles.pickerWrapper, !this.props.hasFocus && { height: 0 }]}>
        <DatePickerIOS
          date={new Date(this.props.date)}
          maximumDate={this.props.maxDate}
          minimumDate={this.props.minDate}
          mode={this.props.mode}
          onDateChange={(date) => {
            this.props.onDateChange(date)
          }}
        />
      </View>
    )
  }

  renderAndroid() {
    return null
  }

  async toggleDatePicker() {
    if (Platform.OS === 'android') {
      try {
        const { action, year, month, day } = await DatePickerAndroid.open({
          date: this.props.date,
          minDate: this.props.minDate,
          maxDate: this.props.maxDate
        })

        if (action === DatePickerAndroid.dismissedAction) {
          console.log('dismissed')
        } else {
          this.props.onChange(new Date(year, month, day))
        }

      } catch({code, message}) {
        console.warn('error opening date picker', code, message)
      }

    } else {

      if (this.props.hasFocus) {
        this.props.onRequestClose()
      } else {
        this.props.onRequestFocus()
      }
    }
  }

}

const styles = StyleSheet.create({

})

export default InputDatePicker
