import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

import { config, Base } from "../index";

/**
 * A simple component used to separate rows, with an
 * optional inset margin on the left or right.
 */

const Divider = ({ inset, insetRight, ...other }, { panza }) => {
  const { borderColor } = { ...config, ...panza };

  return (
    <Base
      baseStyle={[
        styles.separator,
        { backgroundColor: borderColor },
        inset && { marginLeft: inset },
        insetRight && { marginRight: insetRight }
      ]}
      {...other}
    />
  );
};

Divider.displayName = "Divider";

Divider.propTypes = {
  inset: PropTypes.number,
  insetRight: PropTypes.number
};

Divider.defaultProps = {
  inset: 0,
  insetRight: 0
};

Divider.contextTypes = {
  panza: PropTypes.object
};

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth
  }
});

export default Divider;
