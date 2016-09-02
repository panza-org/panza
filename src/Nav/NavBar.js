import React, { PropTypes } from 'react'

import {
  View,
  Platform,
  StyleSheet,
  PixelRatio
} from 'react-native'

import Base from '../Base'
import NavTitle from './NavTitle'
import { themeProvider } from '../config'

const defaultNavbarStyle = {
  borderBottomWidth: 1 / PixelRatio.get(),
  borderBottomColor: 'rgba(0,0,0,0.3)'
}

/**
 * Static navigation bar that mimics that found
 * within ReactNative. To be used when you want a static
 * representation of the NavBar, without transitions.
 *
 * @Composes Base, NavTitle
 */

const Navbar = (props) => {

  const {
    style,
    children,
    title,
    transparent,
    inverted,
    backgroundColor,
    titleColor,
    LeftButton,
    RightButton,
    panza,
    ...other
  } = props

  const { borderColor, invertedBorderColor } = panza
  const border = inverted ? invertedBorderColor : borderColor

  return (
    <Base
      baseStyle={styles.navWrapper}
      style={style}
      backgroundColor={backgroundColor}
      {...other}
    >
      <View
        style={[
          styles.navBar,
          children && styles.hasChildren,
          transparent && styles.transparent,
          { borderBottomColor: border }
        ]}
      >
        <View style={styles.navTopRow}>
          {title &&
            <NavTitle
              color={titleColor}
              inverted={inverted}
              style={[styles.titleStyle, { ...Platform.select({
                web: {
                  left: LeftButton ? '35' : 0
                }
              }) }]}
              label={title}
            />
          }

          {/* left content*/}
          <View style={styles.buttonStyle}>
            {LeftButton}
          </View>

          {/* right content*/}
          <View style={styles.buttonStyle}>
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
  RightButton: PropTypes.node,
  style: PropTypes.any,
  children: PropTypes.node,
  transparent: PropTypes.bool,
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  inverted: PropTypes.bool,
  panza: PropTypes.object.isRequired
}

Navbar.totalNavHeight = Platform.select({
  ios: 44 + 20,
  android: 56,
  web: 44 + 20
})

export default themeProvider(Navbar)

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
    paddingBottom: 16,
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
    justifyContent: 'flex-start',
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: {
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5
      }
    }),

  },
  buttonStyle: {
    ...Platform.select({
      android: {
        // paddingTop: 15
      }
    })
  },
  titleStyle: {

    ...Platform.select({
      android: {
        position: 'absolute',
        left: 70,
        right: 0,
        top: 0,
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
        bottom: 19,
        paddingLeft: 16,
        left: 0,
        // justifyContent: 'center',
      }
    })
  },
  transparent: {
    borderBottomWidth: 0,
    backgroundColor: 'transparent'
  }
})
