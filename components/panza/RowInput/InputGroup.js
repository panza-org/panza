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
 * margin top, margin bottom, background colors, etc. Use the
 * inset prop to control the inset margin of the divider.
 */

class InputGroup extends React.Component {

  static displayName = 'InputGroup'

  static propTypes = {
    style: PropTypes.object,

    /** left margin inset for the divider border **/
    inset: PropTypes.number,

    /** whether show the top border **/
    showTopBorder: PropTypes.bool,

    /** whether to show the bottom border **/
    showBottomBorder: PropTypes.bool,

    /** whether to show the dividing border **/
    showBorder: PropTypes.bool,

    /** left margin inset of the top border **/
    topInset: PropTypes.number,

    /** left margin inset of the bottom border **/
    bottomInset: PropTypes.number,

    /** an optional label for the input group **/
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

    const children = React.Children.map(this.props.children, (child, i) => {
      const isLast = i === this.props.children.length - 1
      if (!child) return null

      return (
        <View>
          {child}
          {(this.props.showBorder && (!isLast && showBottomBorder)) &&
            <Divider inset={inset} />}
        </View>
      )
    })

    const style = [
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
