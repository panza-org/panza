import React from "react";
import PropTypes from "prop-types";
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

import { Base, Icon, Text, InputRowCell, Input } from "../index";

function noop() {}

const VerticalDivider = () => (
  <View style={{ width: 1, backgroundColor: "white" }} />
);

import RevealingRow from "./RevealingRow";

/**
 * A collection of RowActions to be displayed behind
 * a revealing row.
 */

export const RowActions = ({ children, style, ...other }) => {
  let buttons = [];

  if (Array.isArray(children)) {
    children.forEach((child, i) => {
      const isNotLast = i < children.length - 1;
      buttons.push(child);
      if (isNotLast) {
        buttons.push(<VerticalDivider key={`divider${i}`} />);
      }
    });
  } else {
    buttons = children;
  }

  return (
    <Base
      baseStyle={[
        { flex: 1, flexDirection: "row", justifyContent: "flex-end" },
        style
      ]}
      {...other}
    >
      {buttons}
    </Base>
  );
};

RowActions.propTypes = {
  children: PropTypes.node,
  style: PropTypes.any
};

/**
 * A row action that hide underneath the row, such
 * as 'Delete', or 'Edit', etc.
 */

export const RowAction = ({ children, ...props }) => (
  <Base
    justify="center"
    underlayColor="darken"
    px={2}
    baseStyle={Platform.select({ web: { outline: "none" } })}
    Component={TouchableHighlight}
    {...props}
  >
    <View>{children}</View>
  </Base>
);

RowAction.propTypes = {
  children: PropTypes.node
};

/**
 * Remove button
 */

export const RemoveButton = props => (
  <Base
    Component={TouchableOpacity}
    backgroundColor="error"
    baseStyle={styles.iconButton}
    {...props}
  >
    <Icon name="md-remove" size={15} color="white" />
  </Base>
);

/**
 * A removable input
 */

class RemovableInput extends React.Component {
  static displayName = "RemovableInput";

  static propTypes = {
    label: PropTypes.string,
    autoFocus: PropTypes.bool,
    removable: PropTypes.bool,
    placeholder: PropTypes.string,
    vertical: PropTypes.bool,
    onSelectLabel: PropTypes.func.isRequired,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string,
    backgroundColor: PropTypes.string,
    editable: PropTypes.bool,
    labelWidth: PropTypes.number,
    verticalHeight: PropTypes.number,
    onRequestRemove: PropTypes.func,
    height: PropTypes.number
  };

  static defaultProps = {
    removable: true,
    editable: true,
    backgroundColor: "white",
    textAlign: "right",
    keyboardType: "numeric",
    autoFocus: true,
    vertical: false,
    onRequestRemove: noop,
    verticalHeight: 80,
    height: 50
  };

  constructor(props) {
    super(props);
    this.state = {
      showingOptions: false
    };
  }

  renderLabel() {
    if (!this.props.label) return null;

    return (
      <TouchableOpacity
        style={[
          styles.label,
          this.props.labelWidth && { width: this.props.labelWidth },
          this.props.vertical && { marginTop: 16 }
        ]}
        disabled={!this.props.editable || !this.props.onSelectLabel}
        onPress={() => {
          if (this.state.showDelete) {
            this.hideDelete();
          }
          this.props.onSelectLabel();
        }}
      >
        <Text
          color={
            this.props.editable && this.props.onSelectLabel
              ? "primary"
              : "default"
          }
          baseStyle={styles.labelText}
        >
          {this.props.label}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const revealed = (
      <RowActions>
        <RowAction
          key={"cancel"}
          onPress={() => {
            this.setState({ showingOptions: false });
          }}
          backgroundColor="#eee"
        >
          <Text small>Cancel</Text>
        </RowAction>
        <RowAction
          key="delete"
          onPress={() => {
            this.setState({ showingOptions: false });
            this.props.onRequestRemove();
          }}
          backgroundColor="red"
        >
          <Text small color="white">
            Remove
          </Text>
        </RowAction>
      </RowActions>
    );

    let height = this.props.height;

    if (this.props.vertical) {
      height = this.props.verticalHeight;
    }

    if (height === "auto") {
      height = null;
    }

    return (
      <RevealingRow
        style={{ flex: 1, alignSelf: "stretch" }}
        showingOptions={this.state.showingOptions}
        revealedContent={revealed}
      >
        <InputRowCell height={height}>
          <Base
            row={this.props.removable}
            style={{ alignSelf: "stretch" }}
            flex={1}
            pl={2}
          >
            {this.props.removable && (
              <RemoveButton
                style={{ marginRight: 16 }}
                onPress={() => {
                  this.setState({ showingOptions: true });
                }}
              />
            )}

            <Base
              flex={1}
              style={{ alignSelf: "stretch" }}
              row={!this.props.vertical}
            >
              {this.renderLabel()}

              {this.props.editable ? (
                <Input
                  autoFocus={this.props.autoFocus}
                  disabled={!this.props.editable}
                  placeholder={this.props.placeholder}
                  style={[
                    styles.input,
                    (this.props.vertical || !this.props.label) && {
                      paddingLeft: 0
                    }
                  ]}
                  value={this.props.value}
                  onChangeText={this.props.onChangeText}
                />
              ) : (
                <Base px={0} flex={1} justifyContent="center">
                  <Text numberOfLines={1}>{this.props.value}</Text>
                </Base>
              )}
            </Base>
          </Base>
        </InputRowCell>
      </RevealingRow>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    alignSelf: "stretch",
    paddingRight: 16,
    paddingLeft: 16,
    ...Platform.select({
      web: { height: "100%" }
    })
  },
  label: {
    flex: 0,
    alignItems: "center",
    flexDirection: "row"
  },
  labelText: {
    marginRight: 5
  },
  iconButton: {
    height: 20,
    width: 20,
    overflow: "hidden",
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginRight: 5
  }
});

export default RemovableInput;
