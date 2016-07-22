## InputPicker 
 
InputPicker provides a unified API for Android and iOS
picker rows.

On iOS, when the user selects the picker row,
we want the row to expand to reveal the picker, which is the
child passed to this component. The value prop appears
on the top right of the picker row. It should be the humanized
version of the selected value in the picker.

On Android, we display the picker as the row itself. When
selected, the picker prompt will occur. A label is
rendered above the picker. The value prop is ignored,
since the Android picker already prints the value for us.

 
 __Composes__ [InputTouchable](InputTouchable.md), [InputExpandable](InputExpandable.md) 


 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
onToggleExpansion | func  (required) |   | a function called when toggling the visibility of the picker. (iOS only) *
editable | bool  | true | 
value | string  |   | the picker value displayed in the row. (iOS only) *
label | string  (required) |   | the label for the picker *
expanded | bool  |   | controls whether the picker is visible. (iOS only) *
backgroundColor | string  |   | 
 
