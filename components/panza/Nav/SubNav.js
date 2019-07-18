import React from "react";
import PropTypes from "prop-types";

import { View, TouchableOpacity, StyleSheet } from "react-native";

import { Text, Base } from "../index";

import config from "../config";

/**
 * SubNav is typically used directly below the primary
 * Navigation Bar, and displays three touchable text options.
 * This is typically used only on iOS devices. On Android,
 * you'd supply icons for these options instead, and display
 * them on the right side of the primary Navigation Bar.
 *
 * @composes Base
 */

const SubNav = (
  { options, backgroundColor, borderBottom, textColor, ...other },
  { panza }
) => {
  const { borderColor } = { ...config, ...panza };

  return (
    <Base
      flex={1}
      row
      style={[
        borderBottom && { borderBottomWidth: StyleSheet.hairlineWidth },
        { borderBottomColor: borderColor }
      ]}
      justify="space-between"
      p={1}
      px={2}
      backgroundColor={backgroundColor}
      {...other}
    >
      {options.map((opt, i) => {
        let justify = "flex-start";
        if (i === 1) justify = "center";
        else if (i === 2) justify = "flex-end";

        return (
          <View key={opt.label} style={{ flex: 1, alignItems: justify }}>
            <TouchableOpacity style={{ flex: 0 }} onPress={opt.onPress}>
              <Text small color={textColor}>
                {opt.label}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </Base>
  );
};

SubNav.displayName = "SubNav";

SubNav.propTypes = {
  textColor: PropTypes.string,
  borderBottom: PropTypes.bool,
  backgroundColor: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onPress: PropTypes.func.isRequired
    })
  )
};

SubNav.defaultProps = {
  backgroundColor: "white",
  textColor: "primary",
  borderBottom: true
};

SubNav.contextTypes = {
  panza: PropTypes.object
};

export default SubNav;
