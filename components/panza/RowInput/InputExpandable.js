import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get("window");

/**
 * A touchable input field that expands (iOS) or
 * pops up (Android) to reveal a picker widget.
 */

class InputExpandable extends React.Component {
  static displayName = "InputExpandable";

  static propTypes = {
    expanded: PropTypes.bool.isRequired,
    Row: PropTypes.node.isRequired,
    children: PropTypes.node
  };

  render() {
    const { expanded, Row, children } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {Row}
        {expanded && (
          <View style={styles.pickerWrapper}>
            {React.Children.only(children)}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerWrapper: {
    overflow: "hidden",
    flexDirection: "column",
    width: screen.width,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});

export default InputExpandable;
