import React, { PropTypes } from 'react'
import {
  Base,
  Image,
  Text,
} from '../index'

/**
 * A very basic card header, which includes an optional avatar,
 * title, subtitle, and children
 * @composes Base, Image, Text
 */

export const CardHeader = ({
  avatar,
  title,
  subtitle,
  children,
  ...other
}) => (
  <Base row alignSelf='stretch' p={2} {...other}>

    {avatar && (
      typeof avatar === 'string'
        ? <Image width={40} height={40} mr={1} source={{ uri: avatar }} circular />
        : avatar
    )}
    <Base flex={1}>
      {title && (
        typeof title === 'string'
          ? <Text bold>{title}</Text>
          : title
      )}
      {subtitle && (
        typeof subtitle === 'string'
          ? <Text light small>{subtitle}</Text>
          : subtitle
      )}
    </Base>
    <Base flex={0} justify='center'>
      {children}
    </Base>
  </Base>
)

CardHeader.displayName = 'CardHeader'

CardHeader.propTypes = {
  avatar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  children: PropTypes.node
}

export default CardHeader
