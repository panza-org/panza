import React, { PropTypes } from 'react'
import { TouchableHighlight, View, StyleSheet } from 'react-native'
import {
  Popup,
  Text,
  Base
} from '../index'

/**
 * Render a PopupMenu option
 */

const PopupMenuOption = ({
  opt
}) => {

  if (React.isValidElement(opt)) {
    return opt
  }

  const {
    onPress,
    label,
    primary,
    condensed,
    ...other
  } = opt

  return (
    <Base
      py={condensed ? 1 : 2}
      px={2}
      underlayColor='#eee'
      backgroundColor='white'
      Component={TouchableHighlight}
      onPress={onPress}
      style={{
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#aaa'
      }}
      {...other}
    >
      <View style={{ justifyContent: 'center' }}>
        <Text bold={primary} small={condensed} color='primary' numberOfLines={1} textAlign='center'>
          {label}
        </Text>
      </View>
    </Base>
  )
}

PopupMenuOption.propTypes = {
  opt: PropTypes.shape({
    onPress: PropTypes.func.isRequired,
    label: PropTypes.func.isRequired
  })
}

/**
 * PopupMenu provides similar functionality to Apple's
 * ActionSheet, but is more flexible, and cross-platform compatibile.
 * @composes Popup
 */

class PopupMenu extends React.Component {

  static displayName = 'PopupMenu'

  static propTypes = {
    children: PropTypes.any.isRequired,
    showing: PropTypes.bool.isRequired,
    Content: PropTypes.node.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    onRequestShow: PropTypes.func,
    options: PropTypes.array.isRequired,
    showCancel: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    position: PropTypes.oneOf(['bottom', 'center', 'top']),
    customHeader: PropTypes.node
  }

  static defaultProps = {
    showing: false,
    position: 'center'
  }

  render() {

    const {
      position,
      children,
      options,
      title,
      description,
      showCancel,
      onRequestClose,
      customHeader,
      ...other
    } = this.props

    const optionEls = options.map((opt, i) => (
      <PopupMenuOption opt={opt} key={opt.key || i} />
    ))

    if (showCancel) {
      optionEls.push(
        <PopupMenuOption
          opt={{
            label: 'Cancel',
            condensed: false,
            primary: true,
            onPress: () => onRequestClose()
          }}
          key='cancel'
        />
      )
    }

    const opts = (
      <Base backgroundColor='white' rounded={15} m={2} style={{ overflow: 'hidden' }}>
        {customHeader}
        {(title || description) && (
          <Base py={2} px={2} align='center'>
            {title && <Text bold >{title}</Text>}
            {description && <Text lineHeight={3} light small>{description}</Text>}
          </Base>
        )}
        <Base>
          {optionEls}
        </Base>
      </Base>
    )

    return (
      <Popup
        Content={opts}
        position={position}
        onRequestClose={onRequestClose}
        backgroundColor='black'
        {...other}
      >
        {children}
      </Popup>
    )
  }
}

export default PopupMenu
