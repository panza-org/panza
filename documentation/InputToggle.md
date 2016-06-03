`InputToggle` (component)
=========================

An input row with a <Switch /> that allows
the user to toggle a value.

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

defaultValue: `'success'`


### `onValueChange` (required)

type: `func`


### `style`

type: `any`


### `value` (required)

type: `bool`

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
