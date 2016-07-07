import React, { PropTypes } from 'react'
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native'

import {
  PrimaryText,
  SecondaryText,
  LargeText,
  SubtitleText,
  Text,
  Base
} from '../panza'

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur dicta et impedit in, itaque, magnam modi nihil"

export default class TextExample extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text small>Small Text</Text>
        <Text medium>Medium Text</Text>
        <Text large>Large Text</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25
  }
})
