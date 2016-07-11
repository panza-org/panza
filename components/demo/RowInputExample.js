import React, { PropTypes } from 'react'
import {
  View,
  Text,
  ScrollView,
  Picker,
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
      editable: true,
      language: 'Javascript',
      date: new Date()
    }
  }

  render() {
    return (
      <Base flex={1}>
        <ScrollView style={{ flex: 1 }}>
          <InputGroup label='ROW INPUT' inset={16} mt={3}>
            <InputToggle
              value={this.state.editable}
              onTintColor='warning'
              onValueChange={(editable) => this.setState({ editable })}
              label='Editable?'
            />
            <InputRow
              placeholder='Basic Input'
              value={this.state.basic}
              editable={this.state.editable}
              onChangeText={(basic) => this.setState({ basic })} />

            <InputRow
              label='Basic Input with Label'
              placeholder='Your value'
              value={this.state.label}
              editable={this.state.editable}
              onChangeText={(label) => this.setState({ label })} />


          <InputRow
              label='Basic Input with Label & Vertical'
              placeholder='Your value'
              vertical
              value={this.state.label}
              editable={this.state.editable}
              onChangeText={(label) => this.setState({ label })} />

              <InputRow
                removable
                onRemove={() => {

                }}
                label='Removable'
                placeholder='Your value'
                value={this.state.label}
                editable={this.state.editable}
                onChangeText={(label) => this.setState({ label })} />
                <InputRow
                  removable
                  condensed
                  onRemove={() => {

                  }}
                  label='Removable Condensed'
                  placeholder='Your value'
                  value={this.state.label}
                  editable={this.state.editable}
                  onChangeText={(label) => this.setState({ label })} />

            <InputRow
              icon={<SearchIcon />}
              textAlign='left'
              editable={this.state.editable}
              placeholder='Input with icon' />
        </InputGroup>
          <InputHelpText>
            Some help text. Aute nulla ex ea amet sunt occaecat qui fugiat cupidatat fugiat in. Veniam amet elit et tempor sit ea nulla adipisicing laboris pariatur.
          </InputHelpText>

          <Base py={2}>
            <InputRow
              textAlign='center'
              editable={this.state.editable}
              placeholder='Centered input' />
          </Base>

          <InputGroup inset={16} mt={3}>
            <InputToggle
              value={this.state.toggle}
              editable={this.state.editable}
              onValueChange={(toggle) => this.setState({ toggle })}
              label='InputToggle'
            />

          <InputPicker
            expanded={this.state.focusPicker}
            value={this.state.language}
            showMore
            label='Select a Language'
            editable={this.state.editable}
            onToggleExpansion={() => {
              this.setState({ focusPicker: !this.state.focusPicker })
            }}>
            <Picker
              prompt='Select a language'
              style={{ width: 300 }}
              selectedValue={this.state.language}
              onValueChange={(lang) => this.setState({ language: lang })}>
                <Picker.Item label='Java' value='Java' />
                <Picker.Item label='Javascript' value='Javascript' />
            </Picker>
        </InputPicker>

        <InputDatePicker
          expanded={this.state.focusDate}
          date={this.state.date}
          showMore
          editable={this.state.editable}
          value={new Date(this.state.date).getFullYear().toString()}
          onDateChange={(date) => this.setState({ date })}
          label='Your Birthday'
          onToggleExpansion={() => {
            LayoutAnimation.spring()
            this.setState({ focusDate: !this.state.focusDate })
          }}
        />


          </InputGroup>

          <InputGroup mb={0} mt={3} label='TOUCHABLE INPUT'>

          <TouchableInput
            editable={this.state.editable}
            onPress={() => {
              console.log('baby baby baby, noo!')
            }}
            showMore
            label='With Label'
          />
          <TouchableInput
            editable={this.state.editable}
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


          {/*<InputGroup
            label='REMOVABLE INPUT'
            inset={16} mt={3} mb={3}>
            <RemovableInput
              placeholder='Non removable without label'
              removable={false}
              editable={this.state.editable}
              onRemove={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={this.state.removeInput}
            />
            <RemovableInput
              icon={<SearchIcon />}
              placeholder='Non removable without label'
              removable={false}
              editable={this.state.editable}
              onRemove={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={this.state.removeInput}
            />

            <RemovableInput
              placeholder='Non touchable label'
              removable={true}
              height={40}
              onRemove={noop}
              editable={this.state.editable}
              label='Cant touch this'
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={this.state.removeInput}
            />
            <RemovableInput
              placeholder='Removable without label'
              removable={true}
              onRemove={noop}
              height={40}
              editable={this.state.editable}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={this.state.removeInput}
            />
            <RemovableInput
              label='Label'
              placeholder='Placeholder'
              onRemove={noop}
              editable={this.state.editable}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={this.state.removeInput}
            />

            <RemovableInput
              label='Not Removable'
              removable={false}
              labelWidth={150}
              editable={this.state.editable}
              placeholder='Placeholder'
              onRemove={noop}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={'I am not removable'}
            />

            <RemovableInput
              label='Not Editable'
              labelWidth={150}
              editable={this.state.editable}
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
              editable={this.state.editable}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={''}
            />
            <RemovableInput
              label='Vertical Input'
              removable={false}
              vertical
              editable={this.state.editable}
              placeholder='Placeholder'
              onRemove={noop}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={''}
            />
            <RemovableInput
              label='Vertical input disabled'
              removable={false}
              editable={this.state.editable}
              vertical
              placeholder='Placeholder'
              onRemove={noop}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={'Some value of some sort right here'}
            />


          </InputGroup>*/}

          <InputGroup>
            <TouchableInput
              editable={this.state.editable}
              onPress={() => {
                console.log('baby baby baby, noo!')
              }}
              showMore
              label='With Label'
            />
          </InputGroup>


        </ScrollView>
      </Base>
    )
  }
}
