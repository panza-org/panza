![Input Picker iOS image](images/InputPickerIOS.png)

```javascript
import { InputPicker } from 'panza'
import {
  Picker
} from 'react-native'

<InputPicker
  expanded={this.state.focusPicker}
  value={this.state.language}
  label='Select a Language'
  editable={this.state.editable}
  onToggleExpansion={() => {
    this.setState({ focusPicker: !this.state.focusPicker })
  }}>
  <Picker
    prompt='Select a language'
    style={{ width: 300 }}
    selectedValue={this.state.language}
    onValueChange={(lang) => this.setState({ language: lang })}>
      <Picker.Item label='Java' value='Java' />
      <Picker.Item label='Javascript' value='Javascript' />
  </Picker>
</InputPicker>
```
