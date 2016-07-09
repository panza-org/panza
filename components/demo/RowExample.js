import React, { Component } from 'react'
import { View, StyleSheet, ListView } from 'react-native'
import {
  PrimaryText,
  SecondaryText,
  SubtitleText,
  Separator,
  SectionHeader,
  Image,
  Base,
  Divider,
  TouchableRow,
  Text,
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
            <Text>Text</Text>
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
            <Text>Text</Text>
            <Text small light>SubtitleText</Text>
          </Base>
        </TouchableRowCell>
      )
    }
  },
  {
    render: () => {
      return (
        <TouchableRowCell onPress={noop}>
          <Image mr={2} width={40} height={40} circular source={{ uri: 'https://pbs.twimg.com/profile_images/2966797788/e3f7b52206be4d11c86a32a67dfe2fab_400x400.png'}} />
          <Base flex={1}>
            <Text>Text</Text>
            <Text small light>SubtitleText</Text>
          </Base>
        </TouchableRowCell>
      )
    }
  },
  {
    render: () => {
      return (
        <TouchableRowCell py={2} showMore={true} onPress={noop}>
          <Base flex={1}>
            <Base row align='center' justify='space-between'>
              <Text bold numberOfLines={1}>Ben McMahen</Text>
              <Text small numberOfLines={1} light>2 weeks ago</Text>
            </Base>
            <Text small numberOfLines={1}>Miss you already</Text>
            <Text small numberOfLines={3} light>Do ex duis velit nisi eu ex excepteur sint irure nulla duis adipisicing minim in. Lorem ut et dolor proident nisi duis id do anim laboris non.</Text>
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
  // {
  //   render: () => {
  //     return (
  //       <TouchableRowCell onPress={noop}>
  //         <Base flex={1} row align='center' justify='space-between'>
  //           <Text>PrimaryText</PrimaryText>
  //           <PrimaryText light>Value</PrimaryText>
  //         </Base>
  //       </TouchableRowCell>
  //     )
  //   }
  // },

]

const dataSource = ds.cloneWithRows(rows)

class RowExample extends Component {

  render() {
    return (
      <ListView
        dataSource={dataSource}
        style={styles.list}
        renderSeparator={(a, b) => <Divider key={a + b} />}
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
