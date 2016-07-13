import React, { PropTypes } from 'react'

import {
  TouchableRow
} from '../index'

/**
 * An InputTouchable is typically used when you want the user
 * to select a value within another view -- whether it's a ListView,
 * PopupMenu, etc. This module composes TouchableRow, providing
 * default heights and styling to fit in with other Input rows.
 *
 * @composes TouchableRow
 */

const InputTouchable = ({
  label,
  icon,
  image,
  showMore,
  backgroundColor,
  value,
  condensed,
  onPress,
  disabled,
  ...other
}) => {

  const height = condensed
    ? 40 : 50

  return (
    <TouchableRow
      height={height}
      disabled={disabled}
      backgroundColor={backgroundColor}
      image={icon || image}
      primaryText={label}
      value={value}
      showMore={showMore}
      onPress={onPress}
      {...other}
    />
  )
}

InputTouchable.displayName = 'InputTouchable'

InputTouchable.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  image: PropTypes.object,
  value: PropTypes.string,
  showMore: PropTypes.bool,
  condensed: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

InputTouchable.defaultProps = {
  labelColor: 'default',
  backgroundColor: 'white',
  showMore: false,
  disabled: false
}

export default InputTouchable
