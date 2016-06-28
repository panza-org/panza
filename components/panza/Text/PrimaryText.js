import React, { PropTypes } from 'react'
import {
  TextBase
} from '../Base'

/**
 * Primary Text Size
 */

const PrimaryText = ({ children, ...props }) => (
  <TextBase fontSize={4} {...props}>{children}</TextBase>
)

PrimaryText.displayName = 'PrimaryText'

export default PrimaryText
