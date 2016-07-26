import React, { PropTypes } from 'react'
import {
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

import {
  Text,
  Base,
  Icon
} from '../index'

import mapToProps from '../utils/mapPropsToStyles'

/** Basic button styles **/
const buttonPropsMap = {
  large: { height: 55, px: 3 },
  small: { height: 30, px: 1 },
  medium: { height: 40, px: 2 },
  default: {
    backgroundColor: 'midgray',
    textColor: 'white',
    borderColor: 'midgray',
    underlayColor: 'darken'
  },
  primary: {
    backgroundColor: 'primary',
    textColor: 'white',
    borderColor: 'primary',
    underlayColor: 'darken'
  },
  secondary: {
    backgroundColor: 'secondary',
    textColor: 'white',
    borderColor: 'secondary',
    underlayColor: 'darken'
  },
  positive: {
    backgroundColor: 'positive',
    textColor: 'white',
    borderColor: 'positive',
    underlayColor: 'darken'
  },
  negative: {
    backgroundColor: 'negative',
    textColor: 'white',
    borderColor: 'negative',
    underlayColor: 'darken'
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    underlayColor: '#eee',
    textColor: 'default'
  },
  transparent: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent',
    underlayColor: 'transparent',
    textColor: 'default'
  }
}

/**
 * A basic button that inherits from Base, and provides colourization
 * based upon background color configuration.
 * @Composes Base, Text, Icon
 */

export const Button = ({
  block,
  children,
  icon,
  disabled,
  ...other
}) => {

  // determine our basic style props
  const defaults = { ...buttonPropsMap.medium, ...buttonPropsMap.default }
  const mappedProps = mapToProps(other, buttonPropsMap, defaults)

  // set backgroundColor explicitly to avoid problems
  // with iteration order overwriting props
  let backgroundColor = other.outline
    ? 'transparent'
    : mappedProps.backgroundColor

  let textColor = other.outline
    ? mappedProps.borderColor
    : mappedProps.textColor

  // create our text component if necessary
  const child = (children && typeof children === 'string')
    ? (
    <Text
      color={textColor}
      large={other.large}
      medium={other.medium}
      small={other.small}
    >
        {children}
    </Text>
  )
    : children

  // create an icon if necessary
  const iconNode = (icon && typeof icon === 'string')
    ? <Icon name={icon} mr={1} size={25} color={textColor} />
    : icon

  const traits = ['button']
  if (disabled) traits.push('disabled')

  return (
    <Base
      Component={TouchableHighlight}
      accessibilityComponentType='button'
      accessibilityTraits={traits}
      disabled={disabled}
      baseStyle={[
        styles.button,
        block && styles.block,
        disabled && styles.disabled
      ]}
      {...mappedProps}
      backgroundColor={backgroundColor}
    >
      <View style={styles.buttonContent}>
        {iconNode}
        {child}
      </View>
    </Base>
  )
}

Button.propTypes = {

  /** button size */
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,

  /** Uses the primary colour to style the button. */
  primary: PropTypes.bool,

  /** Uses the secondary colour to style the button. */
  secondary: PropTypes.bool,

  /** Uses the positive colour to style the button. */
  positive: PropTypes.bool,

  /** Uses the negative colour to style the button. */
  negative: PropTypes.bool,

  /** Uses the midgray colour to style the button. */
  default: PropTypes.bool,

  /** Use an outline button style **/
  outline: PropTypes.bool,

  /** Accepts either a text string or a custom node */
  children: PropTypes.node,

  /** disables the button, and reduces its opacity */
  disabled: PropTypes.bool,
  rounded: PropTypes.number,
  onPress: PropTypes.func,
  underlayColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,

  /** stretch the button width */
  block: PropTypes.bool,

  /** optional icon string or node */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

Button.displayName = 'Button'

Button.defaultProps = {
  size: 'medium',
  disabled: false,
  outline: false,
  block: false,
  rounded: 6
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderWidth: 2
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
