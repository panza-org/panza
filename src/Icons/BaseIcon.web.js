import React, { PropTypes } from 'react'
import { TextBase } from '../Base'

const BaseIcon = ({
  name,
  size,
  ...other
}) => (
  <TextBase
    className={`ion ion-${name}`}
    style={{ fontSize: `${size}px` }}
    {...other}
  />
)

BaseIcon.displayName = 'BaseIcon'

BaseIcon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string
}

BaseIcon.defaultProps = {
  size: 25
}

export default BaseIcon
