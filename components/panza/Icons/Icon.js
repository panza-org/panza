import React from 'react'
import {TextBase} from '../Base'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  Platform
} from 'react-native'

const BaseIcon =  (props) => {
  const {
    name,
    androidName,
    size,
    androidSize,
    ...other
  } = props

  let iconName = name
  let iconSize = size

  if (Platform.OS === 'android') {
    if (androidName) iconName = androidName
    if (androidSize) iconSize = androidSize
  }

  return (
    <TextBase
      name={iconName}
      size={iconSize}
      Component={Icon}
      {...other}
    />
  )
}

BaseIcon.defaultProps = {
  size: 35
}

export default BaseIcon

export const ArrowRightIcon = (props) => {
  return (
    <BaseIcon
      color='midgray'
      name='ios-arrow-forward'
      size={25}
      {...props}
    />
  )
}

export const PlusIcon = (props) => {
  return (
    <BaseIcon
      name='ios-add-outline'
      androidName='md-add'
      {...props}
    />
  )
}

// on android we use 'back', on ios we use 'close'
export const CloseIcon = (props) => {
  return (
    <BaseIcon
      androidName='md-arrow-back'
      name='ios-close'
      {...props}
    />
  )
}


export const BackIcon = (props) => {
  return (
    <BaseIcon
      androidName='md-arrow-back'
      name='ios-arrow-back'
      size={30}
      {...props}
    />
  )
}

export const SearchIcon = (props) => (
  <BaseIcon
    name='ios-search'
    androidName='md-search'
    size={25}
    {...props}
  />
)

export const MoreIcon = (props) => (
  <BaseIcon
    name='ios-more'
    androidName='md-more'
  />
)
