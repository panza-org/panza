import React, { PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated
} from 'react-native'

import {
  Base
} from '../index'

/**
 * Fade-in an image when it loads.
 */

class FadeImage extends React.Component {

  static displayName = 'FadeImage'

  static propTypes = {
    src: PropTypes.string.isRequired,
    fade: PropTypes.bool,
    onLoadEnd: PropTypes.func,
    height: PropTypes.number,
    width: PropTypes.number,
    rounded: PropTypes.bool,
    backgroundColor: PropTypes.string,
    imageProps: PropTypes.object
  }

  static defaultProps = {
    fade: true,
    resizeMode: 'cover',
    height: 50,
    width: 50,
    rounded: false,
    backgroundColor: '#fafafa',
    imageProps: {}
  }

  state = {
    fade: new Animated.Value(0)
  }

  onLoad() {

    if (this.props.onLoadEnd) {
      this.props.onLoadEnd()
    }

    if (this.props.fade) {
      Animated.timing(
        this.state.fade,
        {
          toValue: 1,
          duration: 250
        }
      ).start()
    }
  }

  render() {
    const {
      style,
      source,
      height,
      width,
      imageProps,
      backgroundColor,
      rounded,
      resizeMode,
      fade,
      ...other
    } = this.props

    const sx = [{
      height,
      width,
      backgroundColor,
      borderRadius: rounded ? height / 2 : 0
    }, style]

    return (
      <Base {...other}>
        <Animated.Image
          style={sx}
          onLoadEnd={() => {
            this.onLoad()
          }}
          source={source}
          resizeMode={resizeMode}
          {...imageProps}
        />
      </Base>
    )
  }

}

export default FadeImage
