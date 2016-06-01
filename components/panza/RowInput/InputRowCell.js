import React, {PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  PixelRatio
} from 'react-native'

import { Base } from '../index'

const InputRowCell = ({children, ...other}) => {

  return (
    <View style={styles.row}>
      <Base baseStyle={styles.rowContainer} {...other}>
        {children}
      </Base>
    </View>
  )
}

export default InputRowCell

const HEIGHT = 50

const styles = StyleSheet.create({
  row: {
    overflow: 'hidden'
  },
  rowContainer: {
    height: HEIGHT,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  }
})
