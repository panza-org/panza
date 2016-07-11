import React, { PropTypes } from 'react'
import {
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  View,
  TouchableWithoutFeedback
} from 'react-native'
import {
  Base
} from '../index'

const screen = Dimensions.get('window')

class Popup extends React.Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
    showing: PropTypes.bool.isRequired,
    Content: PropTypes.node.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    onRequestShow: PropTypes.func,
    position: PropTypes.oneOf(['bottom', 'center', 'top'])
  }

  static defaultProps = {
    showing: false,
    position: 'bottom'
  }

  constructor(props) {
    super(props)
    this.onLayout = this.onLayout.bind(this)
    this.state = {
      position: 'bottom',
      animated: new Animated.Value(props.showing ? 0 : 1),
      contentHeight: screen.height
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.showing && !this.props.showing) {
      this.animateIn()
    } else if (!nextProps.showing && this.props.showing) {
      this.animateOut()
    }
  }

  onLayout(e) {
    this.setState({ contentHeight: e.nativeEvent.layout.height })
  }

  animateIn() {
    Animated.timing(
      this.state.animated,
      { toValue: 0, easing: Easing.inOut(Easing.quad), duration: 250 }
    ).start()
  }

  animateOut() {
    Animated.timing(
      this.state.animated,
      { toValue: 1, easing: Easing.inOut(Easing.quad), duration: 250 }
    ).start()
  }

  render() {
    const {
      children,
      showing,
      position,
      Content,
      ...other
    } = this.props

    const {
      contentHeight
    } = this.state

    const clonedContent = React.cloneElement(Content, {
      onLayout: this.onLayout
    })

    // consider using flex instead
    const pos = { left: 0, right: 0 }
    if (position === 'bottom') pos.bottom = 0
    else if (position === 'top') pos.top = 0
    else if (position === 'center') {
      pos.top = (screen.height / 2) - (contentHeight / 2)
    }

    const opacity = this.state.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 1],
      extrapolate: 'clamp'
    })

    const scale = this.state.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0.95, 1]
    })

    const outputRangeTarget = position === 'bottom'
      ? this.state.contentHeight
      : screen.height

    const translateY = this.state.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, outputRangeTarget]
    })

    return (
      <Base flex={1} backgroundColor='black' style={styles.popup} {...other}>

        {/* Pane content */}
        <Animated.View
          style={{
            flex: 1,
            transform: [{ scale }],
            opacity
          }}
        >
          {children}
        </Animated.View>

        {/* Overlay. */}
        {showing && (
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.onRequestClose()
            }}
          >
            <View
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }}
            />
          </TouchableWithoutFeedback>
        )}

        {/* Popup Content */}
        <Animated.View
          style={{
            position: 'absolute',
            zIndex: 500,
            transform: [{ translateY }],
            ...pos
          }}
        >
          {clonedContent}
        </Animated.View>
      </Base>
    )
  }
}

const styles = StyleSheet.create({
  popup: {
    position: 'relative'
  }
})

export default Popup
