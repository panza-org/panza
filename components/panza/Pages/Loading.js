import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicatorIOS, ActivityIndicator } from "react-native";

import { Base, Text } from "../index";

/**
 * Displays a loading indicator, and on iOS an optional
 * loading message.
 */

class Loader extends React.Component {
  static displayName = "Loader";

  static propTypes = {
    isLoading: PropTypes.bool,
    large: PropTypes.bool,
    color: PropTypes.string,
    showText: PropTypes.bool,
    loadingText: PropTypes.string,
    alignTop: PropTypes.bool
  };

  static defaultProps = {
    large: false,
    color: "gray",
    isLoading: true,
    showText: true,
    loadingText: "Loading...",
    alignTop: false
  };

  render() {
    const {
      color,
      isLoading,
      large,
      showText,
      loadingText,
      alignTop,
      ...other
    } = this.props;

    const size = large ? "large" : "small";
    const Indicator = ActivityIndicator || ActivityIndicatorIOS;

    return (
      <Base
        flex={1}
        align={"center"}
        justify={alignTop ? "flex-start" : "center"}
        {...other}
      >
        <Base row align={"center"} justify={"center"}>
          {Indicator && (
            <Indicator color={color} animating={isLoading} size={size} />
          )}
          {showText && (
            <Text fontSize={large ? 2 : 4} ml={1} light>
              {loadingText}
            </Text>
          )}
        </Base>
      </Base>
    );
  }
}

export default Loader;
