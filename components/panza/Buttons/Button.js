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

  let child = (children && typeof children === 'string')
    ? <PrimaryText color={textColor}>{children}</PrimaryText>
    : children

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
      underlayColor={underlayColor}
      {...other}>
        <View style={styles.buttonContent}>
          {child || (
            <PrimaryText color={textColor}>{label}</PrimaryText>
          )}
        </View>
    </Base>
  )
}

Button.propTypes = {

  /** disables the button, and reduces its opacity **/
  disabled: PropTypes.bool,

  /** the text string for the button. alternatively, pass a Text as a child **/
  label: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  underlayColor: PropTypes.string,
  backgroundColor: PropTypes.string,

  /** stretch the button width **/
  block: PropTypes.bool,

  /** style text colour when using label prop **/
  textColor: PropTypes.string
}

Button.displayName = 'Button'

Button.defaultProps = {
  backgroundColor: 'info',
  disabled: false,
  textColor: 'white',
  underlayColor: 'darken',
  block: false,
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
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Button
