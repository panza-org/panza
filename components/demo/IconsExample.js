import React, { PropTypes } from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import {
  Icon,
  ArrowRightIcon,
  PlusIcon,
  CloseIcon,
  BackIcon,
  PrimaryText,
  TouchableIcon,
  MoreIcon,
  SearchIcon,
  Base
} from '../panza'

export default class IconExample extends React.Component {

  render() {
    return (
      <ScrollView>
        <Base p={2}>
          <PrimaryText>ArrowRightIcon</PrimaryText>
          <ArrowRightIcon/>
        </Base>
        <Base p={2}>
          <PrimaryText>PlusIcon</PrimaryText>
          <PlusIcon />
        </Base>
        <Base p={2}>
          <PrimaryText>CloseIcon</PrimaryText>
          <CloseIcon />
        </Base>
        <Base p={2}>
          <PrimaryText>BackIcon</PrimaryText>
          <BackIcon />
        </Base>
        <Base p={2}>
          <PrimaryText>MoreIcon</PrimaryText>
          <MoreIcon />
        </Base>
        <Base p={2}>
          <PrimaryText>SearchIcon</PrimaryText>
          <SearchIcon />
        </Base>

        <Base p={2}>
          <PrimaryText>TouchableIcon</PrimaryText>
          <TouchableIcon>
            <MoreIcon color='black' />
          </TouchableIcon>
        </Base>

      </ScrollView>
    )
  }
}
