`InputRow` (component)
======================



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
