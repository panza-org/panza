import React, { PropTypes } from 'react'
import {
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

    /** set the border radius to be fully round (given an equal height/width) **/
    circular: PropTypes.bool,

    style: PropTypes.any,
    source: PropTypes.object.isRequired,
    resizeMode: PropTypes.string,

    /** the border radius of the image **/
    rounded: PropTypes.number
  }

  static defaultProps = {
    fade: true,
    resizeMode: 'cover',
    rounded: false,
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
      circular,
      rounded,
      resizeMode,
      ...other
    } = this.props

    const sx = [{
      height,
      width,
      opacity: this.state.fade
    }, style]

    return (
      <Base
        {...other}
        baseStyle={sx}
        onLoadEnd={() => {
          this.onLoad()
        }}
        rounded={(circular ? (height / 2) : rounded)}
        source={source}
        resizeMode={resizeMode}
        Component={Animated.Image}
      />
    )
  }

}

export default ImageBase
