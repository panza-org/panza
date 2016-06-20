import React, {PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  PixelRatio,
  TouchableHighlight
} from 'react-native'

import Base from '../Base'
import { ArrowRightIcon } from '../Icons/Icon'


const noop = function(){}

/**
 * A touchable row cell container, typically used
 * rendering rows in a <ListView>.
 */

const TouchableRowCell = (props) => {

  const {
    onPress,
    highlighted,
    underlayColor,
    showMore,
    children,
    height,
    disabled,
    ...other
  } = props

  const heightStyle = {
    height: height === 'auto' ? null : height
  }

  return (
    <TouchableHighlight
      touchEvents={disabled ? 'none' : 'auto'}
      onPress={onPress}
      underlayColor={underlayColor}
      style={[styles.row, disabled && styles.disabled]}
      onPressIn={() => highlighted()}
      onPressOut={() => highlighted(null)}>

      <View style={{ flex: 1}}>
        <Base flex={1} baseStyle={[styles.rowContainer, heightStyle]} {...other}>
          {children}
          {showMore && (
            <Base px={2}>
              <ArrowRightIcon size={20}/>
            </Base>
          )}
        </Base>
      </View>

    </TouchableHighlight>
  )
}

TouchableRowCell.displayName = 'TouchableRowCell'

TouchableRowCell.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  highlighted: PropTypes.func,
  showMore: PropTypes.bool,
  underlayColor: PropTypes.string
}

TouchableRowCell.defaultProps = {
  showMore: true,
  highlighted: noop,
  height: Platform.OS === 'ios' ? 60 : 65,
  disabled: false,
  underlayColor: 'rgba(0,0,0,0.1)'
}

const styles = StyleSheet.create({
  row: {
    overflow: 'hidden',
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'stretch'
  },
  disabled: {
    opacity: 0.5
  },
  rowContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  }
})

export default TouchableRowCell
