import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Platform } from "react-native";

/**
 * A wrapper for <Icon /> that positions it correctly
 * in a navigation bar.
 */

const NavIconContainer = props => {
  const { children, ...other } = props;

  const child = React.Children.only(children);
  const padding = Platform.OS === "android" ? 10 : 15;

  const cloned = React.cloneElement(child, {
    style: {
      padding: 10,
      paddingLeft: padding,
      paddingRight: padding
    }
  });

  return (
    <View style={styles.container} {...other}>
      {cloned}
    </View>
  );
};

NavIconContainer.propTypes = {
  children: PropTypes.node.isRequired
};

NavIconContainer.displayName = "NavIconContainer";

export default NavIconContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      android: {
        width: 40
      },
      ios: {
        width: 50
      }
    })
  }
});
