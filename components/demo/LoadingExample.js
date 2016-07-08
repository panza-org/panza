import React, { PropTypes } from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import {Loader} from '../panza'


export default class LoadingExample extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Loader />
        </View>
        <View style={{ width: 200, height: 50, borderWidth: 1 }}>
          <Loader />
        </View>
      </View>
    )
  }
}
