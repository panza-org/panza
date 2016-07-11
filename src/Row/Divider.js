import React, { PropTypes } from 'react'
import {
  StyleSheet
} from 'react-native'

import { Base } from '../index'
import { themeProvider } from '../config'

/**
 * A simple component used to separate rows, with an
 * optional inset margin on the left or right.
 */

const Divider = ({ inset, insetRight, panza, ...other }) => {

  const { borderColor } = panza

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

Divider.displayName = 'Divider'

Divider.propTypes = {
  inset: PropTypes.number,
  insetRight: PropTypes.number,

  /** theme provided by higher order component **/
  panza: PropTypes.object.isRequired
}

Divider.defaultProps = {
  inset: 0,
  insetRight: 0
}

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth
  }
})

export default themeProvider(Divider)
