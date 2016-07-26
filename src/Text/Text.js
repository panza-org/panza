import React, { PropTypes } from 'react'
import {
  TextBase
} from '../index'
import mapToProps from '../utils/mapPropsToStyles'


/** Basic text styles **/
const textPropsMap = {
  tiny: { fontSize: 6, lineHeight: 2 },
  large: { fontSize: 3, lineHeight: 2 },
  small: { fontSize: 5, lineHeight: 2 },
  medium: { fontSize: 4, lineHeight: 2 },
  giant: { fontSize: 2, lineHeight: 2 }
}

/**
 * Basic Text Component that provides shorthands for sizing,
 * lineHeight, and fontWeights.
 */

const Text = ({
  children,
  ...other
}) => (
  <TextBase {...mapToProps(other, textPropsMap, textPropsMap.medium)}>
    {children}
  </TextBase>
)

Text.propTypes = {
  children: PropTypes.node,

  tiny: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  giant: PropTypes.bool,

  thin: PropTypes.bool,
  thick: PropTypes.bool,
  bold: PropTypes.bool,

  inverted: PropTypes.bool,

  lineHeight: PropTypes.number
}

Text.displayName = 'Text'


export default Text
