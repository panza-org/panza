import React, { PropTypes } from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Base,
  SectionHeader,
  Divider
} from '../index'

/**
 * Wrapping components with InputGroup gives you the
 * option of giving Inputs dividing borders, dividing
 * borders with an inset, a top border (with a unique inset value),
 * a bottom border (with a unique inset value), shared background
 * colours, margins, and a label. You could supply your own
 * child components, too.
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
    label: PropTypes.string,

    children: PropTypes.node,
    backgroundColor: PropTypes.string,

    inverted: PropTypes.bool
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
      showTopBorder,
      backgroundColor,
      topInset,
      inverted,
      showBorder,
      label,
      bottomInset,
      ...other
    } = this.props

    const kids = []
    let count = 0

    // top border
    if (showTopBorder) {
      kids.push(
        <Divider
          key='divider-top'
          inset={topInset}
          inverted={inverted}
        />
      )
    }

    React.Children.forEach(this.props.children, (child) => {

      // handle null values
      if (!child) return

      // regular border
      if ((count > 0) && showBorder) {
        kids.push(
          <Divider
            key={`divider-${count}`}
            inset={inset}
            inverted={inverted}
          />
        )
      }

      kids.push(child)
      count++
    })

    // bottom border
    if (showBottomBorder) {
      kids.push(
        <Divider
          key='divider-bottom'
          inset={bottomInset}
          inverted={inverted}
        />
      )
    }

    const style = [
      styles.group,
      this.props.style
    ]

    return (
      <Base baseStyle={style} {...other}>
        {label && (
          <SectionHeader
            inverted={inverted}
            backgroundColor='transparent'
          >
            {label}
          </SectionHeader>
        )}
        <Base backgroundColor={backgroundColor}>
          {kids}
        </Base>
      </Base>
    )

  }
}

const styles = StyleSheet.create({
  group: {
    backgroundColor: 'transparent'
  }
})

export default InputGroup
