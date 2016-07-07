import React from 'react'
import {
  ScrollView,
  StyleSheet
} from 'react-native'

import {
  Text
} from '../panza'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Animi aspernatur dicta et impedit in, itaque, magnam modi nihil`

export default class TextExample extends React.Component {

  render() {

    return (
      <ScrollView style={styles.container}>
        <Text tiny>{lorem}</Text>
        <Text small>{lorem}</Text>
        <Text>{lorem}</Text>
        <Text large>{lorem}</Text>
        <Text giant>{lorem}</Text>
        <Text bold>BOLD</Text>
        <Text thin>THIN</Text>
        <Text thick>THICK</Text>
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
