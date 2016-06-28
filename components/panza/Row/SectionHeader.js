import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Platform,
  StyleSheet,
  PixelRatio,
  LayoutAnimation
} from 'react-native'
import {
  Base,
  SubtitleText
} from '../index'

/**
 * SectionHeader is used for rendering a section header within a ListView.
 * Supply text as the child.
 */

const SectionHeader = ({
  backgroundColor,
  children,
  ...other
}) => {

  return (
    <Base
      backgroundColor={backgroundColor}
      baseStyle={styles.header} {...other}
    >
      <SubtitleText light>{children}</SubtitleText>
    </Base>
  )
}

SectionHeader.displayName = 'SectionHeader'

SectionHeader.propTypes = {
  backgroundColor: PropTypes.string
}

SectionHeader.defaultProps = {
  backgroundColor: 'gray'
}

export default SectionHeader

const styles = StyleSheet.create({
  header: {
    padding: 7,
    paddingLeft: 15,
    overflow: 'hidden',
    ...Platform.select({
      android: {
        // borderBottomColor: 'transparent',
        // borderBottomWidth: 0,
        // backgroundColor: '#bdc3c7',
        // marginTop: 0
      }
    }),
  },
  headerText: {
    fontWeight: '400',
    color: '#999',
    fontSize: 13,
    letterSpacing: 0.3,
    // ...Platform.select({
    //   android: {
    //     fontSize: 15,
    //     fontWeight: '400',
    //     letterSpacing: 0,
    //     color: 'white'
    //   }
    // })
  }
})
