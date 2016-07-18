import React, { PropTypes } from 'react'
import {
  StyleSheet
} from 'react-native'

import { Base } from '../index'

/**
 * Input row cell
 */

const InputRowCell = ({ children, height, ...other }) => {

  const fixedHeight = height === 'auto' ? null : height

  return (
    <Base {...other} baseStyle={styles.baseStyle} height={fixedHeight}>
      {children}
    </Base>
  )
}

InputRowCell.displayName = 'InputRowCell'

InputRowCell.propTypes = {
  children: PropTypes.any,
  height: PropTypes.number
}

InputRowCell.defaultProps = {
  height: 50
}

export default InputRowCell

const styles = StyleSheet.create({
  row: {
    overflow: 'hidden'
  },
  baseStyle: {
    alignSelf: 'stretch',
    padding: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0
  }
})
