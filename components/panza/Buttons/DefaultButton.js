import React, { PropTypes } from 'react'
import Button from './Button'

/**
 * Uses an 'info' backgroundColor
 */

const DefaultButton = (props) => {
  return <Button backgroundColor='info' textColor='white' {...props} />
}

DefaultButton.displayName = 'DefaultButton'

DefaultButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  underlayColor: PropTypes.string
}

export default DefaultButton
