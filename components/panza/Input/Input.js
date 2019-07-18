import React from "react";
import PropTypes from "prop-types";
import { Text } from "../index";
import { TextInput, Platform } from "react-native";

/**
 * A basic input
 * @composes Text
 */

const Input = props => (
  <Text
    baseStyle={{
      ...Platform.select({
        web: { outline: "none", borderColor: "transparent" }
      })
    }}
    {...props}
    Component={TextInput}
    underlineColorAndroid="transparent"
  />
);

Input.propTypes = {
  tiny: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  giant: PropTypes.bool
};

Input.displayName = "Input";

export default Input;
