import React, { PropTypes } from 'react'
import {
  TextBase
} from '../index'

import _ from 'lodash'

function mapPropsToStyleProps(props, propsMap) {
  return Object.assign({},
    textPropsMap.medium, // default styles
    ..._.filter(propsMap, (v, k) => props[k]),
    props
  )
}

/** Basic text styles **/

const textPropsMap = {
  tiny: { fontSize: 6, lineHeight: 2 },
  large: { fontSize: 3, lineHeight: 2 },
  small: { fontSize: 5, lineHeight: 2 },
  medium: { fontSize: 4, lineHeight: 2 },
  giant: { fontSize: 2, lineHeight: 2 }
}

const Text = ({
  children,
  ...other
}) => (
  <TextBase {...mapPropsToStyleProps(other, textPropsMap)} {...other}>
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
  bold: PropTypes.bool
}

Text.displayName = 'Text'

Text.defaultProps = {
  size: 'medium'
}

export default Text
