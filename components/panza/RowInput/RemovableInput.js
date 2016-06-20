import React, {PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  PixelRatio,
  Animated,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'

import {
  Base,
  Icon,
  TextBase,
  PrimaryText,
  SecondaryText,
  SecondaryTextInput,
  InputRowRevealOptions,
  InputRowCell
} from '../index'

const MAX_ACTIONS = 2

const VerticalDivider = () => {
  return <Base backgroundColor='white' style={{ width: 1 }} />
}

const RowActions = ({children, style, ...other}) => {

  let buttons = []

  if (Array.isArray(children)) {
    React.Children.forEach((child, i) => {
      const isNotLast = i < children.length - 1
      buttons.push(child)
      if (isNotLast) {
        buttons.push(<VerticalDivider key={i} />)
      }
    })
  } else {
    buttons = children
  }

  return (
    <Base
      baseStyle={[
        { flex: 1, flexDirection: 'row', justifyContent: 'flex-end', height: 40},
        style
      ]}
      {...other}>
        {children}
    </Base>
  )
}

const RowAction = ({children, ...props}) => {
  return (
    <Base
      justify='center'
      px={2}
      baseStyle={{ height: 40}}
      Component={TouchableHighlight}
      {...props}>
        {children}
    </Base>
  )
}

/**
 * Remove button
 */

const RemoveButton = (props) => {
  return (
    <Base
      Component={TouchableOpacity}
      backgroundColor='error'
      baseStyle={styles.iconButton}
      {...props}>
      <Icon
        name='md-remove'
        size={15}
        color='white'
      />
    </Base>
  )
}

/**
 * A row that reveal options
 */

class RevealingRow extends React.Component {

  static propTypes = {
    showingOptions: PropTypes.bool.isRequired
  }

  static defaultProps = {
    showingOptions: false
  }

  componentWillReceiveProps(nextProps) {
    // animate in
    if (!this.props.showingOptions && nextProps.showingOptions) {
      this.showOptions()

    // animate out
    } else if (!nextProps.showingOptions && this.props.showingOptions) {
      this.hideOptions()
    }
  }

  showOptions() {
    console.log('show options')
    Animated.timing(
      this.state.leftPosition,
      {toValue: -170}
    ).start()
  }

  hideOptions() {
    console.log('hide options')
    Animated.timing(
      this.state.leftPosition,
      {toValue: 0}
    ).start()
  }

  constructor(props) {
    super(props)
    this.onViewLayout = this.onViewLayout.bind(this)
    this.state = {
      leftPosition: new Animated.Value(0),
      rowHeight: 40,
      renderRevealOptions: false
    }
  }

  componentDidMount() {
    if (Platform.OS === 'web') {
      console.log(this._view.clientHeight)
      this.setState({
        renderRevealOptions: true,
        rowHeight: this._view.clientHeight
      })
    }
  }

  render() {

    return(
      <View style={{ position: 'relative', paddingLeft: 16,  height: this.state.rowHeight}}>
        {this.state.renderRevealOptions && (
          <View style={[styles.revealContainer, { height: this.state.rowHeight }]}>
            {this.props.revealedContent}
          </View>
        )}
        <div ref={(ref) => this._view = ref}>
        <Animated.View
          onLayout={this.onViewLayout}
          style={{
            flex: 1,
            backgroundColor: 'white',
            ...Platform.select({
              ios: { transform: [{ translateX: this.state.leftPosition }] },
              android: { transform: [{ translateX: this.state.leftPosition }] },
              web: { left: this.state.leftPosition }
            })
          }}>
          {this.props.children}
        </Animated.View>
        </div>
      </View>
    )
  }

  onViewLayout(e) {
    this.setState({
      renderRevealOptions: true,
      rowHeight: e.nativeEvent.layout.height
    })
  }
}

/**
 * A removable input
 */

class RemovableInput extends React.Component {

  static displayName = 'RemovableInput'

  static propTypes = {

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
          this.props.vertical && { marginTop: 7 }
        ]}
        disabled={(!this.props.editable || !this.props.onSelectLabel)}
        onPress={() => {
          if (this.state.showDelete) {
            this.hideDelete()
          }
          this.props.onSelectLabel()
        }}>
          <TextBase
            color={(this.props.editable && this.props.onSelectLabel) ? 'primary' : 'default'}
            color='primary'
            baseStyle={styles.labelText}>
              {this.props.label}
          </TextBase>
        </TouchableOpacity>
    )
  }

  render() {

    const revealed = (
      <RowActions>
        <RowAction backgroundColor='#eee'>
          <SecondaryText>Cancel</SecondaryText>
        </RowAction>
        <RowAction backgroundColor='warning'>
          <SecondaryText>Remove</SecondaryText>
        </RowAction>
      </RowActions>
    )

    return (
      <RevealingRow
        showingOptions={this.state.showingOptions}
        revealedContent={revealed}>
        <Base row flex={1}>

            <RemoveButton
              style={ { marginRight: 16 } }
              onPress={() =>  {
                console.log('show options')
                this.setState({ showingOptions: true })
              }}
            />

          <Base
            flex={1}
            py={2}
            row={!this.props.vertical}>

            {this.props.inputLabel ? this.props.inputLabel :
              this.renderLabel()
            }

            {this.props.editable
              ? (
                <SecondaryTextInput
                  autoFocus={this.props.autoFocus}
                  placeholder={this.props.placeholder}
                  style={[styles.input, (this.props.vertical || !this.props.label) && { paddingLeft: 0 }]}
                  value={this.props.value}
                  onChangeText={this.props.onChangeText}
                />
              )
              : (
                <Base px={this.props.vertical ? 0 : 2} flex={1} justifyContent='center'>
                  <SecondaryText numberOfLines={1}>
                    {this.props.value}
                  </SecondaryText>
                </Base>
              )
            }
          </Base>
        </Base>
      </RevealingRow>
    )
  }
}

