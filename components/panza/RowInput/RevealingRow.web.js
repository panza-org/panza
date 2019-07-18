import React from "react";
import PropTypes from "prop-types";
import { Animated, Platform, StyleSheet, View } from "react-native";

class RevealingRow extends React.Component {
  static propTypes = {
    showingOptions: PropTypes.bool.isRequired,
    revealedContent: PropTypes.node.isRequired
  };

  static defaultProps = {
    showingOptions: false
  };

  componentWillReceiveProps(nextProps) {
    // animate in
    if (!this.props.showingOptions && nextProps.showingOptions) {
      this.showOptions();

      // animate out
    } else if (!nextProps.showingOptions && this.props.showingOptions) {
      this.hideOptions();
    }
  }

  constructor(props) {
    super(props);
    this.onViewLayout = this.onViewLayout.bind(this);
    this.state = {
      leftPosition: new Animated.Value(0),
      rowHeight: 40,
      renderRevealOptions: false,
      revealWidth: -150
    };
  }

  componentDidUpdate() {
    if (this._actions) {
      const width = -this._actions.clientWidth;
      if (this.state.revealWidth !== width) {
        this.setState({ revealWidth: width });
      }
    }
  }

  componentDidMount() {
    this.setState({
      renderRevealOptions: true,
      rowHeight: this._view.clientHeight
    });
  }

  showOptions() {
    Animated.spring(this.state.leftPosition, {
      toValue: this.state.revealWidth
    }).start();
  }

  hideOptions() {
    Animated.spring(this.state.leftPosition, { toValue: 0 }).start();
  }

  render() {
    return (
      <View style={{ position: "relative", flex: 1 }}>
        {this.state.renderRevealOptions && (
          <View
            style={[styles.revealContainer, { height: this.state.rowHeight }]}
          >
            <div
              style={{
                display: "flex",
                height: this.state.rowHeight,
                alignSelf: "flex-end"
              }}
              ref={actions => (this._actions = actions)}
            >
              {this.props.revealedContent}
            </div>
          </View>
        )}
        <div ref={ref => (this._view = ref)}>
          <Animated.View
            onLayout={this.onViewLayout}
            style={{
              flex: 1,
              backgroundColor: "white",
              ...Platform.select({
                ios: { transform: [{ translateX: this.state.leftPosition }] },
                android: {
                  transform: [{ translateX: this.state.leftPosition }]
                },
                web: { left: this.state.leftPosition }
              })
            }}
          >
            {this.props.children}
          </Animated.View>
        </div>
      </View>
    );
  }

  onViewLayout(e) {
    this.setState({
      renderRevealOptions: true,
      rowHeight: e.nativeEvent.layout.height
    });
  }
}

const styles = StyleSheet.create({
  revealContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  }
});

export default RevealingRow;
