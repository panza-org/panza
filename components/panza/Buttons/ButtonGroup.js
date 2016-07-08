import React, { PropTypes } from 'react'
import { Base } from '../index'

const ButtonGroup = ({
  children,
  rounded,
  ...other
}) => {

  const round = rounded
    ? (typeof rounded === 'number' ? rounded : 2)
    : 0

  const total = children.length
  const kids = React.Children.map(children, (child, i) => {
    const isFirst = i === 0
    const isLast = i === total - 1
    const isOutline = child.props.outline
    const w = 2


    const style = [
      isOutline && { borderLeftWidth: w / 2, borderRightWidth: w / 2 },
      isOutline && isFirst && { borderLeftWidth: w },
      isOutline && isLast && { borderRightWidth: w },
      isFirst && { borderTopLeftRadius: round, borderBottomLeftRadius: round },
      isLast && { borderTopRightRadius: round, borderBottomRightRadius: round }
    ]

    return React.cloneElement(child, {
      flex: 1,
      block: true,
      rounded: false,
      style
    })
  })

  return (
    <Base flexDirection='row' flex={1} {...other}>
      {kids}
    </Base>
  )
}


ButtonGroup.propTypes = {
  children: PropTypes.node,
  rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
}

export default ButtonGroup
