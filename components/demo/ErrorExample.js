import React, { PropTypes } from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import {
  ErrorPage
} from '../panza'


export default class ErrorExample extends React.Component {

  render() {
    return (
      <ErrorPage
        retry={() => {
          console.log('retry')
        }}
      />
    )
  }
}
