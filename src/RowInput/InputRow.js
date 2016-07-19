import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'

import {
  Base,
  Icon,
  Text,
  InputRowCell,
  Input
} from '../index'

const VerticalDivider = () => (
  <View style={{ width: StyleSheet.hairlineWidth, backgroundColor: 'white' }} />
)

import RevealingRow from './RevealingRow'

/**
 * A collection of RowActions to be displayed behind
 * a revealing row.
 */

export const RowActions = ({ children, style, ...other }) => {

  let buttons = []

  if (Array.isArray(children)) {
    children.forEach((child, i) => {
      const isNotLast = i < children.length - 1
      buttons.push(child)
      if (isNotLast) {
        buttons.push(<VerticalDivider key={`divider${i}`} />)
      }
    })
  } else {
    buttons = children
  }

  return (
    <Base
      baseStyle={[
        { flex: 1, flexDirection: 'row', justifyContent: 'flex-end' },
        style
      ]}
      {...other}
    >
        {buttons}
    </Base>
  )
}

RowActions.propTypes = {
  children: PropTypes.node,
  style: PropTypes.any
}

RowActions.displayName = 'RowActions'

/**
 * A row action that hide underneath the row, such
 * as 'Delete', or 'Edit', etc.
 */

export const RowAction = ({ children, ...props }) => (
  <Base
    justify='center'
    underlayColor='darken'
    px={2}
    baseStyle={Platform.select({ web: { outline: 'none' } })}
    Component={TouchableHighlight}
    {...props}
  >
    <View>
      {children}
    </View>
  </Base>
)

RowAction.propTypes = {
  children: PropTypes.node
}

RowAction.displayName = 'RowAction'

/**
 * Remove button
 */

export const RemoveButton = (props) => (
  <Base
    Component={TouchableOpacity}
    backgroundColor='error'
    baseStyle={styles.iconButton}
    {...props}
  >
    <Icon
      name='md-remove'
      size={15}
      color='white'
    />
  </Base>
)

RemoveButton.displayName = 'RemoveButton'


/**
 * A removable input
 */

class InputRow extends React.Component {

  static displayName = 'InputRow'

  static propTypes = {
    label: PropTypes.string,
    autoFocus: PropTypes.bool,
    removable: PropTypes.bool,
    placeholder: PropTypes.string,
    vertical: PropTypes.bool,
    onSelectLabel: PropTypes.func,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string,
    backgroundColor: PropTypes.string,
    editable: PropTypes.bool,
    labelWidth: PropTypes.number,
    verticalHeight: PropTypes.number,
    onRequestRemove: PropTypes.func,
    height: PropTypes.number,
    icon: PropTypes.node,
    inverted: PropTypes.bool,
    condensed: PropTypes.bool,
    multiline: PropTypes.bool
  }


  static defaultProps = {
    removable: false,
    editable: true,
    backgroundColor: 'white',
    verticalHeight: 80,
    height: 50
  }

  constructor(props) {
    super(props)
    this.state = {
      showingOptions: false
    }
  }

  renderLabel() {
    if (!this.props.label) return null

    return (
      <TouchableOpacity
        style={[
          styles.label,
          this.props.labelWidth && { width: this.props.labelWidth },
          this.props.vertical && { marginTop: 16 }
        ]}
        disabled={(!this.props.editable || !this.props.onSelectLabel)}
        onPress={() => {
          if (this.state.showDelete) {
            this.hideDelete()
          }
          this.props.onSelectLabel()
        }}
      >
        <Text
          bold
          small
          inverted={this.props.inverted && !this.props.onSelectLabel}
          numberOfLines={1}
          color={(this.props.editable && this.props.onSelectLabel) ? 'primary' : 'default'}
          baseStyle={styles.labelText}
        >
          {this.props.label}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {
      height,
      onRequestRemove,
      inverted,
      editable,
      backgroundColor,
      removable,
      vertical,
      condensed,
      icon,
      value,
      ...other
    } = this.props

    const revealed = (
      <RowActions>
        <RowAction
          key={'cancel'}
          onPress={() => {
            this.setState({ showingOptions: false })
          }}
          backgroundColor='#eee'
        >
          <Text small>Cancel</Text>
        </RowAction>
        <RowAction
          key='delete'
          onPress={() => {
            this.setState({ showingOptions: false })
            onRequestRemove()
          }}
          backgroundColor='negative'
        >
          <Text small color='white'>Remove</Text>
        </RowAction>
      </RowActions>
    )

    let h = height

    if (vertical) {
      h = this.props.verticalHeight
    }

    if (condensed) {
      h = 40
    }

    return (
      <RevealingRow
        backgroundColor={backgroundColor}
        style={{ flex: 0, alignSelf: 'stretch' }}
        showingOptions={this.state.showingOptions}
        revealedContent={revealed}
      >

        <InputRowCell height={h}>

          <Base row={removable} alignSelf='stretch' flex={1} pl={2}>

            {removable && (
              <RemoveButton
                style={{ marginRight: 16 }}
                onPress={() => {
                  this.setState({ showingOptions: true })
                }}
              />
            )}

            <Base
              flex={1}
              style={{ alignSelf: 'stretch' }}
              row={!vertical}
            >

            {icon && (
              React.cloneElement(icon, {
                baseStyle: { alignSelf: 'center' },
                mr: 2
              })
            )}

              {this.renderLabel()}

              {editable ? (
                <Input
                  disabled={!editable}
                  flex={1}
                  placeholderTextColor={'#888'}
                  style={[
                    styles.input,
                    (this.props.vertical || !this.props.label) && { paddingLeft: 0 }]}
                  {...other}
                />
                ) : (
                <Base px={0} flex={1} justifyContent='center'>
                  <Text numberOfLines={1} inverted={inverted}>
                    {value}
                  </Text>
                </Base>
                )
              }
            </Base>
          </Base>
        </InputRowCell>
      </RevealingRow>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 0,
    borderColor: 'transparent',
    paddingRight: 16,
    paddingLeft: 16,
    ...Platform.select({
      web: {
        borderColor: 'transparent',
        width: '100%'
      }
    })
  },
  label: {
    flex: 0,
    ...Platform.select({
      web: {
        flexShrink: 0
      }
    }),
    alignItems: 'center',
    flexDirection: 'row'
  },
  labelText: {
    marginRight: 5
  },
  iconButton: {
    height: 20,
    width: 20,
    overflow: 'hidden',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 5
  }
})

export default InputRow
