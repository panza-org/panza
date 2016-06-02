import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Dimensions,
  ScrollView
} from 'react-native'

import {
  SubNav,
  FadeImage,
  InputGroup,
  InputRow,
  InputDatePicker,
  RemovableInput,
  TouchableInput,
  AddRow
} from '../panza'

const screen = Dimensions.get('window')

function noop() {}

export default class AllTogetherNow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      date: new Date(),
      showDate: false,
      homePhone: '17802992244'
    }
  }

  render() {
    return (
      <View>
      <ScrollView style={{ backgroundColor: '#fafafa'}}>
          <FadeImage
            style={{ height: 150, width: screen.width }}
            source={{ uri: 'https://s-media-cache-ak0.pinimg.com/236x/d0/48/8b/d0488bf62c88505964faf542afebfd00.jpg'}}
            />
          <InputGroup label='ABOUT ME' mt={3} backgroundColor='white' inset={16}>
            <InputRow
              placeholder='First name'
              maxLength={30}
              value={this.state.firstName}
            />
            <InputRow
              placeholder='Last name'
              maxLength={30}
              value={this.state.lastName}
            />
            <InputDatePicker
              hasFocus={this.state.showDate}
              label={'Date of birth'}
              onRequestFocus={() => {
                this.setState({ showDate: true })
              }}
              onRequestClose={() => {
                this.setState({ showDate: false })
              }}
              onDateChange={(date) => {
                this.setState({ date })
              }}
              value={new Date(this.state.date).getFullYear().toString()}
              date={this.state.date}
            />
            </InputGroup>

            <InputGroup backgroundColor='white' inset={16} mt={3}>
              <RemovableInput
                label='home'
                removable
                onRemove={noop}
                onSelectLabel={noop}
                onChangeText={() => {}}
                value={this.state.homePhone}
              />
              <AddRow
                condensed
                onPress={() => {

                }}
                label='add phone number'
              />
            </InputGroup>

            <InputGroup backgroundColor='white' inset={16} mt={3} label='SETTINGS'>
              <TouchableInput
                label='Notifications'
                value='on'
                showMore
              />
            <TouchableInput
              label='Sign out'
              showMore
            />
            </InputGroup>

        </ScrollView>
      </View>
    )
  }
}
