`InputToggle` (component)
=========================

An basic input row with a label and Switch, allowing
the user to toggle a boolean value.

Props
-----

### `backgroundColor`

type: `string`
defaultValue: `'transparent'`


### `editable`

type: `bool`
defaultValue: `true`


### `label` (required)

type: `string`


### `onTintColor`

type: `string`
defaultValue: `'success'`


### `onValueChange` (required)

type: `func`


### `style`

type: `any`


### `switchProps`

type: `object`


### `value` (required)

type: `bool`

## Examples

### Basic example with label and custom tint color

![Input Toggle](images/InputToggle.png)

```javascript
import { InputToggle } from 'panza'

<InputToggle
  value={this.state.editable}
  onTintColor='warning'
  onValueChange={(editable) => this.setState({ editable })}
  label='Editable?'
/>
```
