import React, { PropTypes } from 'react'
import {
  StyleSheet,
  Platform,
  View
} from 'react-native'
import {
  PrimaryText,
  LargeText
} from '../index'

/**
 * Renders text stylized for the Navigation Bar title.
 *
 * On iOS it composes PrimaryText.
 *
 * On Android, it composes LargeText.
 */

const NavTitle = ({ label, color, children, style, ...other }) => {

  return (
    <View style={[styles.container, style]}>
      {Platform.OS === 'ios'
        ? <PrimaryText color={color} bold>{label || children}</PrimaryText>
        : <LargeText color={color}>{label || children}</LargeText>
      }
    </View>
  )
}

NavTitle.displayName = 'NavTitle'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default NavTitle
