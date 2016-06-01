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

export const SubNav = ({
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

const styles = StyleSheet.create({
  borderBottomWidth: 1 / PixelRatio.get()
})
