## Examples

### Basic TouchableInputs

![TouchableInput example](images/TouchableInput.png)

```javascript
<InputGroup mb={0} mt={3} label='TOUCHABLE INPUT'>
  <TouchableInput
    editable={this.state.editable}
    onPress={() => {
      console.log('baby baby baby, noo!')
    }}
    showMore
    label='With Label'
  />
  <TouchableInput
    editable={this.state.editable}
    onPress={() => {
      console.log('baby baby baby, noo!')
    }}
    showMore
    value='And Value'
    label='With Label'
  />
</InputGroup>
```
