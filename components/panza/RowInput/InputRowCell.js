import React, { PropTypes } from 'react'
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

const InputRowCell = ({ children, height, ...other }) => {

  let fixedHeight = height === 'auto' ? null : height

  let baseStyle = {
    alignSelf: 'stretch',
    padding: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: fixedHeight
  }

  return (
    <View style={styles.row}>
      <Base baseStyle={baseStyle} {...other}>
        {children}
      </Base>
    </View>
  )
}

InputRowCell.displayName = 'InputRowCell'

InputRowCell.defaultProps = {
  height: 50
}

export default InputRowCell


const styles = StyleSheet.create({
  row: {
    overflow: 'hidden'
  }
})
