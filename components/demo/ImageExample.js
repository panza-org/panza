import React, { PropTypes } from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import {
  FadeImage,
  PrimaryText,
  SecondaryText,
  Base
} from '../panza'

export default class ImageExample extends React.Component {

  render() {
    return (
    <ScrollView>
      <Base p={2}>
        <PrimaryText>FadeImage</PrimaryText>
        <FadeImage
          my={1}
          height={100}
          width={100}
          source={{uri: 'https://s-media-cache-ak0.pinimg.com/236x/d0/48/8b/d0488bf62c88505964faf542afebfd00.jpg'}}
          />
        <SecondaryText light>
          Fade in the image once it has loaded, & show a coloured placedholder in its place.
        </SecondaryText>
      </Base>
    </ScrollView>
    )
  }
}
