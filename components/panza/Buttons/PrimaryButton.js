import React, { PropTypes } from 'react'
import Button from './Button'

/**
 * Uses a 'primary' backgroundColor
 */

const PrimaryButton = (props) => {
  return <Button backgroundColor='primary' textColor='white' {...props} />
}

PrimaryButton.displayName = 'PrimaryButton'

PrimaryButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  underlayColor: PropTypes.string
}

export default PrimaryButton
