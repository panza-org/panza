import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { Base, SectionHeader, Divider } from "../index";

/**
 * Wrapping components with InputGroup gives you the
 * option of giving Inputs dividing borders, dividing
 * borders with an inset, a top border (with a unique inset value),
 * a bottom border (with a unique inset value), shared background
 * colours, margins, and a label. You could supply your own
 * child components, too.
 */

class InputGroup extends React.Component {
  static displayName = "InputGroup";

  static propTypes = {
    style: PropTypes.object,

    /** left margin inset for the divider border **/
    inset: PropTypes.number,

    /** whether show the top border **/
    showTopBorder: PropTypes.bool,

    /** whether to show the bottom border **/
    showBottomBorder: PropTypes.bool,

    /** whether to show the dividing border **/
    showBorder: PropTypes.bool,

    /** left margin inset of the top border **/
    topInset: PropTypes.number,

    /** left margin inset of the bottom border **/
    bottomInset: PropTypes.number,

    /** an optional label for the input group **/
    label: PropTypes.string,

    children: PropTypes.node,
    backgroundColor: PropTypes.string
  };

  static defaultProps = {
    bottomInset: 0,
    topInset: 0,
    showBottomBorder: true,
    showTopBorder: true,
    showBorder: true,
    inset: 0
  };

  render() {
    const {
      inset,
      showBottomBorder,
      backgroundColor,
      topInset,
      bottomInset,
      ...other
    } = this.props;

    const isArray = Array.isArray(this.props.children);

    const children = React.Children.map(this.props.children, (child, i) => {
      const isLast = i === this.props.children.length - 1 || !isArray;
      if (!child) return null;

      return (
        <View>
          {child}
          {this.props.showBorder && (!isLast && showBottomBorder) && (
            <Divider inset={inset} />
          )}
        </View>
      );
    });

    const style = [styles.group, this.props.style];

    return (
      <Base baseStyle={style} {...other}>
        {this.props.label && (
          <SectionHeader backgroundColor="transparent">
            {this.props.label}
          </SectionHeader>
        )}
        <Base backgroundColor={backgroundColor}>
          {this.props.showTopBorder && <Divider inset={topInset} />}
          {children}
          {this.props.showBottomBorder && <Divider inset={bottomInset} />}
        </Base>
      </Base>
    );
  }
}

const styles = StyleSheet.create({
  border: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "rgba(0,0,0,0.25)"
  },
  group: {
    backgroundColor: "transparent"
  },
  margin: {
    marginTop: 30,
    marginBottom: 30
  }
});

export default InputGroup;
