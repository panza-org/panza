import React, { PropTypes } from 'react'
import {
  TextBase
} from '../index'

import _ from 'lodash'

function mapPropsToStyleProps(props, propsMap) {
  return Object.assign({},
    textPropsMap.medium,
    ..._.filter(propsMap, (v, k) => props[k]),
    props
  )
}

/** Basic button styles **/

const textPropsMap = {
  large: { fontSize: 3 },
  small: { fontSize: 6 },
  medium: { fontSize: 4 },
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
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Text.displayName = 'Text'

Text.defaultProps = {
  size: 'medium'
}

export default Text
