import {
  Button,
  InfoButton,
  PrimaryButton,
  WarningButton,
  ErrorButton,
  SuccessButton,
  NakedButton,
  SectionHeader,
  SecondaryText,
  PlusIcon,
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
        <Button rounded={false} mt={1}>
          Not rounded
        </Button>
        <Button
          backgroundColor='#aaaaaa'
          mt={1}
          onPress={() => {
            console.log('hi')
          }}>
            Hello world
        </Button>
        <Button
          onPress={() => {
            console.log('hello world')
          }}
          mt={1}
          label='DefaultButton'
        />
        <Button
          block
          onPress={() => {
            console.log('hello world')
          }}
          mt={1}
          label='Button with block'
        />
        <Button
          onPress={() => {
            console.log('hello world')
          }}
          mt={1}
          p={1}>
        <SecondaryText color='white'>Button with custom text style</SecondaryText>
      </Button>

      <SuccessButton mt={1} p={0} px={1} onPress={() => {
          console.log('hello')
        }}>
          <PlusIcon color='white' mr={1}/>
          <SecondaryText color='white'>Add New Me</SecondaryText>
      </SuccessButton>

      <Button>text</Button>

      <SuccessButton
        mt={1}
        disabled
        onPress={() => {

        }}
        label='disabled'
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
    <Button
      mt={1}
      onPress={() => {
        console.log('hello underworld')
      }}
      underlayColor='red'>
        Custom underlay color
      </Button>

      <Button
        mt={1}
        backgroundColor='#fa8ddd'
        underlayColor='darken'
        onPress={() => {

        }}>
          custom color
        </Button>
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
