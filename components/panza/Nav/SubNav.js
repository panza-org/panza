import React, { PropTypes } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  PixelRatio,
  StyleSheet
} from 'react-native'

import {
  SecondaryText,
  Base
} from '../index'

import config from '../config'

/**
 * SubNav is typically used directly below the primary
 * Navigation Bar, and displays three touchable text options.
 * This is typically used only on iOS devices. On Android,
 * you'd supply icons for these options instead, and display
 * them on the right side of the primary Navigation Bar. 
 */

const SubNav = ({
  options,
  backgroundColor,
  borderBottom,
  textColor,
  ...other
}, { panza } ) => {

  const { borderColor } = {...config, ...panza}

  return (
    <Base
      flex={1}
      row
      style={[
        borderBottom && { borderBottomWidth: 1 / PixelRatio.get()},
        { borderBottomColor: borderColor }
      ]}
      justify='space-between'
      p={1}
      px={2}
      backgroundColor={backgroundColor}
      {...other}>
        {options.map((opt, i) => {

          let textAlign = 'left'
          if (i === 1) textAlign = 'center'
          else if (i === 2) textAlign = 'right'

          return (
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={opt.onPress}
              key={opt.label}>
                <SecondaryText textAlign={textAlign} color={textColor}>
                  {opt.label}
                </SecondaryText>
            </TouchableOpacity>
          )

        })}
    </Base>
  )
}

SubNav.displayName = 'SubNav'

SubNav.propTypes = {
  textColor: PropTypes.string,
  borderBottom: PropTypes.bool,
  backgroundColor: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }))
}

SubNav.defaultProps = {
  backgroundColor: 'white',
  textColor: 'primary',
  borderBottom: true
}

SubNav.contextTypes = {
  panza: PropTypes.object
}

export default SubNav