/**
 * An input row typically used for inputing lists of
 * things, and lists of things with changeable labels, such
 * as a list of phone numbers, addresses, etc. You can see
 * this ui-pattern used in Apple's address book app.
 *
 * By default, these inputs are removable.
 *
 * This needs a refactor.
 */

// class RemovableInput extends React.Component {
//
//   static displayName = 'RemovableInput'
//
//   static propTypes = {
//     label: PropTypes.string,
//     autoFocus: PropTypes.bool,
//     removable: PropTypes.bool,
//     placeholder: PropTypes.string,
//     vertical: PropTypes.bool,
//     amountDecorator: PropTypes.bool,
//     condensed: PropTypes.bool,
//     onSelectLabel: PropTypes.func.isRequired,
//     onRemove: PropTypes.func,
//     autoFocus: PropTypes.bool,
//     onChangeText: PropTypes.func.isRequired,
//     value: PropTypes.string,
//     backgroundColor: PropTypes.string,
//     editable: PropTypes.bool,
//     labelWidth: PropTypes.number
//   }
//
//   static defaultProps = {
//     removable: true,
//     editable: true,
//     backgroundColor: 'white',
//     textAlign: 'right',
//     keyboardType: 'numeric',
//     autoFocus: true,
//     vertical: false,
//     condensed: false,
//     autoFocus: false
//   }
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       translateX: new Animated.Value(0)
//     }
//   }
//
//   renderLabel() {
//     if (!this.props.label) return null
//
//     return (
//       <TouchableOpacity
//         style={[
//           styles.label,
//           this.props.labelWidth && { width: this.props.labelWidth },
//           this.props.vertical && { marginTop: 7 }
//         ]}
//         disabled={(!this.props.editable || !this.props.onSelectLabel)}
//         onPress={() => {
//           if (this.state.showDelete) {
//             this.hideDelete()
//           }
//           this.props.onSelectLabel()
//         }}>
//           <TextBase
//             color={(this.props.editable && this.props.onSelectLabel) ? 'primary' : 'default'}
//             baseStyle={styles.labelText}>
//               {this.props.label}
//           </TextBase>
//         </TouchableOpacity>
//     )
//   }
//
//   showDelete() {
//     Animated.spring(
//       this.state.translateX,
//       { toValue: -150 }
//     ).start()
//   }
//
//   hideDelete() {
//     Animated.spring(
//       this.state.translateX,
//       { toValue: 0 }
//     ).start()
//   }
//
//   render () {
//     return (
//       <View>
//
//         {this.props.removable &&
//           <InputRowRevealOptions
//             height={this.props.vertical ? 80 : 40}
//             options={[
//               {
//                 label: 'Cancel',
//                 onPress: () => {
//                   this.hideDelete()
//                 }
//               },
//               {
//                 label: 'Delete',
//                 onPress: () => this.props.onRemove(),
//                 backgroundColor: 'error'
//               }
//             ]}
//           />
//         }
//
//       <Animated.View
//         style={[
//           styles.container,
//           this.props.styles, {
//             transform: [{ translateX: this.state.translateX }],
//             backgroundColor: this.props.backgroundColor
//           },
//           this.props.vertical && styles.verticalStyle
//         ]}>
//         {(this.props.editable && this.props.removable) && (
//           <RemoveButton
//             style={ { marginRight: 16 } }
//             onPress={() => this.showDelete()}
//           />
//         )}
//         <Base
//           flex={1}
//           pt={this.props.vertical ? 1 : 0}
//           row={!this.props.vertical}>
//
//           {this.props.inputLabel ? this.props.inputLabel :
//             this.renderLabel()
//           }
//
//           {this.props.editable
//             ? (
//               <SecondaryTextInput
//                 autoFocus={this.props.autoFocus}
//                 placeholder={this.props.placeholder}
//                 style={[styles.input, (this.props.vertical || !this.props.label) && { paddingLeft: 0 }]}
//                 value={this.props.value}
//                 onChangeText={this.props.onChangeText}
//               />
//             )
//             : (
//               <Base px={this.props.vertical ? 0 : 2} flex={1} justifyContent='center'>
//                 <SecondaryText numberOfLines={1}>
//                   {this.props.value}
//                 </SecondaryText>
//               </Base>
//             )
//           }
//         </Base>
//
//       </Animated.View>
//       </View>
//     )
//   }
// }

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingLeft: 15
  },
  verticalStyle: {
    height: 80
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 10
  },
  input: {
    flex: 1,
    padding: 10,
    paddingRight: 16,
    paddingLeft: 16
  },
  label: {
    flex: 0,
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
  },
  icon: {
    backgroundColor: 'transparent',
    marginTop: 2
  },
  revealContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  }
})

export default RemovableInput
