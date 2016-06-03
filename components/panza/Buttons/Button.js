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
  block,
  children,
  backgroundColor,
  disabled,
  underlayColor,
  ...other
}, { panza }) => {

  return (
    <Base
      Component={TouchableHighlight}
      accessibilityComponentType='button'
      disabled={disabled}
      baseStyle={[
        styles.button,
        block && styles.block,
        disabled && styles.disabled
      ]}
      backgroundColor={backgroundColor}
      underlayColor={'darken'}
      {...other}>
        <View>
          {children || (
            <PrimaryText color={textColor}>{label}</PrimaryText>
          )}
        </View>
    </Base>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onPress: PropTypes.func.isRequired,
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
  backgroundColor: 'info',
  disabled: false,
  textColor: 'white',
  p: 2
}

Button.contextTypes = {
  panza: PropTypes.object
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    borderRadius: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  disabled: {
    opacity: 0.2
  },
  block: {
    alignSelf: 'stretch'
  }
})

export default Button
