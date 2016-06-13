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

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur dicta et impedit in, itaque, magnam modi nihil, obcaecati quae quia recusandae reprehenderit similique tenetur voluptatibus. Ad omnis qui sapiente!"

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
        <SecondaryText lineHeight={0}>{'LineHeight(0), ' + lorem}</SecondaryText>
        <SecondaryText lineHeight={1}>{'LineHeight(1), ' + lorem}</SecondaryText>
        <SecondaryText lineHeight={2}>{'LineHeight(2), ' + lorem}</SecondaryText>
        <SecondaryText lineHeight={3}>{'LineHeight(3), ' + lorem}</SecondaryText>
        <SecondaryText lineHeight={4}>{'LineHeight(4), ' + lorem}</SecondaryText>
      </Base>
    )
  }
}
