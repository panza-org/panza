`NavBar` (component)
====================

Static navigation bar that mimics that found
within ReactNative. To be used when you want a static
representation of the NavBar, without transitions.

Props
-----

### `LeftButton`

type: `node`


### `RightButton`

type: `node`


### `backgroundColor`

type: `string`


### `children`

type: `node`


### `inverted`

type: `bool`


### `style`

type: `any`


### `title`

type: `string`


### `titleColor`

type: `string`


### `transparent`

type: `bool`

![NavBar example](images/NavBar.png)

```javascript
import {
  NavBar,
  NavTouchableIcon,
  BackIcon,
  NavTouchableText
} from 'panza'

<NavBar
  backgroundColor='primary'
  mt={2}
  LeftButton={(
    <NavTouchableIcon onPress={() => navigator.pop()}>
      <BackIcon color='white' />
    </NavTouchableIcon>
  )}
  RightButton={(
    <NavTouchableText color='white'>
      Save
    </NavTouchableText>
  )}
  title='Title'
  titleColor='white'
/>


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
      onPress: noop
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
