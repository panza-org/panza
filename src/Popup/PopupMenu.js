import React, { PropTypes } from 'react'
import { TouchableHighlight, View, StyleSheet } from 'react-native'
import {
  Popup,
  Text,
  Base
} from '../index'
import {
  themeProvider
} from '../config'

/**
 * Render a PopupMenu option
 */

const PopupMenuOption = ({
  opt,
  inverted,
  panza,
  ...props
}) => {

  if (React.isValidElement(opt)) {
    return opt
  }

  const {
    onPress,
    label,
    primary,
    backgroundColor,
    condensed,
    ...other
  } = opt

  return (
    <Base
      py={condensed ? 1 : 2}
      px={2}
      underlayColor='#eee'
      backgroundColor={backgroundColor}
      Component={TouchableHighlight}
      onPress={() => {
        props.onPress()
        if (onPress) onPress()
      }}
      style={{
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: inverted ? panza.invertedBorderColor : panza.borderColor
      }}
      {...other}
    >
      <View style={{ justifyContent: 'center' }}>
        <Text
          bold={primary}
          small={condensed}
          color='primary'
          numberOfLines={1}
          textAlign='center'
          inverted={inverted}
        >
          {label}
        </Text>
      </View>
    </Base>
  )
}

PopupMenuOption.propTypes = {
  inverted: PropTypes.bool,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  opt: PropTypes.shape({
    onPress: PropTypes.func,
    label: PropTypes.string.isRequired
  }),
  panza: PropTypes.object.isRequired
}

const Option = themeProvider(PopupMenuOption)

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
    onRequestClose: PropTypes.func.isRequired,
    onRequestShow: PropTypes.func,
    options: PropTypes.array.isRequired,
    showCancel: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    position: PropTypes.oneOf(['bottom', 'center', 'top']),
    customHeader: PropTypes.node,
    inverted: PropTypes.bool,
    backgroundColor: PropTypes.string,

    // Close the popup menu when an option is selected
    autoDismiss: PropTypes.bool,
    containerBackgroundColor: PropTypes.string
  }

  static defaultProps = {
    showing: false,
    position: 'center',
    backgroundColor: 'white',
    containerBackgroundColor: 'black'
  }

  render() {

    const {
      position,
      inverted,
      children,
      backgroundColor,
      containerBackgroundColor,
      options,
      title,
      autoDismiss,
      description,
      showCancel,
      onRequestClose,
      customHeader,
      ...other
    } = this.props

    const optionEls = options.map((opt, i) => (
      <Option
        backgroundColor={backgroundColor}
        inverted={inverted}
        opt={opt}
        key={opt.key || i}
        onPress={() => {
          if (autoDismiss) {
            onRequestClose()
          }
        }}
      />
    ))


    if (showCancel) {
      optionEls.push(
        <Option
          backgroundColor={backgroundColor}
          inverted={inverted}
          onPress={onRequestClose}
          opt={{
            label: 'Cancel',
            condensed: false,
            primary: true
          }}
          key='cancel'
        />
      )
    }

    const opts = (
      <Base
        backgroundColor={backgroundColor}
        rounded={15}
        m={2}
        style={{ overflow: 'hidden' }}
      >
        {customHeader}
        {(title || description) && (
          <Base py={2} px={2} align='center'>
            {title && <Text bold inverted={inverted}>{title}</Text>}
            {description && (
              <Text lineHeight={3} light small inverted={inverted}>
                {description}
              </Text>
            )}
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
        backgroundColor={containerBackgroundColor}
        {...other}
      >
        {children}
      </Popup>
    )
  }
}

PopupMenu.displayName = 'PopupMenu'

export default PopupMenu
