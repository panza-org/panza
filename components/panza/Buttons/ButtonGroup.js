import React, { PropTypes } from 'react'
import { Base } from '../index'

const ButtonGroup = ({
  children,
  ...other
}) => {

  const total = children.length
  const kids = React.Children.map(children, (child, i) => {
    const isFirst = i === 0
    const isLast = i === total - 1

    return React.cloneElement(child, {
      flex: 1,
      block: true,
      rounded: false
    })
  })

  return (
    <Base flexDirection='row' flex={1} {...other}>
      {kids}
    </Base>
  )
}


ButtonGroup.propTypes = {

}

export default ButtonGroup
