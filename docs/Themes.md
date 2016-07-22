## Themes

### Customizing your theme
Panza utilizes a global theme configuration to style many of its elements. You can override these variables by using the `customizeTheme` function to provide a unique look and feel to your application.

```javascript

import { customizeTheme } from 'panza'

const MY_THEME = {
  colors: {
    primary: '#aaa',
    secondary: '#08e',
    black: '#000',
    default: '#666',
    light: '#999'
  },
  fontSizes: [
    48,
    30,
    20,
    18,
    15,
    13,
    10
  ],
  borderColor: '#000',
  borderRadius: 10
}

customizeTheme(MY_THEME)

// Mount your application
```

Internally, `customizeTheme` simply does a deep object assignment, overriding any of the default configuration variables with those that you've provided.

### Providing themes to custom components

Panza uses a higher order component called `themeProvider` to supply the global configuration state to its various components. You can also use this to supply your theme to your own custom components. This is especially useful when dealing with third party modules.

```javascript
import { themeProvider } from 'panza'
import AwesomeModule from 'awesome-module'

const MyAwesomeModule = (props) => (
  <AwesomeModule
    labelColor={props.panza.colors.primary}
    style={{
      borderColor: props.panza.borderColor
    }}
  />
)

export default themeProvider(MyAwesomeModule)
```

For a quicker solution, you can often just use the [Base](api/Base.md) or [Text](api/Text.md) components. These components will automatically transform any supplied style props to styles with the correct configuration. For example:

```javascript
import { Text } from 'panza'

const PrimaryText = ({children}) => (
  <Text color='primary'>My Text</Text>
)
```

PrimaryText will render text with the primary color provided in your configuration.
