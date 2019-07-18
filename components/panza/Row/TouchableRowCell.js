import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, TouchableHighlight } from "react-native";

import { ArrowRightIcon, Base } from "../index";

const noop = function noop() {};

/**
 * A touchable row cell container, typically used
 * rendering rows in a <ListView>.
 */

const TouchableRowCell = props => {
  const {
    onPress,
    highlighted,
    underlayColor,
    showMore,
    children,
    height,
    disabled,
    ...other
  } = props;

  const fixedHeight = height === "auto" ? null : height;

  const heightStyle = {
    height: fixedHeight
  };

  return (
    <TouchableHighlight
      touchEvents={disabled ? "none" : "auto"}
      onPress={onPress}
      underlayColor={underlayColor}
      style={[styles.row, disabled && styles.disabled]}
      onPressIn={() => highlighted()}
      onPressOut={() => highlighted(null)}
    >
      <View>
        <Base baseStyle={[styles.rowContainer, heightStyle]} {...other}>
          {children}
          {showMore && (
            <Base px={2}>
              <ArrowRightIcon size={20} />
            </Base>
          )}
        </Base>
      </View>
    </TouchableHighlight>
  );
};

TouchableRowCell.displayName = "TouchableRowCell";

TouchableRowCell.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  highlighted: PropTypes.func,
  showMore: PropTypes.bool,
  underlayColor: PropTypes.string,
  height: PropTypes.number,
  children: PropTypes.node
};

TouchableRowCell.defaultProps = {
  showMore: true,
  highlighted: noop,
  disabled: false,
  underlayColor: "rgba(0,0,0,0.1)"
};

const styles = StyleSheet.create({
  row: {
    overflow: "hidden",
    justifyContent: "center"
  },
  disabled: {
    opacity: 0.5
  },
  rowContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  }
});

export default TouchableRowCell;
