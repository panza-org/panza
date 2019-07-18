import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";

import { Text, TextBase } from "../index";

/**
 * Makes a touchable text component for the NavBar. Typically
 * used on iOS.
 *
 * @composes TextBase
 */

const NavTouchableText = ({ children, disabled, color, ...other }) => (
  <View style={{ flex: 1, justifyContent: "center" }}>
    <TextBase
      Component={TouchableOpacity}
      px={2}
      baseStyle={{
        paddingBottom: 5,
        paddingTop: 5,
        opacity: disabled ? 0.3 : 1
      }}
      disabled={disabled}
      {...other}
    >
      <Text color={color} style={{ opacity: disabled ? 0.5 : 1 }}>
        {children}
      </Text>
    </TextBase>
  </View>
);

NavTouchableText.displayName = "NavTouchableText";

NavTouchableText.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node
};

NavTouchableText.defaultProps = {
  color: "primary"
};

export default NavTouchableText;
