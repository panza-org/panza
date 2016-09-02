import React, { PropTypes } from 'react'
import {
  StyleSheet,
  Platform,
  View
} from 'react-native'
import {
  Text
} from '../index'

/**
 * Renders text stylized for the Navigation Bar title.
 *
 * On iOS it composes PrimaryText.
 *
 * On Android, it composes LargeText.
 *
 * @composes Text
 */

const NavTitle = ({
  label,
  color,
  inverted,
  children,
  style,
  ...other
}) => (
  <View style={[styles.container, style]}>
    {Platform.OS === 'ios'
      ? <Text color={color} inverted={inverted} bold {...other}>{label || children}</Text>
      : <Text color={color} inverted={inverted} bold {...other}>{label || children}</Text>
    }
  </View>
)

NavTitle.displayName = 'NavTitle'

NavTitle.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.any,
  inverted: PropTypes.bool
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default NavTitle
