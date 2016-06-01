import React, {PropTypes} from 'react'
import {
  StyleSheet,
  Platform,
  View
} from 'react-native'
import {
  PrimaryText,
  LargeText
} from '../index'

const NavTitle = ({label, color, children, style, ...other}) => {

  return (
    <View style={[styles.container, style]}>
      {Platform.OS === 'ios'
        ? <PrimaryText color={color} bold>{label || children}</PrimaryText>
        : <LargeText color={color}>{label || children}</LargeText>
      }
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default NavTitle
