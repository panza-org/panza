import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet,
  PixelRatio
} from 'react-native'

import config from '../config'

/**
 * Used by <InputGroup /> to divide inputs, and apply
 * a pseudo border between them.
 */

const Divider = ({ style, inset, ...other }, { panza }) => {
  const { borderColor } = { ...config, ...panza }
  return (
    <View style={[
      styles.divider,
      style,
      inset && { marginLeft: inset },
        { backgroundColor: borderColor }
    ]} />
  )
}

Divider.displayName = 'Divider'

Divider.propTypes = {
  inset: PropTypes.number
}

Divider.contextTypes = {
  panza: PropTypes.object
}

const styles = StyleSheet.create({
  divider: {
    height: StyleSheet.hairlineWidth
  }
})

export default Divider
