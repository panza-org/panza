import React, { PropTypes } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import config from '../config'
import color from 'color'

import {
  PrimaryText,
  Base
} from '../index'

/**
 * A basic button that inherits from Base, and provides colourization
 * based upon background color configuration.
 */

const Button = ({
  label,
  textColor,
  children,
  backgroundColor,
  underlayColor,
  ...other
}, { panza }) => {

  return (
    <Base
      Component={TouchableHighlight}
      baseStyle={styles.button}
      backgroundColor={backgroundColor}
      underlayColor={'darken'}
      {...other}>
        {children ||  (
          <View>
            <PrimaryText color={textColor}>{label}</PrimaryText>
          </View>
        )}
    </Base>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  underlayColor: PropTypes.string,
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'default',
    'info',
    'success',
    'warning',
    'error'
  ])
}

Button.displayName = 'ButtonBase'

Button.defaultProps = {
  theme: 'default',
  disabled: false,
  textColor: 'default'
}

Button.contextTypes = {
  panza: PropTypes.object
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabled: {
    opacity: 0.3
  }
})

export default Button
