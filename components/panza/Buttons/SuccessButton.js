import React, { PropTypes } from 'react'
import Button from './Button'

/**
 * Utilizes a 'success' backgroundColor
 */

const SuccessButton = (props) => {
  return <Button backgroundColor='success' textColor='white' {...props} />
}

SuccessButton.displayName = 'SuccessButton'

SuccessButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  underlayColor: PropTypes.string
}

export default SuccessButton
