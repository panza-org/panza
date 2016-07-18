import React, { PropTypes } from 'react'

import {
  TouchableRow,
  Text
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
  labelColor,
  condensed,
  onPress,
  disabled,
  ...other
}) => {

  const height = condensed
    ? 40 : 50

  return (
    <TouchableRow
      py={0}
      height={height}
      disabled={disabled}
      backgroundColor={backgroundColor}
      image={icon || image}
      primaryText={
        <Text numberOfLines={1} lineHeight={2} color={labelColor}>
          {label}
        </Text>
      }
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
  disabled: PropTypes.bool,
  labelColor: PropTypes.string
}

InputTouchable.defaultProps = {
  labelColor: 'default',
  backgroundColor: 'white',
  showMore: false,
  disabled: false
}

export default InputTouchable
