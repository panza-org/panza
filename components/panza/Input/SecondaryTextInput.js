import React, { PropTypes } from 'react'
import {
  TextInput
} from 'react-native'
import {
  TextBase
} from '../index'

export const SecondaryTextInput = (props) => {
  return (
    <TextBase
      {...props}
      underlineColorAndroid='transparent'
      Component={TextInput}
      fontSize={5}
    />
  )
}
