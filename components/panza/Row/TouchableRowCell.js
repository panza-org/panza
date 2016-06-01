import React, {PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  TouchableHighlight
} from 'react-native'

import Base from '../Base'
import { ArrowRightIcon } from '../Icons/Icon'


const noop = function(){}

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

      <View>
        <Base baseStyle={[styles.rowContainer, heightStyle]} {...other}>
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
  height: 60,
  disabled: false,
  underlayColor: 'rgba(0,0,0,0.1)'
}


var styles = StyleSheet.create({
  row: {
    overflow: 'hidden',
    justifyContent: 'center'
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
  },
  arrowRight: {
    width: 30,
    height: 30,
    marginRight: 5,
    alignSelf: 'center',
    alignItems: 'center'
  },
  separator: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#bbb',
  }
})

export default TouchableRowCell
