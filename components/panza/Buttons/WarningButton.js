import React, { PropTypes } from 'react'
import Button from './Button'


/**
 * Utilizes the 'warning' background color
 * and white text
 */

const WarningButton = (props) => {
  return <Button backgroundColor='warning' textColor='white' {...props} />
}

WarningButton.displayName = 'WarningButton'

WarningButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  underlayColor: PropTypes.string
}

export default WarningButton
