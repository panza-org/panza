import React from "react";
import PropTypes from "prop-types";
import { InputExpandable, TouchableInput } from "../index";
import {
  Platform,
  View,
  DatePickerIOS,
  DatePickerAndroid,
  StyleSheet
} from "react-native";

/**
 * InputDatePicker a cross-platform InputRow inputting
 * dates.
 *
 * On iOS devices, the row examples to reveal
 * DatePickerIOS when selected. The humanized date should
 * be supplied as the value prop, and it should be
 * updated when the value of the date-picker changes.
 *
 * On Anroid, the date-picker prompts the user to select
 * a date in a modal menu.
 *
 */

class InputDatePicker extends React.Component {
  static displayName = "InputDatePicker";

  static propTypes = {
    expanded: PropTypes.bool.isRequired,

    /** function called to toggle the visibility of the date-picker. (iOS only) **/
    onToggleExpansion: PropTypes.func.isRequired,

    /** the currently selected date to be displayed in collapsed row. **/
    value: PropTypes.string,
    maxDate: PropTypes.string,
    minDate: PropTypes.string,
    label: PropTypes.string,
    mode: PropTypes.string,
    date: PropTypes.object.isRequired,
    onDateChange: PropTypes.func.isRequired,
    editable: PropTypes.bool
  };

  static defaultProps = {
    editable: true
  };

  renderIOS() {
    return (
      <View style={styles.pickerWrapper}>
        <DatePickerIOS
          date={new Date(this.props.date)}
          maximumDate={this.props.maxDate}
          minimumDate={this.props.minDate}
          mode={this.props.mode}
          onDateChange={date => {
            this.props.onDateChange(date);
          }}
        />
      </View>
    );
  }

  async toggleDatePicker() {
    if (Platform.OS === "android") {
      try {
        const { action, year, month, day } = await DatePickerAndroid.open({
          date: this.props.date,
          minDate: this.props.minDate,
          maxDate: this.props.maxDate
        });

        if (action === DatePickerAndroid.dismissedAction) {
          // console.log('dismissed')
        } else {
          this.props.onDateChange(new Date(year, month, day));
        }
      } catch ({ code, message }) {
        // console.warn('error opening date picker', code, message)
      }
    }
  }

  render() {
    const {
      expanded,
      onToggleExpansion,
      label,
      value,
      editable,
      ...other
    } = this.props;

    const Row = (
      <TouchableInput
        label={label}
        value={value}
        onPress={() => {
          if (Platform.OS === "ios") {
            onToggleExpansion();
          } else if (Platform.OS === "android") {
            this.toggleDatePicker();
          }
        }}
        disabled={!editable}
        {...other}
      />
    );

    return (
      <InputExpandable
        expanded={Platform.OS === "ios" ? expanded : false}
        Row={Row}
      >
        {Platform.OS === "ios" && this.renderIOS()}
      </InputExpandable>
    );
  }
}

const styles = StyleSheet.create({
  pickerWrapper: {
    flex: 1,
    alignSelf: "stretch"
  }
});

export default InputDatePicker;
