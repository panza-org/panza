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
  ...Platform.select({
    ios: {
      backgroundColor: 'white',
      borderBottomWidth: 1 / PixelRatio.get(),
      borderBottomColor: 'rgba(0,0,0,0.3)',
    },
    android: {
      backgroundColor: 'white',
      elevation: 2
    }
  })
}


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
          { title &&
            <NavTitle  color={titleColor} style={styles.titleStyle} label={title} />
          }

          {/*left content*/}
          <View>
            {LeftButton}
          </View>

          {/*right content*/}
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

Navbar.defaultStyles = defaultNavbarStyle

Navbar.propTypes = {
  title: PropTypes.string,
  LeftButton: PropTypes.node,
  RightButton: PropTypes.node
}

Navbar.totalNavHeight = Navigator.NavigationBar.Styles.General.TotalNavHeight

export default Navbar

const styles = StyleSheet.create({
  hasChildren: {
    height: Navigator.NavigationBar.Styles.General.TotalNavHeight + 80
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
    height: Navigator.NavigationBar.Styles.General.TotalNavHeight,
    justifyContent: 'space-between'
  },
  navBar: {
    ...defaultNavbarStyle,
    height: Navigator.NavigationBar.Styles.General.TotalNavHeight,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: 0, elevation: 2 }
    }),

  },
  titleStyle: {

   ...Platform.select({
     android: {
       position: 'absolute',
       left: 75,
       right: 0,
       bottom: 13
     },
     ios: {
       position: 'absolute',
       alignItems: 'center',
       right: 0,
       bottom: 13,
       left: 0,
       justifyContent: 'center',
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
