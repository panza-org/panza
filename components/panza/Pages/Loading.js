import React, {PropTypes} from 'react'
import {
  View,
  Text,
  Platform,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

/**
 * Loading Page
 * note: ActivityIndicator will be available in rn27
 */

class Loading extends React.Component {

  static displayName = 'Loading'

  static propTypes = {
    isLoading: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    color: PropTypes.string,
    showText: PropTypes.bool,
    loadingText: PropTypes.string,
    alignTop: PropTypes.bool
  }

  static defaultProps = {
    size: 'small',
    color: 'gray',
    isLoading: true,
    showText: true,
    loadingText: 'Loading...',
    alignTop: true
  }

  render () {

    var containerStyles = [
      styles.container,
      this.props.style,
      this.props.alignTop && { justifyContent: 'flex-start' }
    ]

    return (
      <View style={containerStyles}>
        <View style={styles.loading}>
          {ActivityIndicator && (
            <ActivityIndicator
              color={this.props.color}
              animating={this.props.isLoading}
              size={this.props.size}
            />
          )}
        {(this.props.showText &&  Platform.OS === 'ios') && (
          <Text style={styles.text}>{this.props.loadingText}</Text>
        )}
        </View>
      </View>
    )

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicator: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#999',
    fontSize: 13,
    marginLeft: 7
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Loading
