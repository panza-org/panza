import {
  Button,
  PrimaryButton,
  WarningButton,
  ErrorButton,
  SuccessButton,
  NakedButton,
  SectionHeader,
  Base,
  VerticalButtonGroup
} from '../panza'

import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'

function noop() {}

export default class Buttons extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
          onPress={() => {
            console.log('hello world')
          }}
          mt={1}
          label='DefaultButton'
        />
        <Button
          onPress={() => {
            console.log('hello world')
          }}
          mt={1}
          p={1}
          label='DefaultButton smaller'
        />

        <SuccessButton
          mt={1}
          onPress={() => {
            console.log('hello world')
          }}
          label='SuccessButton'
        />
        <WarningButton
          mt={1}
          onPress={() => {
            console.log('hello world')
          }}
          label='WarningButton'
        />
        <ErrorButton
          mt={1}
          onPress={() => {
            console.log('hello world')
          }}
          label='ErrorButton'
        />
      <NakedButton
          mt={1}
          onPress={() => {
            console.log('hello world')
          }}
          label='NakedButton'
        />
      <Button
        py={1}
        px={2}
        mt={1}
        onPress={() => {
          console.log('hello')
        }}
        textColor='black'
        backgroundColor='white'
        label='Custom'
        style={{
          borderWidth: 1,
          alignSelf: 'center',
          width: 150,
          borderColor: 'black'
        }}
      />
    <Base py={3}>
      <VerticalButtonGroup
        mt={2}
        px={2}
        options={[
          {
            label: 'Primary Button',
            onSelect: noop
          },
          {
            label: 'Secondary Button',
            onSelect: noop
          }
        ]}
      />
  </Base>
  </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: 'white'
  }
})
