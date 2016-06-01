import React, {PropTypes} from 'react'
var {
  View,
  Text,
  StyleSheet
} = require('react-native')

import FadeImage from '../Image/FadeImage'
import Base from '../Base'

class RowImage extends React.Component {

  static displayName = 'RowImage'

  static propTypes = {
    source: PropTypes.object.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
    rounded: PropTypes.bool
  }

  static defaultProps = {
    height: 48,
    width: 48,
    rounded: true
  }

  render () {
    var {
      source,
      height,
      width,
      style,
      rounded,
      ...other
    } = this.props

    return (
      <Base {...other}>
        <FadeImage
          fade
          width={width}
          height={height}
          rounded={rounded}
          source={source}
        />
      </Base>
    )

  }
}

export default RowImage
