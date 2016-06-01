import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet,
  PixelRatio
} from 'react-native'

import config from '../config'

const Divider = ({style, inset, ...other}, {panza}) => {
  const { borderColor } = {...config, ...panza}
  return (
    <View style={[
        styles.divider,
        style,
        inset && { marginLeft: inset },
        { backgroundColor: borderColor }
      ]} />
  )
}

Divider.propTypes = {
  inset: PropTypes.number
}

Divider.contextTypes = {
  panza: PropTypes.object
}

const styles = StyleSheet.create({
  divider: {
    height: 1 / PixelRatio.get()
  }
})

export default Divider
