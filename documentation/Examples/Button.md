![Basic button](images/ButtonBasic.png)
```javascript
import { Button } from 'panza'

<Button
  onPress={() => console.log('hello world')}
  label='Default Button'
/>
```

![Block button](images/ButtonBlock.png)
```javascript
import { Button } from 'panza'

<Button
  block
  onPress={() => console.log('hello world')}
  label='Button with block'
/>
```

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
