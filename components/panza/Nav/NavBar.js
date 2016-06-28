import React, { PropTypes } from 'react'

import {
  View,
  Text,
  Platform,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  PixelRatio
} from 'react-native'

import Base from '../Base'
import NavTitle from './NavTitle'
import NavTextAction from './NavTouchableText'

const defaultNavbarStyle = {
  backgroundColor: 'white',
  borderBottomWidth: 1 / PixelRatio.get(),
  borderBottomColor: 'rgba(0,0,0,0.3)'
}

/**
 * Static navigation bar that mimics that found
 * within ReactNative. To be used when you want a static
 * representation of the NavBar, without transitions.
 */

const Navbar = (props) => {

  const {
    style,
    children,
    title,
    transparent,
    backgroundColor,
    titleColor,
    LeftButton,
    RightButton,
    ...other
  } = props

  return (
    <Base
      baseStyle={styles.navWrapper}
      style={style}
      backgroundColor={backgroundColor}
      {...other}
    >
      <View style={[styles.navBar, children && styles.hasChildren, transparent && styles.transparent]}>
        <View style={styles.navTopRow}>
          {title &&
            <NavTitle
              color={titleColor}
              style={[styles.titleStyle, { ...Platform.select({
                web: {
                  left: LeftButton ? '40' : 0
                }
              }) }]}
              label={title}
            />
          }

          {/* left content*/}
          <View>
            {LeftButton}
          </View>

          {/* right content*/}
          <View>
            {RightButton}
          </View>


        </View>


        {children && (
          <View style={styles.children}>
            {children}
          </View>
        )}

      </View>
    </Base>
  )
}

Navbar.displayName = 'NavBar'

Navbar.defaultStyles = defaultNavbarStyle

Navbar.propTypes = {
  title: PropTypes.string,
  LeftButton: PropTypes.node,
  RightButton: PropTypes.node
}

Navbar.totalNavHeight = 56

export default Navbar

const styles = StyleSheet.create({
  hasChildren: {
    height: Navbar.totalNavHeight + 80
  },
  children: {
    height: 80,
    ...Platform.select({
      android: { marginTop: 0 }
    })
  },
  navTopRow: {
    flexDirection: 'row',
    flex: 1,
    height: Navbar.totalNavHeight,
    justifyContent: 'space-between',
    paddingBottom: 15,
    ...Platform.select({
      web: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 0
      }
    })
  },
  navBar: {
    ...defaultNavbarStyle,
    height: Navbar.totalNavHeight,
    flexDirection: 'column',
    backgroundColor: 'transparent',

    justifyContent: 'flex-start',
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: {
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 5
      }
    }),

  },
  titleStyle: {

    ...Platform.select({
      android: {
        position: 'absolute',
        left: 70,
        right: 0,
        bottom: 15
      },
      ios: {
        position: 'absolute',
        alignItems: 'center',
        right: 0,
        bottom: 30,
        left: 0,
        justifyContent: 'center',
      },
      web: {
        position: 'absolute',
        alignItems: 'flex-start',
        right: 0,
        bottom: 13,
        paddingLeft: 16,
        left: 0,
        // justifyContent: 'center',
      }
    })
  },
  transparent: {
    borderBottomWidth: 0,
    backgroundColor: 'transparent'
  },
  close: {
    height: 40,
    width: 40
  },
  navBarIcon: {
    marginVertical: 25
  },
  navWrapper: {
    // borderBottomWidth: 1 / PixelRatio.get(),
    // borderBottomColor: 'rgba(0,0,0,0.25)'
  }
})
