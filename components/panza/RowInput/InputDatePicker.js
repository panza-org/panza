import React, { PropTypes } from 'react'
import {
  Base,
  InputExpandable,
  TouchableInput
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
 * Provides a cross-platform InputRow to prompmt the user for
 * a date-picker. On iOS devices, it expands the input to reveal
 * the date-picker. On Android, it prompts the user for a
 * date-picker in a popup.
 */

class InputDatePicker extends React.Component {

  static displayName = 'InputDatePicker'

  static propTypes = {
    expanded: PropTypes.bool.isRequired,
    onToggleExpansion: PropTypes.func.isRequired,
    maxDate: PropTypes.string,
    minDate: PropTypes.string,
    label: PropTypes.string,
    mode: PropTypes.string,
    date: PropTypes.object.isRequired,
    onDateChange: PropTypes.func.isRequired,
    editable: PropTypes.bool
  }

  static defaultProps = {
    editable: true
  }

  render() {

    const {
      expanded,
      onToggleExpansion,
      label,
      value,
      editable,
      ...other
    } = this.props

    const Row = (
      <TouchableInput
        label={label}
        value={value}
        onPress={() => {
          if (Platform.OS === 'ios') {
            return onToggleExpansion()
          } else if (Platform.OS === 'android') {
            this.toggleDatePicker()
          }
        }}
        disabled={!editable}
        {...other}
      />
    )

    return (
      <InputExpandable
        expanded={Platform.OS === 'ios' ? expanded : false}
        Row={Row}>
          {Platform.OS === 'ios' && this.renderIOS() }
      </InputExpandable>
    )
  }

  renderIOS() {
    return (
      <View
        style={styles.pickerWrapper}>
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
          this.props.onDateChange(new Date(year, month, day))
        }

      } catch({code, message}) {
        console.warn('error opening date picker', code, message)
      }

    }
  }

}

const styles = StyleSheet.create({

})

export default InputDatePicker
