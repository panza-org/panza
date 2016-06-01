import React, { PropTypes } from 'react'
import Button from './Button'

/**
 * Utilizes an 'error' backgroundColor
 */

const ErrorButton = (props) => {
  return <Button backgroundColor='error' textColor='white' p={2} {...props} />
}

ErrorButton.displayName = 'ErrorButton'

ErrorButton.propTypes = {
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

export default ErrorButton
