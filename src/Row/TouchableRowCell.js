import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  TouchableHighlight
} from 'react-native'

import { ArrowRightIcon, Base } from '../index'

const noop = function noop () {}

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
    showMoreProps,
    disabled,
    ...other
  } = props

  const fixedHeight = height === 'auto'
    ? null : height

  const heightStyle = {
    height: fixedHeight
  }

  return (
    <TouchableHighlight
      touchEvents={disabled ? 'none' : 'auto'}
      onPress={onPress}
      underlayColor={underlayColor}
      style={[styles.row, disabled && styles.disabled]}
      onPressIn={() => highlighted()}
      onPressOut={() => highlighted(null)}
    >

      <View style={{ alignSelf: 'stretch', flexDirection: 'row', flex: 1 }}>
        <Base row baseStyle={[styles.rowContainer, heightStyle]} {...other}>
          {children}
          {showMore && (
            <Base px={2}>
              <ArrowRightIcon size={20} {...showMoreProps} />
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
  showMoreProps: PropTypes.object,
  underlayColor: PropTypes.string,
  height: PropTypes.number,
  children: PropTypes.node
}

TouchableRowCell.defaultProps = {
  showMore: true,
  highlighted: noop,
  disabled: false,
  underlayColor: 'rgba(0,0,0,0.1)'
}

const styles = StyleSheet.create({
  row: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    flexDirection: 'row',
    ...Platform.select({
      web: { width: '100%' }
    })
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
