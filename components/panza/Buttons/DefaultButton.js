import React, { PropTypes } from 'react'
import { Button } from './Button'

/**
 * Uses an 'info' backgroundColor
 */

const DefaultButton = (props) => {
  return <Button backgroundColor='info' textColor='white' p={2} {...props} />
}

DefaultButton.displayName = 'DefaultButton'

DefaultButton.propTypes = {
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

export default DefaultButton
