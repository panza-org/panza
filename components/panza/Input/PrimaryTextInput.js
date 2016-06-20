import React, { PropTypes } from 'react'
import {
  TextInput
} from 'react-native'
import {
  TextBase
} from '../index'

/**
 * Text input with primary text sizing. Composes
 * <TextBase> and <TextInput>
 */

const PrimaryTextInput = (props) => {
  return (
    <TextBase
      baseStyle={{ borderColor: 'transparent' }}
      {...props}
      Component={TextInput}
      underlineColorAndroid='transparent'
      fontSize={4}
    />
  )
}

PrimaryTextInput.displayName = 'PrimaryTextInput'

export default PrimaryTextInput
