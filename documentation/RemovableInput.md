`RemovableInput` (component)
============================

An input row typically used for inputing lists of
things, and lists of things with changeable labels, such
as a list of phone numbers, addresses, etc. You can see
this ui-pattern used in Apple's address book app.

By default, these inputs are removable. 

This needs a refactor.

Props
-----

### `amountDecorator`

type: `bool`


### `autoFocus`

type: `bool`
defaultValue: `false`


### `backgroundColor`

type: `string`
defaultValue: `'white'`


### `condensed`

type: `bool`
defaultValue: `false`


### `editable`

type: `bool`
defaultValue: `true`


### `keyboardType`

defaultValue: `'numeric'`


### `label`

type: `string`


### `labelWidth`

type: `number`


### `onChangeText` (required)

type: `func`


### `onRemove`

type: `func`


### `onSelectLabel` (required)

type: `func`


### `placeholder`

type: `string`


### `removable`

type: `bool`
defaultValue: `true`


### `textAlign`

defaultValue: `'right'`


### `value`

type: `string`


### `vertical`

type: `bool`
defaultValue: `false`

## Examples

### RemovableInput with various options

![Removable Input options](images/RemovableInput.png)

```javascript
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
```
