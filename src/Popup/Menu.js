// @flow
import React, { PropTypes } from 'react'
import {
  Modal,
  Platform,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native'
import {
  Base,
  Text
} from '../index'
import { themeProvider } from '../config'

type OptionsType = {
  onPress: Function;
  label: string;
}

type Props = {
  showing: boolean;
  onRequestClose: Function;
  autoDismiss?: boolean;
  showCancel?: boolean;
  backgroundColor?: string;
  modalProps?: Object;
  options: ReactElement<any> | Array<OptionsType>;
}

export default class Popup extends React.Component {

  static displayName = 'Popup'

  static defaultProps = {
    showCancel: true,
    autoDismiss: true,
    modalProps: {},
    backgroundColor: 'rgba(0,0,0,0.6)'
  }

  static propTypes = {
    showing: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    autoDismiss: PropTypes.bool,
    showCancel: PropTypes.bool,
    backgroundColor: PropTypes.string,
    modalProps: PropTypes.object,
    customHeader: PropTypes.node,
    options: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.arrayOf(PropTypes.shape({
        onPress: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired
      }))
    ])
  }

  props: Props;

  render():ReactElement<any> {
    const {
      options,
      autoDismiss,
      showing,
      onRequestClose,
      showCancel,
      modalProps,
      customHeader,
      backgroundColor
    } = this.props

    const isArray = Array.isArray(options)

    const els = isArray
      ? options.map((opt, i) => (
        <Option
          opt={opt}
          key={opt.key || i}
          onPress={() => {
            if (autoDismiss) onRequestClose()
          }}
        />
      ))
      : options

    if (showCancel && isArray) {
      els.push(
        <Option
          onPress={onRequestClose}
          opt={{
            label: 'Cancel',
            condensed: false,
            primary: true,
            underlayColor: '#eee'
          }}
          key='cancel'
        />
     )
    }

    return (
      <Modal
        animationType='fade'
        transparent
        visible={showing}
        onRequestClose={onRequestClose}
        {...modalProps}
      >
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <Base
            flex={1}
            backgroundColor={backgroundColor}
            alignSelf='stretch'
            justify='center'
          >
            <Base
              backgroundColor='white'
              m={2}
              rounded={Platform.select({ ios: 16, android: 0 })}
              style={{ elevation: 2, overflow: 'hidden' }}
            >
              {customHeader}
              <Base>
                {els}
              </Base>
            </Base>
          </Base>
        </TouchableWithoutFeedback>
      </Modal>
    )

  }
}

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
          color='black'
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
