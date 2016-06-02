/*
@flow
 */

import React, { Component } from 'react'
import {
  View,
  Platform,
  Text,
  StyleSheet,
  Navigator
} from 'react-native'
import ExampleList from './ExampleList'
import Buttons from './ButtonsExample'
import {
  NavBar,
  NavTitle,
  NavTouchableText,
  NavTouchableIcon,
  BackIcon,
  SearchIcon,
  Base,
  CloseIcon,
  PlusIcon
} from '../panza'

function noop(){}

console.disableYellowBox = true

class App extends Component {

  constructor() {
    super()

    this.NavigationBarRouteMapper = {

      LeftButton: (route, navigator, index) => {
        if (index === 0) return null
        return (
          <NavTouchableIcon onPress={() => navigator.pop()}>
            <BackIcon />
          </NavTouchableIcon>
        )
      },

      RightButton: (route, navigator, index) => {
        if (index === 0) return null
        return (
          <Base row flex={1} align='center'>
            {(Platform.OS === 'android' && (
              <NavTouchableIcon onPress={noop}>
                <SearchIcon />
              </NavTouchableIcon>
            ))}
            <NavTouchableIcon onPress={noop}>
              <PlusIcon size={40} androidSize={25} />
            </NavTouchableIcon>
          </Base>
        )
      },

      Title: (route) => {
        return <NavTitle label={route.name} />
      }

    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{ name: 'Home' }}
          style={styles.nav}
          sceneStyle={{ marginTop: NavBar.totalNavHeight, flex: 1, backgroundColor: 'white' }}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={this.NavigationBarRouteMapper}
              style={NavBar.defaultStyles}
            />
          }
          renderScene={(route, navigator) => {

            switch(route.name) {

              case 'Home':
                return (
                  <ExampleList
                    onSelect={(route) => {
                      console.log('push', route)
                      navigator.push(route)
                    }}
                  />
                )

              default:
                return <route.module />
            }
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nav: {
    flex: 1,
    backgroundColor: '#ddd'
  }
})

export default App
