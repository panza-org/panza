`RemovableInput` (component)
============================

A removable input

Props
-----

### `autoFocus`

type: `bool`
defaultValue: `true`


### `backgroundColor`

type: `string`
defaultValue: `'white'`


### `editable`

type: `bool`
defaultValue: `true`


### `height`

type: `number`
defaultValue: `50`


### `keyboardType`

defaultValue: `'numeric'`


### `label`

type: `string`


### `labelWidth`

type: `number`


### `onChangeText` (required)

type: `func`


### `onRequestRemove`

type: `func`
defaultValue: `function noop() {}`


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


### `verticalHeight`

type: `number`
defaultValue: `80`

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
