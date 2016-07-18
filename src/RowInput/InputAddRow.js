import React, { PropTypes } from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Icon,
  Base,
  InputTouchable
} from '../index'

const GreenPlusIcon = () => (
  <Base
    backgroundColor='green'
    mr={2}
    style={styles.iconButton}
  >
    <Icon
      name='md-add'
      size={15}
      color='white'
    />
  </Base>
)

/**
 * Arrow row button. Typically the condensed form
 * will be used in conjunction with <RemovableInput />
 */

const InputAddRow = ({
  label,
  onPress,
  backgroundColor,
  disabled,
  ...other
}) => (
  <InputTouchable
    disabled={disabled}
    label={label}
    labelColor='primary'
    icon={<GreenPlusIcon />}
    backgroundColor={backgroundColor}
    onPress={onPress}
    {...other}
  />
)

InputAddRow.displayName = 'InputAddRow'

InputAddRow.propTypes = {
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default InputAddRow

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  container: {
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center'
  },
  iconButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 4
  },
  icon: {
    backgroundColor: 'transparent',
    marginTop: 2
  },
  label: {
    paddingLeft: 5
  },
  disabled: {
    opacity: 0.3
  }
})
