import React, { PropTypes } from 'react'
import Button from './Button'

/**
 * Utilizes an 'error' backgroundColor
 */

const ErrorButton = (props) => {
  return <Button backgroundColor='error' textColor='white' {...props} />
}

ErrorButton.displayName = 'ErrorButton'

ErrorButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  underlayColor: PropTypes.string
}

export default ErrorButton
