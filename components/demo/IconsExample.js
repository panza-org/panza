import React, { PropTypes } from 'react'
import {
  ScrollView
} from 'react-native'

import {
  Icon,
  ArrowRightIcon,
  PlusIcon,
  CloseIcon,
  BackIcon,
  Text,
  TouchableIcon,
  MoreIcon,
  CheckMark,
  SearchIcon,
  Base
} from '../panza'

export default class IconExample extends React.Component {

  state = {
    checked: false
  }

  render() {
    return (
      <ScrollView>
        <TouchableIcon onPress={() => this.setState({ checked: !this.state.checked })}>
          <CheckMark
            isChecked={this.state.checked}
          />
        </TouchableIcon>


        <Base p={2}>
          <Text>ArrowRightIcon</Text>
          <ArrowRightIcon/>
        </Base>
        <Base p={2}>
          <Text>PlusIcon</Text>
          <PlusIcon />
        </Base>
        <Base p={2}>
          <Text>CloseIcon</Text>
          <CloseIcon />
        </Base>
        <Base p={2}>
          <Text>BackIcon</Text>
          <BackIcon />
        </Base>
        <Base p={2}>
          <Text>MoreIcon</Text>
          <MoreIcon />
        </Base>
        <Base p={2}>
          <Text>SearchIcon</Text>
          <SearchIcon />
        </Base>

        <Base p={2}>
          <Text>TouchableIcon</Text>
          <TouchableIcon>
            <MoreIcon color='black' />
          </TouchableIcon>
        </Base>

      </ScrollView>
    )
  }
}
