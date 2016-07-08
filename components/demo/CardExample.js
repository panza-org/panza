import React, { PropTypes } from 'react'
import {
  View,
  Dimensions,
  ScrollView
} from 'react-native'

import {
  Card,
  CardHeader,
  Image,
  Text,
  Base,
  Divider,
  ButtonGroup,
  Button,
  TouchableIcon,
  Icon
} from '../panza'

function noop() {}

const screen = Dimensions.get('window')

export default class CardExample extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
        <Card>
          <CardHeader
            avatar='http://placehold.it/128/08e/fff'
            title='Ben McMahen'
            subtitle='October 7, 2016'
          >
            <TouchableIcon>
              <Icon name='ios-arrow-down' size={20} light />
            </TouchableIcon>
          </CardHeader>
          <Image
            backgroundColor='#eee'
            style={{ width: screen.width, height: 250 }}
            source={{ uri: 'http://placehold.it/300/08e/fff' }}
          />
          <Base p={2}>
            <Text large bold mb={1}>Card Title</Text>
            <Text lineHeight={2} small>
              Ad id Lorem officia reprehenderit magna commodo ut voluptate. Ex ipsum in exercitation in officia reprehenderit dolor tempor.
            </Text>
          </Base>
          <Divider />
          <ButtonGroup py={1}>
            <Button small onPress={noop} transparent icon='ios-heart-outline'>
              Like
            </Button>
            <Button small onPress={noop} transparent icon='ios-text-outline'>
              Comment
            </Button>
            <Button small onPress={noop} transparent icon='ios-share-outline'>
              Share
            </Button>
          </ButtonGroup>
        </Card>
      </View>
    )
  }
}
