`InputRow` (component)
======================

InputRow allows the user to input text. It will render an icon or
a label if either of the props are provided, and it always
renders a TextInput. If a label prop is provided, the TextInput
is aligned to the right of the row.

InputRow composes InputRowCell, PrimaryText, and PrimaryTextInput. You can
use these components to create your own custom InputRow.

To have provide borders, wrap this component (and any other rows) in an InputGroup.

Props
-----

### `customInput`

type: `node`


### `editable`

defaultValue: `true`


### `icon`

type: `node`


### `label`

type: `string`


### `maxLength`

type: `number`


### `onChangeText`

type: `func`


### `value`

type: `string`

## Examples

### Basic input with placeholder

![Input Row](images/InputRow.png)

```javascript
import { InputRow } from 'panza'

<InputRow
  placeholder='Basic Input'
  value={value}
  editable
  onChangeText={(text) => {
    props.onChangeText(text)
  }}
/>
```

### Basic input with label and placeholder

![Input row with label](images/InputRowLabel.png)
```javascript
import { InputRow } from 'panza'

<InputRow
  label='Basic Input with Label'
  placeholder='Your value'
  value={value}
  onChangeText={onChangeText}
/>
```

### Basic input with an icon

![Input row with icon](images/InputRowIcon.png)
```javascript
import { InputRow, SearchIcon } from 'panza'

<InputRow
  icon={<SearchIcon />}
  textAlign='left'
  editable={this.state.editable}
  placeholder='Input with icon'
/>
```

### Within an InputGroup
![Input group](images/InputGroup.png)
```javascript
import {
  InputGroup,
  InputToggle,
  InputRow,
  SearchIcon
} from 'panza'

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
    icon={<SearchIcon />}
    textAlign='left'
    editable={this.state.editable}
    placeholder='Input with icon' />
</InputGroup>
```
