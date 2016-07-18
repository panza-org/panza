`Button` (component)
====================

A basic button that inherits from Base, and provides colourization
based upon background color configuration.

Props
-----

### `backgroundColor`

type: `string`


### `block`

stretch the button width *

type: `bool`
defaultValue: `false`


### `borderColor`

type: `string`


### `children`

type: `node`


### `default`

type: `bool`


### `disabled`

disables the button, and reduces its opacity *

type: `bool`
defaultValue: `false`


### `icon`

optional icon *

type: `union(string|node)`


### `large`

type: `bool`


### `medium`

type: `bool`


### `negative`

type: `bool`


### `onPress`

type: `func`


### `outline`

defaultValue: `false`


### `positive`

type: `bool`


### `primary`

button theme *

type: `bool`


### `rounded`

defaultValue: `6`


### `secondary`

type: `bool`


### `size`

defaultValue: `'medium'`


### `small`

button size *

type: `bool`


### `textColor`

style text colour when using label prop *

type: `string`


### `theme`

defaultValue: `'default'`


### `underlayColor`

type: `string`

## Examples

### Basic button with label

![Basic button](/documentation/images/ButtonBasic.png)
```javascript
import { Button } from 'panza'

<Button onPress={() => console.log('hello world')}>
  Default Button
</Button>
```

### Button block

![Block button](images/ButtonBlock.png)
```javascript
import { Button } from 'panza'

<Button
  block
  onPress={() => console.log('hello world')}>
    Button with Block
</Button>
```

### Custom, smaller button

![Custom button](images/ButtonCustom.png)
```javascript
import { Button, SecondaryText } from 'panza'

<Button
  onPress={() => console.log('hello world')}
  p={1}>
    <SecondaryText color='white'>
      Button with custom text style & padding
    </SecondaryText>
</Button>
```

### Button with an icon

![Button with icon](images/ButtonWithIcon.png)
```javascript
import { SuccessButton, PlusIcon, SecondaryText } from 'panza'

<SuccessButton
  p={0}
  px={1}
  onPress={() => console.log('onPress')}>
    <PlusIcon color='white' mr={1}/>
    <SecondaryText color='white'>Add Another</SecondaryText>
</SuccessButton>
```
