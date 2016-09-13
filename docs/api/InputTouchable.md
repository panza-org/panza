## InputTouchable 
 
An InputTouchable is typically used within the context of an
InputGroup, when you want the user to select a value from another
ListView, PopupMenu, etc. It's a very simple wrapper around
TouchableRow, to make it play nicely with other Input components.

__Platforms__:  ios, android, web
 
 __Composes__: [TouchableRow](TouchableRow.md), [Text](Text.md) 


### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
backgroundColor | string  | 'white' | 
label | string&#124;node (required) |   | 
icon | node  |   | 
image | object  |   | 
value | string&#124;node |   | 
showMore | bool  | false | 
condensed | bool  |   | 
onPress | func  (required) |   | 
disabled | bool  | false | 
labelColor | string  | 'default' | 
inverted | bool  |   | 
 
