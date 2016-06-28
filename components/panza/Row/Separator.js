import React, { PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  PixelRatio
} from 'react-native'

import Base from '../Base'

import { config } from '../index'

/**
 * A simple component used to separate rows, with an
 * optional inset margin on the left or right.
 */

const RowSeparator = ({ inset, insetRight, ...other }, { panza }) => {

  const { borderColor } = { ...config, ...panza }

  return (
    <Base
      baseStyle={[
        styles.separator,
        { backgroundColor: borderColor },
        inset && { marginLeft: inset },
        insetRight && { marginRight: insetRight }
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

RowSeparator.contextTypes = {
  panza: PropTypes.object
}

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth
  }
})

export default RowSeparator
