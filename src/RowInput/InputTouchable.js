import React, { PropTypes } from 'react'

import {
  TouchableRow,
  Text
} from '../index'

/**
 * An InputTouchable is typically used within the context of an
 * InputGroup, when you want the user to select a value from another
 * ListView, PopupMenu, etc. It's a very simple wrapper around
 * TouchableRow, to make it play nicely with other Input components.
 *
 * @Platform ios, android, web
 * @composes TouchableRow, Text
 */

const InputTouchable = ({
  label,
  icon,
  image,
  showMore,
  backgroundColor,
  value,
  inverted,
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
        React.isValidElement(label)
          ? label
          : (
            <Text small bold numberOfLines={1} inverted={inverted} lineHeight={2} color={labelColor}>
              {label}
            </Text>
          )
      }
      value={value}
      inverted={inverted}
      showMore={showMore}
      onPress={onPress}
      {...other}
    />
  )
}

InputTouchable.displayName = 'InputTouchable'

InputTouchable.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.node,
  image: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  showMore: PropTypes.bool,
  condensed: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  labelColor: PropTypes.string,
  inverted: PropTypes.bool
}

InputTouchable.defaultProps = {
  labelColor: 'default',
  backgroundColor: 'white',
  showMore: false,
  disabled: false
}

export default InputTouchable
