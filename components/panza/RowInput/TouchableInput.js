import React, {PropTypes} from 'react'
import {
  View,
  Text,
  Platform,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import {
  Base,
  SecondaryText,
  PrimaryText,
  ArrowRightIcon
} from '../index'

/**
 * An input that responds to user touch, and is typically used
 * within the context of a navigator, or modal, to select
 * another value.
 */

const TouchableInput = ({
  label,
  icon,
  showMore,
  backgroundColor,
  labelColor,
  value,
  condensed,
  onPress,
  disabled,
  ...other
}) => {

  const height = condensed
    ? 40 : 50

  const TextStyle = condensed
    ? SecondaryText : PrimaryText

  return (
    <Base
      Component={TouchableHighlight}
      disabled={disabled}
      backgroundColor={backgroundColor}
      underlayColor='darken'
      baseStyle={[styles.container, { height }]}
      onPress={onPress}
      {...other}>
      <View style={styles.innerContainer}>
        {icon}
        <TextStyle color={labelColor}>
          {label}
        </TextStyle>

        <Base flex={1} justifyContent='flex-end'>
          {value && (
              <TextStyle textAlign='right' light>
                {value}
              </TextStyle>
          )}
        </Base>

        {showMore && (
          <Base ml={1}>
            <ArrowRightIcon />
          </Base>
        )}
      </View>
    </Base>
  )
}

TouchableInput.displayName = 'TouchableInput'

TouchableInput.propTypes = {
  labelColor: PropTypes.string,
  backgroundColor: PropTypes.string
}

TouchableInput.defaultProps = {
  labelColor: 'default',
  backgroundColor: 'white'
}

export default TouchableInput

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  container: {
    height: 60,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center'
  }
})
