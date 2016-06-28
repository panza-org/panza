import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Platform,
  StyleSheet,
  ActivityIndicatorIOS,
  ActivityIndicator
} from 'react-native'

import {
  Base,
  PrimaryText
} from '../index'

/**
 * Displays a loading indicator, and on iOS an optional
 * loading message.
 */


class LoadingPage extends React.Component {

  static displayName = 'LoadingPage'

  static propTypes = {
    isLoading: PropTypes.bool,
    large: PropTypes.bool,
    color: PropTypes.string,
    showText: PropTypes.bool,
    loadingText: PropTypes.string,
    alignTop: PropTypes.bool
  }

  static defaultProps = {
    large: false,
    color: 'gray',
    isLoading: true,
    showText: true,
    loadingText: 'Loading...',
    alignTop: false
  }

  render () {
    const {
      color,
      isLoading,
      large,
      showText,
      loadingText,
      alignTop,
      ...other
    } = this.props

    const size = large ? 'large' : 'small'
    const Indicator = ActivityIndicator || ActivityIndicatorIOS

    return (
      <Base flex={1} align={'center'} justify={alignTop ? 'flex-start' : 'center'} {...other}>
        <Base row align={'center'} justify={'center'} >
          {Indicator && (
            <Indicator
              color={color}
              animating={isLoading}
              size={size}
            />
          )}
        {showText && (
          <PrimaryText fontSize={large ? 2 : 4} ml={1} light>{loadingText}</PrimaryText>
        )}
        </Base>
      </Base>
    )

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LoadingPage
