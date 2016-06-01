import React, { PropTypes } from 'react'
import {
  View,
  Text,
  ScrollView,
  LayoutAnimation
} from 'react-native'

import {
  Base,
  InputGroup,
  InputRowCell,
  InputRow,
  InputToggle,
  InputHelpText,
  InputPicker,
  InputDatePicker,
  RemovableInput,
  SearchIcon,
  AddRow,
  TouchableInput
} from '../panza'

const noop = function(){}

export default class InputRowExample extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      basic: '',
      label: '',
      toggle: true,
      focusPicker: false,
      focusDate: false,
      date: new Date()
    }
  }

  render() {
    return (
      <Base flex={1}>
        <ScrollView style={{ flex: 1 }}>
          <InputGroup label='ROW INPUT' inset={16} mt={3}>
            <InputRow
              placeholder='Basic Input'
              value={this.state.basic}
              onChangeText={(basic) => this.setState({ basic })} />

            <InputRow
              label='Basic Input with Label'
              placeholder='Your value'
              value={this.state.label}
              onChangeText={(label) => this.setState({ label })} />
            <InputRow
              icon={<SearchIcon />}
              textAlign='left'
              placeholder='Input with icon' />
        </InputGroup>
          <InputHelpText>
            Some help text. Aute nulla ex ea amet sunt occaecat qui fugiat cupidatat fugiat in. Veniam amet elit et tempor sit ea nulla adipisicing laboris pariatur.
          </InputHelpText>

          <Base py={2}>
            <InputRow
              textAlign='center'
              placeholder='Centered input' />


          </Base>

          <InputGroup inset={16} mt={3}>
            <InputToggle
              value={this.state.toggle}
              onValueChange={(toggle) => this.setState({ toggle })}
              label='InputToggle'
            />
          <InputPicker
            hasFocus={this.state.focusPicker}
            value={'30%'}
            label='Percentage'
            onRequestFocus={() => this.setState({ focusPicker: true })}
            onRequestClose={() => this.setState({ focusPicker: false })}
          >
          <View><Text>Custom Picker</Text></View>
        </InputPicker>
        <InputDatePicker
          hasFocus={this.state.focusDate}
          date={this.state.date}
          value={new Date(this.state.date).getFullYear().toString()}
          onDateChange={(date) => this.setState({ date })}
          label='Your Birthday'
          onRequestFocus={() => {
            LayoutAnimation.spring()
            this.setState({ focusDate: true })
          }}
          onRequestClose={() => {
            LayoutAnimation.spring()
            this.setState({ focusDate: false })
          }}
        />


          </InputGroup>

          <InputGroup mb={0} mt={3} label='TOUCHABLE INPUT'>

          <TouchableInput
            onPress={() => {
              console.log('baby baby baby, noo!')
            }}
            showMore
            label='With Label'
          />
          <TouchableInput
            onPress={() => {
              console.log('baby baby baby, noo!')
            }}
            showMore
            value='And Value'
            label='With Label'
          />
          <AddRow
            onPress={() => {
              console.log('baby baby baby, ohh!')
            }}
            label='<AddRow/>'
          />
          <AddRow
            condensed
            onPress={() => {
              console.log('baby baby baby, ohh!')
            }}
            label='add row condensed'
          />
          </InputGroup>


          <InputGroup
            label='REMOVABLE INPUT'
            inset={16} mt={3} mb={3}>
            <RemovableInput
              placeholder='Non removable without label'
              removable={false}
              onRemove={noop}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={this.state.removeInput}
            />
            <RemovableInput
              placeholder='Non touchable label'
              removable={true}
              onRemove={noop}
              label='Cant touch this'
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={this.state.removeInput}
            />
            <RemovableInput
              placeholder='Removable without label'
              removable={true}
              onRemove={noop}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={this.state.removeInput}
            />
            <RemovableInput
              label='Label'
              placeholder='Placeholder'
              onRemove={noop}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={this.state.removeInput}
            />

            <RemovableInput
              label='Not Removable'
              removable={false}
              labelWidth={150}
              placeholder='Placeholder'
              onRemove={noop}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={'I am not removable'}
            />

            <RemovableInput
              label='Not Editable'
              labelWidth={150}
              editable={false}
              placeholder='Placeholder'
              onRemove={noop}
              onSelectLabel={() => {
                console.log('la la laaa la')
              }}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={'I am not editable'}
            />

            <RemovableInput
              label='Removable Vertical Input'
              removable={true}
              vertical
              placeholder='Placeholder'
              onRemove={noop}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={''}
            />
            <RemovableInput
              label='Vertical Input'
              removable={false}
              vertical
              placeholder='Placeholder'
              onRemove={noop}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={''}
            />
            <RemovableInput
              label='Vertical input disabled'
              removable={false}
              editable={false}
              vertical
              placeholder='Placeholder'
              onRemove={noop}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={'Some value of some sort right here'}
            />


          </InputGroup>


        </ScrollView>
      </Base>
    )
  }
}
