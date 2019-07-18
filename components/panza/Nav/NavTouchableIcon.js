import React from "react";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import { NavIconContainer } from "./index";
import { TouchableIcon } from "../Icons";

const defaultColor = Platform.select({
  ios: "primary",
  android: "default"
});

const defaultSize = Platform.select({
  ios: 35,
  android: 25
});

/**
 * Wrap Icon components within NavTouchableIcon for display
 * of an Icon in the Navigation bar. You may need to fiddle
 * around with the sizing of the Icon on android and ios devices
 * to ensure that they look right.
 */

const NavTouchableIcon = props => {
  const child = React.Children.only(props.children);
  const clone = React.cloneElement(child, {
    color: child.props.color || defaultColor,
    size: typeof child.props.size === "number" ? child.props.size : defaultSize
  });

  return (
    <NavIconContainer>
      <TouchableIcon onPress={props.onPress}>{clone}</TouchableIcon>
    </NavIconContainer>
  );
};

NavTouchableIcon.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired
};

NavTouchableIcon.displayName = "NavTouchableIcon";

export default NavTouchableIcon;
