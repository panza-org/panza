import React from "react";
import PropTypes from "prop-types";
import { Base } from "../index";

const ButtonGroup = ({ children, rounded, segmented, vertical, ...other }) => {
  const round = rounded ? (typeof rounded === "number" ? rounded : 2) : 0;

  const total = children.length;
  const kids = React.Children.map(children, (child, i) => {
    const isFirst = i === 0;
    const isLast = i === total - 1;
    const isOutline = child.props.outline;
    const w = 2;

    const style = vertical
      ? [
          isOutline && { borderBottomWidth: w / 2, borderTopWidth: w / 2 },
          isOutline && isFirst && { borderTopWidth: w },
          isOutline && isLast && { borderBottomWidth: w },
          isFirst &&
            rounded && {
              borderTopLeftRadius: round,
              borderTopRightRadius: round
            },
          isLast &&
            rounded && {
              borderBottomLeftRadius: round,
              borderBottomRightRadius: round
            }
        ]
      : [
          isOutline && { borderLeftWidth: w / 2, borderRightWidth: w / 2 },
          isOutline && isFirst && { borderLeftWidth: w },
          isOutline && isLast && { borderRightWidth: w },
          isFirst &&
            rounded && {
              borderTopLeftRadius: round,
              borderBottomLeftRadius: round
            },
          isLast &&
            rounded && {
              borderTopRightRadius: round,
              borderBottomRightRadius: round
            }
        ];

    const newProps = {
      flex: 1,
      style
    };

    if (segmented) {
      newProps.block = true;
      newProps.rounded = false;
    }

    return React.cloneElement(child, newProps);
  });

  return (
    <Base
      flexDirection={vertical ? "column" : "row"}
      flex={vertical ? 0 : 1}
      {...other}
    >
      {kids}
    </Base>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
  rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  vertical: PropTypes.bool,

  /** A helper to create segemented controls that align together **/
  segmented: PropTypes.bool
};

export default ButtonGroup;
