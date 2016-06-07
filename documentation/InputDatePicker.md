`InputDatePicker` (component)
=============================

InputDatePicker a cross-platform InputRow inputting
dates.

On iOS devices, the row examples to reveal
DatePickerIOS when selected. The humanized date should
be supplied as the value prop, and it should be
updated when the value of the date-picker changes.

On Anroid, the date-picker prompts the user to select
a date in a modal menu.

Props
-----

### `date` (required)

type: `object`


### `editable`

type: `bool`
defaultValue: `true`


### `expanded` (required)

type: `bool`


### `label`

type: `string`


### `maxDate`

type: `string`


### `minDate`

type: `string`


### `mode`

type: `string`


### `onDateChange` (required)

type: `func`


### `onToggleExpansion` (required)

function called to toggle the visibility of the date-picker. (iOS only) *

type: `func`


### `value`

the currently selected date to be displayed in collapsed row. *

type: `string`

## Examples

### Basic input date picker

![Input date picker iOS](images/InputDatePicker.png)

```javascript
import { InputDatePicker } from 'panza'

<InputDatePicker
  expanded={this.state.focusDate}
  date={this.state.date}
  editable={this.state.editable}
  value={new Date(this.state.date).getFullYear().toString()}
  onDateChange={(date) => this.setState({ date })}
  label='Your Birthday'
  onToggleExpansion={() => {
    LayoutAnimation.spring()
    this.setState({ focusDate: !this.state.focusDate })
  }}
/>

```
