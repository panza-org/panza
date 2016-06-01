import React, { Component } from 'react'
import { View, Text, StyleSheet, ListView } from 'react-native'
import {
  PrimaryText,
  SecondaryText,
  SubtitleText,
  Separator,
  SectionHeader,
  RowImage,
  Base,
  TouchableRow,
  TouchableRowCell
} from '../panza'

function noop(){}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

const rows = [
  {
    render: () => {
      return (
        <TouchableRow
          onPress={noop}
          image={{uri: 'https://pbs.twimg.com/profile_images/2966797788/e3f7b52206be4d11c86a32a67dfe2fab_400x400.png'}}
          primaryText='Hello world'
          secondaryText='Some secondary text'
          value='Value'
        />
      )
    }
  },
  {
    render: () => {
      return (
        <TouchableRowCell onPress={noop}>
          <Base flex={1}>
            <PrimaryText>PrimaryText</PrimaryText>
          </Base>
        </TouchableRowCell>
      )
    }
  },
  {
    render: () => {
      return (
        <TouchableRowCell onPress={noop}>
          <Base flex={1}>
            <PrimaryText>PrimaryText</PrimaryText>
            <SubtitleText light>SubtitleText</SubtitleText>
          </Base>
        </TouchableRowCell>
      )
    }
  },
  {
    render: () => {
      return (
        <TouchableRowCell  onPress={noop}>
          <RowImage mr={2} source={{ uri: 'https://pbs.twimg.com/profile_images/2966797788/e3f7b52206be4d11c86a32a67dfe2fab_400x400.png'}} />
          <Base flex={1}>
            <PrimaryText>PrimaryText</PrimaryText>
            <SubtitleText light>SubtitleText</SubtitleText>
          </Base>
        </TouchableRowCell>
      )
    }
  },
  {
    render: () => {
      return (
        <TouchableRowCell height={'auto'} py={2} showMore={true} onPress={noop}>
          <Base flex={1}>
            <Base row align='center' justify='space-between'>
              <PrimaryText bold numberOfLines={1}>Ben McMahen</PrimaryText>
              <SecondaryText numberOfLines={1} light>2 weeks ago</SecondaryText>
            </Base>
            <SecondaryText numberOfLines={1}>Miss you already</SecondaryText>
            <SecondaryText numberOfLines={3} light>Do ex duis velit nisi eu ex excepteur sint irure nulla duis adipisicing minim in. Lorem ut et dolor proident nisi duis id do anim laboris non.</SecondaryText>
          </Base>
        </TouchableRowCell>
      )
    }
  },
  {
    render: () => {
      return (
        <SectionHeader>SECTION HEADER</SectionHeader>
      )
    }
  },
  {
    render: () => {
      return (
        <TouchableRowCell onPress={noop}>
          <Base flex={1} row align='center' justify='space-between'>
            <PrimaryText>PrimaryText</PrimaryText>
            <PrimaryText light>Value</PrimaryText>
          </Base>
        </TouchableRowCell>
      )
    }
  },

]

const dataSource = ds.cloneWithRows(rows)

class RowExample extends Component {

  render() {
    return (
      <ListView
        dataSource={dataSource}
        style={styles.list}
        renderSeparator={(a, b) => <Separator key={a + b} />}
        renderRow={(rowData) => {
          return rowData.render()
        }}
      />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default RowExample
