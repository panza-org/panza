import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import InputRowCell from "./InputRowCell";
import { Base, Text, Input } from "../index";

/**
 * InputRow allows the user to input text. It will render an icon or
 * a label if either of the props are provided, and it always
 * renders a TextInput. If a label prop is provided, the TextInput
 * is aligned to the right of the row.
 *
 * To have provide borders, wrap this component (and any other rows) in an InputGroup.
 *
 * @composes InputRowCell, Text, Input
 */

class InputRow extends React.Component {
  static displayName = "InputRow";

  static propTypes = {
    onChangeText: PropTypes.func,
    customInput: PropTypes.node,
    value: PropTypes.string,
    icon: PropTypes.node,
    label: PropTypes.string,
    maxLength: PropTypes.number,
    height: PropTypes.number,
    vertical: PropTypes.bool,
    textAlign: PropTypes.string,
    style: PropTypes.any
  };

  static defaultProps = {
    editable: true,
    height: 50
  };

  focus() {
    this.refs.input.focus();
  }

  blur() {
    this.refs.input.blur();
  }

  render() {
    const {
      style,
      label,
      value,
      icon,
      height,
      vertical,
      maxLength,
      textAlign,
      customInput,
      ...other
    } = this.props;

    let alignText = textAlign || (label && !vertical ? "right" : "left");
    let fixedHeight = vertical ? 80 : height;

    return (
      <InputRowCell height={fixedHeight}>
        {icon && <Base ml={2}>{icon}</Base>}
        <Base
          row={!vertical}
          flex={1}
          style={{
            alignSelf: "stretch",
            alignItems: vertical ? "flex-start" : "center"
          }}
        >
          {label && (
            <Base pl={2} mt={vertical && 2}>
              <Text bold small>
                {label}
              </Text>
            </Base>
          )}
          {customInput || (
            <Input
              value={value}
              maxLength={maxLength}
              px={2}
              style={[styles.input, style]}
              textAlign={alignText}
              {...other}
            />
          )}
        </Base>
      </InputRowCell>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    alignSelf: "stretch",
    flex: 1
  }
});

export default InputRow;
