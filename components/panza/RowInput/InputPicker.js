import React from "react";
import PropTypes from "prop-types";
import { View, Platform } from "react-native";

import { Base, Text, InputExpandable, TouchableInput, config } from "../index";

/**
 * InputPicker provides a unified API for Android and iOS
 * picker rows.
 *
 * On iOS, when the user selects the picker row,
 * we want the row to expand to reveal the picker, which is the
 * child passed to this component. The value prop appears
 * on the top right of the picker row. It should be the humanized
 * version of the selected value in the picker.
 *
 * On Android, we display the picker as the row itself. When
 * selected, the picker prompt will occur. A label is
 * rendered above the picker. The value prop is ignored,
 * since the Android picker already prints the value for us.
 */

class InputPicker extends React.Component {
  static displayName = "InputPicker";

  static propTypes = {
    /** a function called when toggling the visibility of the picker. (iOS only) **/
    onToggleExpansion: PropTypes.func.isRequired,
    editable: PropTypes.bool,

    /** the picker value displayed in the row. (iOS only) **/
    value: PropTypes.string,

    /** the label for the picker **/
    label: PropTypes.string.isRequired,

    /** controls whether the picker is visible. (iOS only) **/
    expanded: PropTypes.bool,
    children: PropTypes.node,
    backgroundColor: PropTypes.string
  };

  static contextTypes = {
    panza: PropTypes.object
  };

  static defaultProps = {
    editable: true
  };

  renderAndroid() {
    const { label, editable } = this.props;

    const { panza } = this.context;

    const { fontSizes } = { ...config, ...panza };

    const androidStyles = {
      padding: 0,
      fontSize: fontSizes[4]
    };

    const child = React.Children.only(this.props.children);
    const clone = React.cloneElement(child, {
      enabled: editable,
      style: Object.assign(androidStyles, child.props.style)
    });

    return (
      <Base px={1} pt={2}>
        <Base px={1}>
          <Text small light>
            {label}
          </Text>
        </Base>
        {clone}
      </Base>
    );
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
    } = this.props;

    const Row = (
      <TouchableInput
        label={label}
        value={value}
        onPress={onToggleExpansion}
        backgroundColor={backgroundColor}
        disabled={!editable}
        {...other}
      />
    );

    return (
      <InputExpandable expanded={expanded} Row={Row}>
        {React.Children.only(this.props.children)}
      </InputExpandable>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {Platform.OS === "android" ? this.renderAndroid() : this.renderIOS()}
      </View>
    );
  }
}

export default InputPicker;
