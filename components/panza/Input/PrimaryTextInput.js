import React, { PropTypes } from 'react'
import {
  TextInput
} from 'react-native'
import {
  TextBase
} from '../index'

export const PrimaryTextInput = (props) => {
  return (
    <TextBase
      {...props}
      Component={TextInput}
      underlineColorAndroid='transparent'
      fontSize={4}
    />
  )
}
