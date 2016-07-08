import React, { PropTypes } from 'react'
import { Platform } from 'react-native'

import { Icon } from '../index'

export const ArrowRightIcon = (props) => {
  return (
    <Icon
      color='midgray'
      name='ios-arrow-forward'
      size={25}
      {...props}
    />
  )
}

ArrowRightIcon.displayName = 'ArrowRightIcon'

export const PlusIcon = (props) => {
  return (
    <Icon
      name={Platform.select({
        ios: 'ios-add-outline',
        android: 'md-add',
        web: 'ios-add-outline'
      })}
      {...props}
    />
  )
}

PlusIcon.displayName = 'PlusIcon'

// on android we use 'back', on ios we use 'close'
export const CloseIcon = (props) => {
  return (
    <Icon
      name={Platform.select({
        ios: 'ios-close',
        android: 'md-arrow-back',
        web: 'ios-close'
      })}
      {...props}
    />
  )
}

CloseIcon.displayName = 'CloseIcon'

export const BackIcon = (props) => {
  return (
    <Icon
      name={Platform.select({
        ios: 'ios-arrow-back',
        android: 'md-arrow-back',
        web: 'ios-arrow-back'
      })}
      size={30}
      {...props}
    />
  )
}

BackIcon.displayName = 'BackIcon'

export const SearchIcon = (props) => (
  <Icon
    name={Platform.select({
      ios: 'ios-search',
      android: 'md-search',
      web: 'ios-search'
    })}
    size={25}
    {...props}
  />
)

SearchIcon.displayName = 'SearchIcon'

export const MoreIcon = (props) => (
  <Icon
    name={Platform.select({
      ios: 'ios-more',
      android: 'md-more',
      web: 'ios-more'
    })}
    {...props}
  />
)

MoreIcon.displayName = 'MoreIcon'
