import React, {PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Base from '../Base'
import { PrimaryButton, NakedButton } from './index'

/**
 * Render an option
 * @param  {Object} option
 * @param  {index} i      0 === primary
 * @return {node}
 */

function renderOption(option, i) {
  var primary = i === 0
  if (primary) {
    return (
      <PrimaryButton
        key={i}
        onPress={option.onSelect}
        label={option.label}
      />
    )
  }

  return (
    <NakedButton
      key={i}
      mt={1}
      backgroundColor={option.backgroundColor || 'white'}
      onPress={option.onSelect}
      label={option.label}
    />
  )
}

/**
 * Button Group
 */

const VerticalButtonGroup = ({style, options, ...other}) => {

  return (
    <Base style={style} {...other}>
      {options.map((option, i) => renderOption(option, i))}
    </Base>
  )
}

VerticalButtonGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onSelect: PropTypes.func.isRequired
    })
  ).isRequired
}


const styles = StyleSheet.create({

})

export default VerticalButtonGroup
