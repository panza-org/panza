import React, { PropTypes } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'

import {
  PrimaryText,
  SecondaryText,
  LargeText,
  SubtitleText,
  TextBase,
  Base
} from '../panza'

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur dicta et impedit in, itaque, magnam modi nihil"

export default class TextExample extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
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
        <SecondaryText lineHeight={0} my={2}>{'LineHeight(0), ' + lorem}</SecondaryText>
        <SecondaryText lineHeight={1} my={2}>{'LineHeight(1), ' + lorem}</SecondaryText>
        <SecondaryText lineHeight={2} my={2}>{'LineHeight(2), ' + lorem}</SecondaryText>
        <SecondaryText lineHeight={3} my={2}>{'LineHeight(3), ' + lorem}</SecondaryText>
        <SecondaryText lineHeight={4} my={2}>{'LineHeight(4), ' + lorem}</SecondaryText>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25
  }
})