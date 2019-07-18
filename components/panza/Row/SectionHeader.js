import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { Base, Text } from "../index";

/**
 * SectionHeader is used for rendering a section header within a ListView.
 * Supply text as the child.
 * @composes Base
 */

const SectionHeader = ({ backgroundColor, children, ...other }) => (
  <Base backgroundColor={backgroundColor} baseStyle={styles.header} {...other}>
    <Text small light>
      {children}
    </Text>
  </Base>
);

SectionHeader.displayName = "SectionHeader";

SectionHeader.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node
};

SectionHeader.defaultProps = {
  backgroundColor: "gray"
};

export default SectionHeader;

const styles = StyleSheet.create({
  header: {
    padding: 7,
    paddingLeft: 15,
    overflow: "hidden"
  },
  headerText: {
    fontWeight: "400",
    color: "#999",
    fontSize: 13,
    letterSpacing: 0.3
  }
});
