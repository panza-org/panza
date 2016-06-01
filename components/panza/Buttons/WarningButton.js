import React, { PropTypes } from 'react'
import Button from './Button'


/**
 * Utilizes the 'warning' background color
 * and white text
 */

const WarningButton = (props) => {
  return <Button backgroundColor='warning' textColor='white' p={2} {...props} />
}

WarningButton.displayName = 'WarningButton'

WarningButton.propTypes = {
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

export default WarningButton
