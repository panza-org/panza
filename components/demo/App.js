/*
@flow
 */

import React, { Component, PropTypes } from 'react'
import {
  View,
  Platform,
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
  customizeTheme,
  SearchIcon,
  Base,
  Text,
  CloseIcon,
  PopupMenu,
  PlusIcon,
  config
} from '../panza'

function noop(){}
//
// customizeTheme({
//   colors: {
//     primary: '#aaa'
//   }
// })

console.disableYellowBox = true

const defaultColors = config.colors
const myColors = Object.assign(
  {},
  defaultColors,
  // { primary: defaultColors.red }
)


class App extends Component {

  static childContextTypes = {
    panza: PropTypes.object
  }

  getChildContext() {
    return {
      panza: this.state.styles
    }
  }

  constructor() {
    super()

    this.state = {
      showing: false,
      content: (
        <View style={{ backgroundColor: 'white', height: 300 }}>
          <Text>
            Hello world
          </Text>
        </View>
      )
    }

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
        return (
          <NavTouchableIcon onPress={() => {
            this.setState({ showing: true })
          }}>
            <PlusIcon size={40}/>
          </NavTouchableIcon>

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
        <PopupMenu
          showing={this.state.showing}
          options={[
            { label: 'Share to Facebook', onPress: noop },
            { label: 'Share to Messenger', onPress: noop },
            { label: 'Tweet', onPress: noop },
            { label: 'Copy Share URL', onPress: noop },
            { label: 'Turn on Push Notifications', onPress: noop }
          ]}
          showCancel
          onRequestClose={() => this.setState({ showing: false })}
        >

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
        </PopupMenu>
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
