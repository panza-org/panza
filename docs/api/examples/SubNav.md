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
