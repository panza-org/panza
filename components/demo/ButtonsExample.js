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
  Text,
  VerticalButtonGroup,
  ButtonGroup
} from '../panza'

import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native'

function noop() {}

export default class Buttons extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Button onPress={() => console.log('blah')}>
            Default Button
          </Button>
          <Button onPress={noop} primary mt={1}>
            Primary Button
          </Button>
          <Button onPress={() => console.log('bacon')} primary rounded={25} outline mt={1}>
            Primary Outline Rounded 25
          </Button>
          <Button secondary rounded={0} mt={1}>
            Secondary Button
          </Button>
          <Button positive mt={1}>
            Positive Button
          </Button>
          <Button negative mt={1}>
            Negative Button
          </Button>
          <Button negative large mt={1}>
            Large Negative
          </Button>
          <Button negative small mt={1}>
            Small Negative
          </Button>
          <Button primary mt={1} outline icon='ios-add-outline'>
            Primary Outline Icon
          </Button>
          <Button onPress={noop} textColor='primary' transparent my={1}>
            Transparent Primary Button
          </Button>
          <Button onPress={noop} block>
            Default Block
          </Button>
          <Button onPress={noop} disabled mt={1}>
            Disabled Button
          </Button>
          <Button onPress={noop} backgroundColor='#eee' borderColor='#eee' mt={1} textColor='red'>
            Custom props
          </Button>
          <Button mt={1}>
            <Text size='large' textColor='blue'>Custom Child</Text>
          </Button>

          <Base mt={2} p={2}>
            <ButtonGroup segmented rounded={5}>
              <Button primary>One</Button>
              <Button primary outline onPress={noop}>Two</Button>
              <Button primary outline onPress={noop}>Three</Button>
            </ButtonGroup>

            <ButtonGroup mt={2} segmented rounded={5}>
              <Button positive>One</Button>
              <Button positive outline>Two</Button>
            </ButtonGroup>

            <ButtonGroup mt={2} vertical>
              <Button primary>Primary Vertical</Button>
              <Button transparent mt={1}>Secondary Option</Button>
            </ButtonGroup>

            <ButtonGroup mt={2}>
              <Button onPress={noop} transparent icon='ios-add-outline'>
                One
              </Button>
              <Button onPress={noop} transparent icon='ios-add-outline'>
                Two
              </Button>
              <Button onPress={noop} transparent icon='ios-add-outline'>
                Three
              </Button>
            </ButtonGroup>
          </Base>

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})
