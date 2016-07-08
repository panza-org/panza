import React, { PropTypes } from 'react'
import {
  ScrollView,
  Dimensions
} from 'react-native'

import {
  Image,
  Base
} from '../panza'

const screen = Dimensions.get('window')

const URL = 'https://s-media-cache-ak0.pinimg.com/236x/d0/48/8b/d0488bf62c88505964faf542afebfd00.jpg'

export default class ImageExample extends React.Component {

  render() {
    return (
      <ScrollView>
        <Base>
          <Image
            my={1}
            width={screen.width}
            height={300}
            source={{ uri: URL }}
          />

          <Image
            my={1}
            width={100}
            height={100}
            circular
            source={{ uri: URL }}
          />

        </Base>
      </ScrollView>
    )
  }
}
