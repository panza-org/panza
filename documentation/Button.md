`Button` (component)
====================

A basic button that inherits from Base, and provides colourization
based upon background color configuration.

Props
-----

### `backgroundColor`

type: `string`
defaultValue: `'info'`


### `block`

stretch the button width *

type: `bool`
defaultValue: `false`


### `disabled`

disables the button, and reduces its opacity *

type: `bool`
defaultValue: `false`


### `label`

the text string for the button. alternatively, pass a Text as a child *

type: `string`


### `onPress` (required)

type: `func`


### `p`

defaultValue: `2`


### `textColor`

style text colour when using label prop *

type: `string`
defaultValue: `'white'`


### `underlayColor`

type: `string`
defaultValue: `'darken'`

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
