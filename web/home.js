import React from 'react'
import { render } from 'react-dom'
import Home from './components/Home'

import { AppRegistry } from 'react-native'

AppRegistry.registerComponent('Home', () => Home)
AppRegistry.runApplication('Home', { rootTag: document.getElementById('app') })
