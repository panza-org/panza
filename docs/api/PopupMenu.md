`PopupMenu` (component)
=======================

PopupMenu provides similar functionality to Apple's
ActionSheet, but is more flexible, and cross-platform compatibile.
@composes Popup

Props
-----

### `backgroundColor`

type: `string`
defaultValue: `'white'`


### `children` (required)

type: `any`


### `customHeader`

type: `node`


### `description`

type: `string`


### `inverted`

type: `bool`


### `onRequestClose` (required)

type: `func`


### `onRequestShow`

type: `func`


### `options` (required)

type: `array`


### `position`

type: `enum('bottom'|'center'|'top')`
defaultValue: `'center'`


### `showCancel`

type: `bool`


### `showing` (required)

type: `bool`
defaultValue: `false`


### `title`

type: `string`

