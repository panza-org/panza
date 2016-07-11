/*
@flow
 */

export type WidgetExample = {
  key: string;
  module: Object;
}
import React from 'react'
import RowExample from './RowExample'
import ButtonsExample from './ButtonsExample'
import InputRowExample from './RowInputExample'
import TextExample from './TextExample'
import ErrorPage from './ErrorExample'
import LoadingPage from './LoadingExample'
import IconsExample from './IconsExample'
import ImageExample from './ImageExample'
import NavbarExample from './NavBarExample'
import AllTogetherNow from './AllTogetherNow'
import Card from './CardExample'
import Popup from './PopupExample'

import {
  TouchableRow,
  NavBar,
  Divider
} from '../panza'


import { ListView, Text, View, StyleSheet, Platform } from 'react-native'


const Examples: Array<WidgetExample> = [
  {
    name: 'Buttons',
    module: ButtonsExample
  },
  {
    name: 'Error',
    module: ErrorPage
  },
  {
    name: 'Loading',
    module: LoadingPage
  },
  {
    name: 'Icons',
    module: IconsExample
  },
  {
    name: 'Image',
    module: ImageExample
  },
  {
    name: 'NavBar',
    module: NavbarExample
  },
  {
    name: 'Rows',
    module: RowExample
  },
  {
    name: 'Input',
    module: InputRowExample
  },
  {
    name: 'Text',
    module: TextExample
  },
  {
    name: 'Panza',
    module: AllTogetherNow
  },
  {
    name: 'Card',
    module: Card
  },
  {
    name: 'Popup',
    module: Popup
  }
]

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

const dataSource = ds.cloneWithRows(Examples)

export default ({onSelect}) => {

  return (
    <ListView
      dataSource={dataSource}
      style={styles.list}
      renderSeparator={(a, b) => ((Platform.OS === 'ios') && <Divider inset={16} key={a + b} />)}
      renderRow={(rowData) => (
        <TouchableRow
          onPress={() => onSelect(rowData)}
          primaryText={rowData.name}
          key={rowData.name} />
      )}
    />
  )

}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: 'white'
  }
})
