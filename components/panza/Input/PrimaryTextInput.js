import React, { PropTypes } from 'react'
import {
  TextInput,
  Platform
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
      baseStyle={{
        ...Platform.select({
          web: { outline: 'none', borderColor: 'transparent' }
        })
      }}
      {...props}
      Component={TextInput}
      underlineColorAndroid='transparent'
      fontSize={4}
    />
  )
}

PrimaryTextInput.displayName = 'PrimaryTextInput'

export default PrimaryTextInput
