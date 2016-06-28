import React, { PropTypes } from 'react'
import {
  TextBase
} from '../Base'

const SubtitleText = ({ children, ...props }) => (
  <TextBase fontSize={6} {...props}>{children}</TextBase>
)

SubtitleText.displayName = 'SubtitleText'

export default SubtitleText
