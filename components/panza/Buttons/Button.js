import React, { PropTypes } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import config from '../config'
import color from 'color'

import {
  PrimaryText,
  Base
} from '../index'


const Button = ({
  label,
  textColor,
  children,
  backgroundColor,
  underlayColor,
  ...other
}, { panza }) => {

  return (
    <Base
      Component={TouchableHighlight}
      baseStyle={styles.button}
      backgroundColor={backgroundColor}
      underlayColor={'darken'}
      {...other}>
        {children ||  (
          <View>
            <PrimaryText color={textColor}>{label}</PrimaryText>
          </View>
        )}
    </Base>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  underlayColor: PropTypes.string,
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'default',
    'info',
    'success',
    'warning',
    'error'
  ])
}

Button.defaultProps = {
  theme: 'default',
  disabled: false,
  textColor: 'default'
}

Button.contextTypes = {
  panza: PropTypes.object
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabled: {
    opacity: 0.3
  }
})

const DefaultButton = (props) => {
  return <Button backgroundColor='info' textColor='white' p={2} {...props} />
}

export default DefaultButton

export const PrimaryButton = (props) => {
  return <Button backgroundColor='primary' textColor='white' p={2} {...props} />
}

export const NakedButton = (props) => {
  return <Button p={2} underlayColor='rgba(0,0,0,0.2)' {...props} />
}

export const WarningButton = (props) => {
  return <Button backgroundColor='warning' textColor='white' p={2} {...props} />
}

export const ErrorButton = (props) => {
  return <Button backgroundColor='error' textColor='white' p={2} {...props} />
}

export const SuccessButton = (props) => {
  return <Button backgroundColor='success' textColor='white' p={2} {...props} />
}
