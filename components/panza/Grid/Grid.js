import React from "react";
import PropTypes from "prop-types";
import { ListView } from "react-native";

class Grid extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  static defaultProps = {
    items: []
  };

  constructor(props, context) {
    super(props, context);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
  }
  render() {}
}

Grid.displayName = "Grid";

export default Grid;
