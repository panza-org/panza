import React, { PropTypes } from 'react'
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
        block
        onPress={option.onSelect}
        label={option.label}
      />
    )
  }

  return (
    <NakedButton
      key={i}
      mt={1}
      block
      backgroundColor={option.backgroundColor || 'white'}
      onPress={option.onSelect}
      label={option.label}
    />
  )
}

/**
 * A vertical button group where the first option is the primary
 * option to select, while the second option is deemphasized. Typically
 * the first button would be a confirmation button, while the second
 * may be dismissal.
 */

const VerticalButtonGroup = ({ style, options, ...other }) => {

  return (
    <Base style={style} {...other}>
      {options.map((option, i) => renderOption(option, i))}
    </Base>
  )
}

VerticalButtonGroup.displayName = 'VerticalButtonGroup'

VerticalButtonGroup.propTypes = {

  /** Button options **/
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onSelect: PropTypes.func.isRequired
    })
  ).isRequired

}

export default VerticalButtonGroup
