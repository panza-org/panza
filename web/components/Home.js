import React from 'react'
import { View, Text } from 'react-native'
import { Base, SubNav, NavBar, NavTouchableText,
  InputGroup,
  InputRow,
  InputToggle,
  SearchIcon,
  RemovableInput
 } from '../../components/panza'

function noop() {}

class Home extends React.Component {

  state = {}

  render = () => {
    return (
      <div>
        <View>
            <NavBar
              mt={2}
              LeftButton={(
                <NavTouchableText>
                  Cancel
                </NavTouchableText>
              )}
              RightButton={(
                <NavTouchableText disabled>
                  Save
                </NavTouchableText>
              )}
              title='Touchable Text'
            />
            <SubNav
              options={[
                {
                  label: 'Option one',
                  onPress: noop
                },
                {
                  label: 'Option two',
                  onPress: noop
                },
                {
                  label: 'Option three',
                  onPress: noop
                }
              ]}
            />

            <InputGroup label='ROW INPUT' inset={16} mt={3}>

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
                icon={<SearchIcon />}
                textAlign='left'
                editable={this.state.editable}
                placeholder='Input with icon' />
          </InputGroup>

          <InputGroup
            label='REMOVABLE INPUT'
            inset={16} mt={3} mb={3}>
            <RemovableInput
              placeholder='Non removable without label'
              removable={false}
              editable={this.state.editable}
              onRemove={noop}
              onSelectLabel={noop}
              onChangeText={(removeInput) => this.setState({ removeInput })}
              value={this.state.removeInput}
            />
            <RemovableInput
              placeholder='Non touchable label'
              removable={true}
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
        </InputGroup>

      </View>
      </div>
    )
  }
}

export default Home
