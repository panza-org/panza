import React from "react";
import PropTypes from "prop-types";
import { Base, PrimaryText } from "../index";
import { View, TouchableHighlight, StyleSheet } from "react-native";

/**
 * Input Option
 */

export const RevealOption = ({ label, textColor, onPress, ...other }) => (
  <Base
    Component={TouchableHighlight}
    px={1}
    baseStyle={styles.slideOption}
    onPress={onPress}
    {...other}
  >
    <View style={styles.inputContainer}>
      <PrimaryText color={textColor}>{label}</PrimaryText>
    </View>
  </Base>
);

RevealOption.propTypes = {
  onPress: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  textColor: PropTypes.string
};

RevealOption.defaultProps = {
  textColor: "white",
  backgroundColor: "midgray"
};

/**
 * Revealable row options container. Typically used
 * to delete a row.
 */

const InputRowRevealOptions = ({ options, height, ...other }) => (
  <View style={styles.slideOptions}>
    <Base flex={1} row style={{ height }} {...other}>
      {options.map(opt => {
        const { label, onPress, backgroundColor, ...more } = opt;

        return (
          <RevealOption
            key={label}
            onPress={onPress}
            backgroundColor={backgroundColor}
            underlayColor={"darken"}
            label={label}
            {...more}
          />
        );
      })}
    </Base>
  </View>
);

InputRowRevealOptions.propTypes = {
  height: PropTypes.number,
  options: PropTypes.array
};

InputRowRevealOptions.defaultProps = {
  height: 40
};

export default InputRowRevealOptions;

const styles = StyleSheet.create({
  slideOptions: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row"
  },
  inputContainer: {
    alignSelf: "center",
    justifyContent: "center",
    flex: 1
  }
});
