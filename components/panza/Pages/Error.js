import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { Base, Button, Text } from "../index";

/**
 * Display an error, with messages and actions depending
 * upon the user state. Particularly useful with Relay.Renderer
 * when an error state and retry function are provided.
 */

class ErrorPage extends React.Component {
  static displayName = "ErrorPage";

  static propTypes = {
    retry: PropTypes.func.isRequired,
    message: PropTypes.string,
    detailMessage: PropTypes.string,
    offlineMessage: PropTypes.string,
    style: PropTypes.any,
    isOffline: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    isOffline: false,
    message: "Hmm, loading appears to be taking a while.",
    offlineMessage: "Please ensure that you are connected to the internet.",
    detailMessage:
      "It's possible that our server are under heavy load, or that your internet connection is slow. Please try again."
  };

  render() {
    const {
      retry,
      message,
      isOffline,
      children,
      offlineMessage,
      detailMessage,
      ...other
    } = this.props;

    return (
      <Base baseStyle={styles.container} {...other}>
        <View style={styles.messageContainer}>
          <Base pb={2}>
            <Text large light textAlign="center">
              {message}
            </Text>
          </Base>
          <Text small light textAlign="center">
            {isOffline ? offlineMessage : detailMessage}
          </Text>
        </View>
        <View>
          {!isOffline && retry && (
            <Button primary onPress={retry}>
              Try again
            </Button>
          )}
        </View>
        {children}
      </Base>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center"
  },
  messageContainer: {
    width: 325,
    marginBottom: 30
  }
});

export default ErrorPage;
