`InputHelpText` (component)
===========================

InputHelpText is typically used after an InputGroup to
offer additional information about the above inputs. This is
just a simple wrapper around SecondaryText with some padding
provided, and the text color set to light.

@composes Text

Props
-----

### `children`

type: `node`

## Examples

### InputHelpText after an InputGroup
![Input help text example](images/InputHelpText.png)

```javascript
<InputGroup label='ROW INPUT' inset={16} mt={3}>
  <InputToggle
    value={this.state.editable}
    onTintColor='warning'
    onValueChange={(editable) => this.setState({ editable })}
    label='Editable?'
  />
  <InputRow
    placeholder='Basic Input'
    value={this.state.basic}
    editable={this.state.editable}
    onChangeText={(basic) => this.setState({ basic })} />

  <InputRow
    label='Basic Input with Label'
    placeholder='Your value'
    value={this.state.label}
    editable={this.state.editable}
    onChangeText={(label) => this.setState({ label })} />
  <InputRow
    icon={<SearchIcon />}
    textAlign='left'
    editable={this.state.editable}
    placeholder='Input with icon' />
</InputGroup>
<InputHelpText>
  Some help text. Aute nulla ex ea amet sunt occaecat qui fugiat cupidatat fugiat in. Veniam amet elit et tempor sit ea nulla adipisicing laboris pariatur.
</InputHelpText>
```javascript
