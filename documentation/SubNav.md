`SubNav` (component)
====================

SubNav is typically used directly below the primary
Navigation Bar, and displays three touchable text options.
This is typically used only on iOS devices. On Android,
you'd supply icons for these options instead, and display
them on the right side of the primary Navigation Bar.

@composes Base

Props
-----

### `backgroundColor`

type: `string`
defaultValue: `'white'`


### `borderBottom`

type: `bool`
defaultValue: `true`


### `options`

type: `arrayOf[object Object]`


### `textColor`

type: `string`
defaultValue: `'primary'`

## Examples

### Basic NavBar & SubNav with 3 options

![NavBar with SubNav](images/SubNav.png)

```javascript

function noop() {
  console.log('the void')
}

<NavBar
  mt={2}
  LeftButton={(
    <NavTouchableText>
      Cancel
    </NavTouchableText>
  )}
  RightButton={(
    <NavTouchableText disabled>
      Save
    </NavTouchableText>
  )}
  title='Touchable Text'
/>
<SubNav
  options={[
    {
      label: 'Option one',
      onPress: () => console.log('hello')
    },
    {
      label: 'Option two',
      onPress: noop
    },
    {
      label: 'Option three',
      onPress: noop
    }
  ]}
/>

```
