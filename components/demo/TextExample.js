import React, { PropTypes } from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import {
  PrimaryText,
  SecondaryText,
  LargeText,
  SubtitleText,
  TextBase,
  Base
} from '../panza'

export default class TextExample extends React.Component {

  render() {
    return (
      <Base p={2}>
        <LargeText>LargeText</LargeText>
        <PrimaryText>PrimaryText</PrimaryText>
        <SecondaryText>SecondaryText</SecondaryText>
        <SecondaryText light>SecondaryText light</SecondaryText>
        <SubtitleText>SubtitleText</SubtitleText>
        <SubtitleText light>SubtitleText light</SubtitleText>
        <TextBase fontSize={0}>TextBase(0)</TextBase>
        <TextBase fontSize={1}>TextBase(1)</TextBase>
        <TextBase fontSize={2}>TextBase(2)</TextBase>
        <TextBase fontSize={3}>TextBase(3)</TextBase>
        <TextBase fontSize={3} bold color='primary'>TextBase(3) bold primary</TextBase>
        <TextBase fontSize={4} bold color='success'>TextBase(4) bold success</TextBase>
  </Base>
    )
  }
}
