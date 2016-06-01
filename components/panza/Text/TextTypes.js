import React, { PropTypes } from 'react'
import {
  TextBase
} from '../Base'

export const PrimaryText = ({children, ...props}) => (
  <TextBase fontSize={4} {...props}>{children}</TextBase>
)

export const SecondaryText = ({ children, ...props}) => (
  <TextBase fontSize={5} {...props}>{children}</TextBase>
)

export const SubtitleText = ({ children, ...props}) => (
  <TextBase fontSize={6} {...props}>{children}</TextBase>
)

export const LargeText = ({ children, ...props }) => (
  <TextBase fontSize={3} {...props}>{children}</TextBase>
)
