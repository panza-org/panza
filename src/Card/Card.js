import React, { PropTypes } from 'react'
import {
  Base
} from '../index'
import {
  themeProvider
} from '../config'
import {
  StyleSheet
} from 'react-native'

/**
 * A very basic Card wrapper
 * @composes Base
 */

export const Card = ({
  children,
  panza,
  inverted,
  ...other
}) => {

  const {
    borderColor,
    invertedBorderColor
  } = panza

  const border = inverted
    ? invertedBorderColor
    : borderColor

  return (
    <Base mt={1} baseStyle={[ { borderColor: border }, styles.card]} {...other}>
      {children}
    </Base>
  )
}

Card.displayName = 'Card'

Card.propTypes = {
  children: PropTypes.node,
  inverted: PropTypes.bool,
  panza: PropTypes.object
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})

export default themeProvider(Card)
