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

import _ from 'lodash'

function mapPropsToStyleProps(props, propsMap) {
  return Object.assign({},
    buttonPropsMap.default,
    buttonPropsMap.medium,
    ..._.filter(propsMap, (v, k) => props[k]),
    props
  )
}

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
 */

const Button = ({
  block,
  children,
  icon,
  disabled,
  ...other
}) => {

  // determine our basic style props
  const props = mapPropsToStyleProps(other, buttonPropsMap)
  let textColor = other.outline
    ? props.borderColor
    : props.textColor

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
      {...props}
    >
      <View style={styles.buttonContent}>
        {iconNode}
        {child}
      </View>
    </Base>
  )
}

Button.propTypes = {

  /** button size **/
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,

  /** button theme **/
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  positive: PropTypes.bool,
  negative: PropTypes.bool,
  default: PropTypes.bool,

  children: PropTypes.node,

  /** disables the button, and reduces its opacity **/
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  underlayColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,

  /** stretch the button width **/
  block: PropTypes.bool,

  /** style text colour when using label prop **/
  textColor: PropTypes.string,

  /** optional icon **/
  icon: PropTypes.oneOf([PropTypes.string, PropTypes.node])
}

Button.displayName = 'Button'

Button.defaultProps = {
  theme: 'default',
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
