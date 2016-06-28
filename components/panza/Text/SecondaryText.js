import React, { PropTypes } from 'react'
import {
  TextBase
} from '../Base'

/**
 * Secondary Text Size
 */

const SecondaryText = ({ children, ...props }) => (
  <TextBase fontSize={5} {...props}>{children}</TextBase>
)

SecondaryText.displayName = 'SecondaryText'

export default SecondaryText
