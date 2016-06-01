import React, { PropTypes } from 'react'
import {
  TextInput
} from 'react-native'
import {
  TextBase
} from '../index'

/**
 * Secondary text input sizing. Composes <TextBase> and
 * <TextInput>
 */

const SecondaryTextInput = (props) => {
  return (
    <TextBase
      {...props}
      underlineColorAndroid='transparent'
      Component={TextInput}
      fontSize={5}
    />
  )
}

SecondaryTextInput.displayName = 'SecondaryTextInput'

export default SecondaryTextInput
