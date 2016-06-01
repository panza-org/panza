import React, {PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  PixelRatio
} from 'react-native'

import Base from '../Base'

const RowSeparator = ({ inset, insetRight, ...other}) => {
  return (
    <Base
      baseStyle={[
        styles.separator,
        inset && { marginLeft: inset },
        insetRight && {marginRight: insetRight}
      ]}
      {...other}
    />
  )
}

RowSeparator.propTypes = {
  inset: PropTypes.number,
  insetRight: PropTypes.number
}


const styles = StyleSheet.create({
  separator: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#ccc'
  }
})

export default RowSeparator
