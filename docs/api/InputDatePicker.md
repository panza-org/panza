## InputDatePicker 
 
InputDatePicker a cross-platform InputRow inputting
dates.

On iOS devices, the row examples to reveal
DatePickerIOS when selected. The humanized date should
be supplied as the value prop, and it should be
updated when the value of the date-picker changes.

On Anroid, the date-picker prompts the user to select
a date in a modal menu.

__Platforms__:  ios, android
 
 __Composes__: [InputTouchable](InputTouchable.md) 


### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
expanded | bool  (required) |   | 
onToggleExpansion | func  (required) |   | function called to toggle the visibility of the date-picker. (iOS only) *
value | string  |   | the currently selected date to be displayed in collapsed row. *
maxDate | string  |   | 
minDate | string  |   | 
label | string  |   | 
mode | string  |   | 
date | object  (required) |   | 
onDateChange | func  (required) |   | 
editable | bool  | true | 
inverted | bool  |   | 
 

### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Input%20Date%20Picker'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CBase%20%2F%3E%2C%0A%20%20%20%20%20%20exampleString%3A%20%60%0A%20%20%20%20%20%20%20%20%3CInputDatePicker%0A%20%20%20%20%20%20%20%20%20%20expanded%3D%7Bthis.state.focusDate%7D%0A%20%20%20%20%20%20%20%20%20%20date%3D%7Bthis.state.date%7D%0A%20%20%20%20%20%20%20%20%20%20editable%3D%7Bthis.state.editable%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Bnew%20Date(this.state.date).getFullYear().toString()%7D%0A%20%20%20%20%20%20%20%20%20%20onDateChange%3D%7B(date)%20%3D%3E%20this.setState(%7B%20date%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20label%3D'Your%20Birthday'%0A%20%20%20%20%20%20%20%20%20%20onToggleExpansion%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20LayoutAnimation.spring()%0A%20%20%20%20%20%20%20%20%20%20%20%20this.setState(%7B%20focusDate%3A%20!this.state.focusDate%20%7D)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%60%0A%20%20%20%20%7D%0A%20%20%5D%0A%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}
