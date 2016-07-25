import React, { PropTypes } from 'react'
import {
  View,
  TouchableOpacity
} from 'react-native'

import {
  Text,
  Base
} from '../index'

/**
 * Makes a touchable text component for the NavBar. Typically
 * used on iOS.
 *
 * @composes TextBase
 */

const NavTouchableText = ({
  children,
  disabled,
  inverted,
  bold,
  color,
  ...other
}) => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Base
      Component={TouchableOpacity}
      px={2}
      baseStyle={{
        paddingBottom: 5,
        paddingTop: 5,
        opacity: disabled ? 0.3 : 1
      }}
      disabled={disabled}
      {...other}
    >
      <Text
        bold={bold}
        color={color}
        inverted={inverted}
        style={{ opacity: disabled ? 0.5 : 1 }}
      >
        {children}
      </Text>
    </Base>
  </View>
)

NavTouchableText.displayName = 'NavTouchableText'

NavTouchableText.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  bold: PropTypes.bool,
  inverted: PropTypes.bool
}

NavTouchableText.defaultProps = {
  color: 'primary'
}

export default NavTouchableText
