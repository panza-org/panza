import React, { PropTypes } from 'react'
import {
  Base,
  config
} from '../index'
import {
  StyleSheet
} from 'react-native'

/**
 * A very basic Card wrapper
 * @composes Base
 */

const Card = ({
  children,
  ...other
}, { panza }) => {
  const { borderColor } = { ...config, ...panza }
  return (
    <Base mt={1} baseStyle={[ { borderColor }, styles.card]} {...other}>
      {children}
    </Base>
  )
}

Card.displayName = 'Card'

Card.propTypes = {
  children: PropTypes.node
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})

export default Card
