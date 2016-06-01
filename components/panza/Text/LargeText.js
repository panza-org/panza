import React, { PropTypes } from 'react'
import {
  TextBase
} from '../Base'

/**
 * Large Text Size
 */

const LargeText = ({ children, ...props }) => (
  <TextBase fontSize={3} {...props}>{children}</TextBase>
)

LargeText.displayName = 'LargeText'

export default LargeText
