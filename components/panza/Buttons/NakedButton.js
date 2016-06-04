import React, { PropTypes } from 'react'
import Button from './Button'

/**
 * Utilizes a transparent background color
 */

const NakedButton = (props) => {
  return (
    <Button
      textColor='default'
      backgroundColor='transparent'
      underlayColor='gray'
      {...props}
    />
  )
}

NakedButton.displayName = 'NakedButton'

NakedButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  underlayColor: PropTypes.string
}

export default NakedButton
