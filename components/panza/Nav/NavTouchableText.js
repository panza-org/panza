import React, { PropTypes } from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import {
  NavButton,
  PrimaryText,
  TextBase
} from '../index'

/**
 * Makes a touchable text component for the NavBar. Typically
 * used on iOS.
 */

const NavTouchableText = ({
  children,
  disabled,
  color,
  ...other
}) => {

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TextBase
        Component={TouchableOpacity}
        baseStyle={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 5, paddingTop: 5, opacity: disabled ? 0.3 : 1 }}
        disabled={disabled}
        {...other}
      >
          <PrimaryText color={color} style={{ opacity: disabled ? 0.5 : 1 }}>{children}</PrimaryText>
      </TextBase>
    </View>
  )

}

NavTouchableText.displayName = 'NavTouchableText'

NavTouchableText.defaultProps = {
  color: 'primary'
}

export default NavTouchableText
