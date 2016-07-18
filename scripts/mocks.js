import React from 'react'
import { View } from 'react-native'

function createMockComponent(displayName) {
  return React.createClass({ // eslint-disable-line
    displayName: 'Icon',
    render() {
      return <View />
    }
  })
}

// RN Vector Icons
const key = require.resolve('react-native-vector-icons/Ionicons')

const VectorIcons = {
  Icon: createMockComponent('Icon')
}

require.cache[key] = {
  id: key,
  filename: key,
  loaded: true,
  exports: VectorIcons
}
