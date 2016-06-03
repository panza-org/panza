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
