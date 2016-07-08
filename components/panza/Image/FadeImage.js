import React, { PropTypes } from 'react'
import {
  Image,
  Animated
} from 'react-native'

import {
  Base
} from '../index'

/**
 * Fade-in an image when it loads.
 */

class ImageBase extends React.Component {

  static displayName = 'ImageBase'

  static propTypes = {
    fade: PropTypes.bool,
    onLoadEnd: PropTypes.func,
    height: PropTypes.number,
    width: PropTypes.number,
    circular: PropTypes.bool,
    imageProps: PropTypes.object,
    style: PropTypes.any,
    source: PropTypes.object.isRequired,
    resizeMode: PropTypes.string
  }

  static defaultProps = {
    fade: true,
    resizeMode: 'cover',
    rounded: false,
    imageProps: {},
    circular: false
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
      circular,
      resizeMode,
      ...other
    } = this.props

    const sx = [{
      height,
      width,
      borderRadius: circular ? height / 2 : 0,
      opacity: this.state.fade
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

export default ImageBase
