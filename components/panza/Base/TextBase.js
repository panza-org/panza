import React from "react";
import PropTypes from "prop-types";
import config from "../config";
import { Text } from "react-native";

import { margins, paddings } from "./Base";

/** Props to text-size conversions **/
const size = (fontSize, fontSizes, lineHeight, lineHeights) => {
  const style = {};

  // 0, 1, 2, 3, 4, 5, 6
  if (typeof fontSize === "number") {
    style.fontSize = fontSizes[fontSize];
    style.lineHeight = Math.round(
      fontSizes[fontSize] * lineHeights[lineHeight]
    );
  }

  return style;
};

/** Custom text styling conversions **/
const propsToStyle = (props, bold, thin, thick, colors) => {
  const style = {};

  if (props.bold) {
    style.fontWeight = bold;
  } else if (props.thin) {
    style.fontWeight = thin;
  } else if (props.thick) {
    style.fontWeight = thick;
  }

  if (props.light) {
    style.color = colors.midgray;
  } else if (props.color && colors[props.color]) {
    style.color = colors[props.color];
  } else if (typeof props.color === "string") {
    style.color = props.color;
  }

  if (props.textAlign) {
    style.textAlign = props.textAlign;
  }

  return style;
};

/**
 * A general purpose text component which
 * converts props into styles defined in the configuration.
 */

const TextBase = (
  { style, fontSize, lineHeight, baseStyle, Component, ...props },
  { panza }
) => {
  const { fontSizes, lineHeights, bold, thin, thick, colors, scale } = {
    ...config,
    ...panza
  };

  const sx = [
    baseStyle,
    margins(props, scale),
    paddings(props, scale),
    size(fontSize, fontSizes, lineHeight, lineHeights),
    propsToStyle(props, bold, thin, thick, colors),
    style
  ];

  const Element = Component || Text;

  return (
    <Element style={sx} {...props}>
      {props.children}
    </Element>
  );
};

TextBase.displayName = "TextBase";

TextBase.propTypes = {
  Component: PropTypes.any,
  style: PropTypes.any,
  baseStyle: PropTypes.any,
  children: PropTypes.node,
  fontSize: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  lineHeight: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  color: PropTypes.string,
  textAlign: PropTypes.string,
  bold: PropTypes.bool,
  thin: PropTypes.bool
};

TextBase.defaultProps = {
  color: "default",
  lineHeight: 1
};

TextBase.contextTypes = {
  panza: PropTypes.object
};

export default TextBase;
