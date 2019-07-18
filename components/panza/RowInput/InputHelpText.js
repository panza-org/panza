import React from "react";
import PropTypes from "prop-types";
import { Text, Base } from "../index";

/**
 * InputHelpText is typically used after an InputGroup to
 * offer additional information about the above inputs. This is
 * just a simple wrapper around SecondaryText with some padding
 * provided, and the text color set to light.
 *
 * @composes Text
 */

class InputHelpText extends React.Component {
  static displayName = "InputHelpText";

  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const { children, ...other } = this.props;

    return (
      <Base p={2}>
        <Text small light {...other}>
          {children}
        </Text>
      </Base>
    );
  }
}

export default InputHelpText;
