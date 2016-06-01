import React, { PropTypes } from 'react'
import Button from './Button'

/**
 * Uses a 'primary' backgroundColor
 */

const PrimaryButton = (props) => {
  return <Button backgroundColor='primary' textColor='white' p={2} {...props} />
}

PrimaryButton.displayName = 'PrimaryButton'

PrimaryButton.propTypes = {
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

export default PrimaryButton
