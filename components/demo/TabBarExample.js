import React, {PropTypes} from 'react'
import {
  View,
  Text,
  ScrollView,
  Platform
} from 'react-native'

import {
  Base,
  TabBar
} from '../panza'

function noop() {
}

export default class NavBarExample extends React.Component {
  render() {
    return (
      <ScrollView>

          <TabBar
            tabs={['First', 'Second', 'Third']}
            goToPage={noop}
            my={2}
          />

          <TabBar
            tabs={['First', 'Second', 'Third', 'Fourth']}
            underlineColor='green'
            activeTextColor='green'
            underlineHeight={4}
            height={60}
            activeTab={2}
            backgroundColor='black'
            onTabPress={noop}
            my={2}
          />

      </ScrollView>
    )
  }
}
