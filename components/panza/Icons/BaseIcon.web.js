import React from "react";
import PropTypes from "prop-types";
import { TextBase } from "../Base";

const BaseIcon = ({ name, size, ...other }) => {
  return (
    <TextBase
      className={"ion ion-" + name}
      style={{ fontSize: size + "px" }}
      {...other}
    />
  );
};

BaseIcon.displayName = "BaseIcon";

BaseIcon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string
};

BaseIcon.defaultProps = {
  size: 25
};

export default BaseIcon;
