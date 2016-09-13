import React, { PropTypes } from 'react'

import {
  Text,
  Base,
  Image,
  TouchableRowCell
} from '../index'

/**
 * The basic RowCell for use within ListView. It displays
 * an image, primary text, secondary text, a value,
 * and an arrow right icon if the respective props are
 * specified.
 *
 * @Platform ios, android, web
 * @composes TouchableRowCell, Image, Text
 */

const TouchableRow = ({
  primaryText,
  secondaryText,
  image,
  height,
  inverted,
  onPress,
  value,
  ...other
}) => (
  <TouchableRowCell
    height={height}
    py={2}
    onPress={onPress}
    {...other}
  >

    {/* The image */}
    {image && (
      React.isValidElement(image)
        ? image
        : (
        <Image
          mr={2}
          width={40}
          height={40}
          source={image}
        />
        )
      )
    }

    <Base
      flex={1}
      row
      align='center'
      justify='space-between'
    >
      {/* Left aligned content */}
      <Base flex={1}>
        {primaryText && (
          React.isValidElement(primaryText)
            ? primaryText
            : <Text inverted={inverted} numberOfLines={1}>{primaryText}</Text>
        )}

        {secondaryText && (
          React.isValidElement(secondaryText)
            ? secondaryText
            : <Text small light numberOfLines={1}>{secondaryText}</Text>
        )}
      </Base>

      {value && (
        React.isValidElement(value)
          ? value
          : <Text light>{value}</Text>
      )}

    </Base>

  </TouchableRowCell>
)

TouchableRow.displayName = 'TouchableRow'

TouchableRow.propTypes = {
  primaryText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  secondaryText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** A value attribute of the cell, to appear on the right */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onPress: PropTypes.func.isRequired,

  /** An thumbnail to be displayed on the left of the cell */
  image: PropTypes.oneOfType([ PropTypes.object, PropTypes.node ]),

  height: PropTypes.number,
  inverted: PropTypes.bool,

  /** Displays a right arrow on the right hand side of the cell */
  showMore: PropTypes.bool
}

export default TouchableRow
