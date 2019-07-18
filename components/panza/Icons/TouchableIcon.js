import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";

/**
 * A touchable wrapper for <Icon />
 */

const TouchableIcon = props => {
  const { onPress, children, accessibilityLabel, style, ...other } = props;

  const child = React.Children.only(children);

  return (
    <TouchableOpacity
      style={style}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      {...other}
    >
      {child}
    </TouchableOpacity>
  );
};

TouchableIcon.displayName = "TouchableIcon";

TouchableIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
  accessibilityLabel: PropTypes.string.isRequired
};

export default TouchableIcon;
