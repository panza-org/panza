import React from "react";
import PropTypes from "prop-types";
import { Icon, Base } from "../index";

/**
 * A basic CheckMark that can either be unchecked
 * or checked.
 * @composes Base, Icon
 */

class CheckMark extends React.Component {
  static displayName = "CheckMark";

  static propTypes = {
    isChecked: PropTypes.bool,
    size: PropTypes.number,
    uncheckedColor: PropTypes.string,
    checkedColor: PropTypes.string,
    checkMarkIconName: PropTypes.string,
    uncheckedIconName: PropTypes.string
  };

  static defaultProps = {
    isChecked: false,
    size: 30,
    uncheckedColor: "light",
    checkedColor: "positive",
    checkMarkIconName: "ios-checkmark-circle-outline",
    uncheckedIconName: "ios-radio-button-off"
  };

  render() {
    const {
      size,
      isChecked,
      uncheckedColor,
      checkMarkIconName,
      uncheckedIconName,
      checkedColor,
      ...other
    } = this.props;

    return (
      <Base {...other}>
        {isChecked ? (
          <Icon name={checkMarkIconName} color={checkedColor} size={size} />
        ) : (
          <Icon name={uncheckedIconName} size={size} color={uncheckedColor} />
        )}
      </Base>
    );
  }
}

export default CheckMark;
