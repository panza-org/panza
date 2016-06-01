import React, {PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  PixelRatio
} from 'react-native'

import Base from '../Base'

/**
 * A simple component used to separate rows, with an
 * optional inset margin on the left or right.
 */

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

RowSeparator.displayName = 'RowSeparator'

RowSeparator.propTypes = {
  inset: PropTypes.number,
  insetRight: PropTypes.number
}

RowSeparator.defaultProps = {
  inset: 0,
  insetRight: 0
}

const styles = StyleSheet.create({
  separator: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#ccc'
  }
})

export default RowSeparator
