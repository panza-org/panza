import React, {PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  PixelRatio
} from 'react-native'

import { Base } from '../index'

/**
 * Input row cell
 */

const InputRowCell = ({children, height, ...other}) => {

  let fixedHeight = height === 'auto' ? null : height

  return (
    <View style={styles.row}>
      <Base baseStyle={[styles.rowContainer, { height: fixedHeight }]} {...other}>
        {children}
      </Base>
    </View>
  )
}

InputRowCell.defaultProps = {
  height: 50
}

InputRowCell.displayName = 'InputRowCell'

export default InputRowCell

const HEIGHT = 50

const styles = StyleSheet.create({
  row: {
    overflow: 'hidden'
  },
  rowContainer: {
    height: HEIGHT,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  }
})
