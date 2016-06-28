import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  Dimensions
} from 'react-native';
import { Base, TextBase } from '../Base'

export default class TabBar extends Component {
  static propTypes = {
    onTabPress: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    underlineColor: React.PropTypes.string,
    underlineHeight: React.PropTypes.number,
    backgroundColor: React.PropTypes.string,
    activeTextColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
    textProps: Text.propTypes.style,
    tabStyle: View.propTypes.style,
    containerStyle: View.propTypes.style
  };
  static defaultProps = {
    height: 40,
    activeTextColor: 'primary',
    inactiveTextColor: 'secondary',
    underlineColor: 'primary',
    backgroundColor: 'white',
    underlineHeight: 2,
    onTabPress: () => {}
  };

  constructor(props) {
    super(props);
    const { activeTab, width, tabs } = props;

    this.width = width || Dimensions.get('window').width;
    this.state = {
      left: activeTab ? activeTab * this.width / tabs.length : 0,
      activeTab: activeTab || 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeTab !== this.props.activeTab) {
      LayoutAnimation.easeInEaseOut();
      this.setState({
        left: nextProps.activeTab * this.width / nextProps.tabs.length,
        activeTab: nextProps.activeTab
      });
    }
  }

  onTabPress(i) {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      left: i * this.width / this.props.tabs.length,
      activeTab: i
    });
    this.props.onTabPress(i);
  }

  renderTabOption(name, i) {
    const isTabActive = this.state.activeTab === i;
    const { activeTextColor, inactiveTextColor, textProps } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;

    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        key={name}
        onPress={() => {
          this.onTabPress(i)
        }}
      >
        <View style={[styles.tab, this.props.tabStyle]}>
          <TextBase color={textColor} {...textProps}>
            {name}
          </TextBase>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const {
      height,
      underlineHeight,
      underlineColor,
      backgroundColor,
      containerStyle,
      tabs,
      ...other
    } = this.props;
    const numberOfTabs = tabs.length;

    const tabUnderlineStyle = {
      position: 'absolute',
      width: this.width / numberOfTabs,
      height: underlineHeight,
      bottom: 0
    };

    return (
      <Base
        baseStyle={[styles.container, { height }, containerStyle]}
        backgroundColor={backgroundColor}
        {...other}
      >
        {tabs.map((tab, i) => this.renderTabOption(tab, i))}
        <Base
          Component={Animated.View}
          backgroundColor={underlineColor}
          style={[tabUnderlineStyle, { left: this.state.left }]}
        />
      </Base>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

