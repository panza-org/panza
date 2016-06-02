import React, {PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  PixelRatio
} from 'react-native'
import Divider from './Divider'
import { Base, SectionHeader } from '../index'

/**
 * Wrap inputs using this component to provide
 * borders between them, top borders, bottom borders,
 * margin top, margin bottom, background colors.
 */

class InputGroup extends React.Component {

  static displayName = 'InputGroup'

  static propTypes = {
    style: PropTypes.object,
    inset: PropTypes.number,
    showTopBorder: PropTypes.bool,
    showBottomBorder: PropTypes.bool,
    showBorder: PropTypes.bool,
    topInset: PropTypes.number,
    bottomInset: PropTypes.number,
    white: PropTypes.bool,
    label: PropTypes.string
  }

  static defaultProps = {
    bottomInset: 0,
    topInset: 0,
    showBottomBorder: true,
    showTopBorder: true,
    showBorder: true,
    inset: 0
  }

  render () {
    const {
      inset,
      showBottomBorder,
      backgroundColor,
      topInset,
      bottomInset,
      ...other
    } = this.props

    var children = React.Children.map(this.props.children, (child, i) => {
      var isLast = i === this.props.children.length - 1
      if (!child) return null

      return (
        <View>
          {child}
          {(this.props.showBorder && (!isLast && showBottomBorder)) &&
            <Divider inset={inset} />}
        </View>
      )
    })

    var style = [
      styles.group,
      this.props.style
    ]

    return (
      <Base baseStyle={style} {...other}>
        {this.props.label && <SectionHeader backgroundColor='transparent'>{this.props.label}</SectionHeader>}
        <Base backgroundColor={backgroundColor}>
          {this.props.showTopBorder && <Divider inset={topInset} />}
          {children}
          {this.props.showBottomBorder && <Divider inset={bottomInset} />}
        </Base>
      </Base>
    )

  }
}

const styles = StyleSheet.create({
  border: {
    borderTopWidth: 1 / PixelRatio.get(),
    borderTopColor: 'rgba(0,0,0,0.25)'
  },
  group: {
    backgroundColor: 'transparent'
  },
  margin: {
    marginTop: 30,
    marginBottom: 30
  }
})

export default InputGroup
