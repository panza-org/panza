import React from 'react'
import {
  Base,
  Button,
  Popup,
  Text
} from '../panza'
import {
  View,
  ScrollView
} from 'react-native'

export default class PopupExample extends React.Component {

  state = {
    showing: false
  }
  render() {

    const Content = (
      <View style={{ flex: 1, height: 100, backgroundColor: 'red' }}>
        <Text>hello</Text>
      </View>
    )

    return (
      <Popup
        Content={Content}
        onRequestClose={() => this.setState({ showing: false })}
        showing={this.state.showing}
        flex={1}
      >
        <ScrollView style={{ flex: 1 }}>
          <Base p={3}>
            <View>
              <Button primary onPress={() => this.setState({ showing: true })}>
                Show Popup
              </Button>
            </View>
          </Base>
        </ScrollView>
      </Popup>
    )
  }
}
