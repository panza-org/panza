import React, { PropTypes } from 'react'
import Button from './Button'

/**
 * Utilizes a transparent background color
 */

const NakedButton = (props) => {
  return <Button p={2} underlayColor='rgba(0,0,0,0.2)' {...props} />
}

NakedButton.displayName = 'NakedButton'

NakedButton.propTypes = {
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

export default NakedButton
