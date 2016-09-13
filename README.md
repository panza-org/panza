![Panza](images/logo.png)

Panza is a simple, flexible, and beautiful ui foundation for [react-native](https://github.com/facebook/react-native) and [react-native-web](https://github.com/necolas/react-native-web), created by [Ben McMahen](https://twitter.com/BenMcMahen) and [Hammad Jutt](http://jutt.ca).

Panza features:

- The standard building blocks of most mobile applications.
- Beautiful UI-styles out of the box, suitable for iOS, Android, and the web.
- A method for [theming](docs/themes.md) your application.
- A [Base](docs/api/Base.md) and [Text](docs/api/Text.md) component, which provide useful shorthand [prop to style conversions](docs/api/Base.md). For example, use `p={2}` to provide padding, or `backgroundColor='primary'` to provide a background colour. Most UI-components compose `Base`, and thus accept these props.

## Getting Started

Install using NPM.

```
npm i panza --save
npm i react-native-vector-icons --save
rnpm link react-native-vector-icons
```

And import your components.

```javascript
import { Base, Button, Text } from 'panza'

const Hello = ({ onPress }) => (
  <Base flex={1} backgroundColor='light'>
    <Text large color='positive'>I am text</Text>
    <Button
      primary
      outline
      onPress={onPress}>
        I am a button
    </Button>
  </Base>
)
```

## Components

### Elements
* [Base](docs/api/Base.md)
* [Text](docs/api/Text.md)
* [Button](docs/api/Button.md)
* [Icon](docs/api/Icon.md)
* [Image](docs/api/Image.md)
* [Input](docs/api/Input.md)
* [Divider](docs/api/Divider.md)
* [Loader](docs/api/Loader.md)
* [CheckMark](docs/api/CheckMark.md)

### Navigation
* [NavBar](docs/api/NavBar.md)
* [NavTitle](docs/api/NavTitle.md)
* [NavTouchableText](docs/api/NavTouchableText.md)
* [NavTouchableIcon](docs/api/NavTouchableIcon.md)

### Input
* [InputGroup](docs/api/InputGroup.md)
* [InputRow](docs/api/InputRow.md)
* [InputTouchable](docs/api/InputTouchable.md)
* [InputToggle](docs/api/InputToggle.md)
* [InputPicker](docs/api/InputPicker.md)
* [InputDatePicker](docs/api/InputDatePicker.md)
* [InputExpandable](docs/api/InputExpandable.md)
* [InputHelpText](docs/api/HelpText.md)

### Lists
* [TouchableRow](docs/api/TouchableRow.md)
* [SectionHeader](docs/api/SectionHeader.md)

### Buttons
* [ButtonGroup](docs/api/ButtonGroup.md)

### Cards
* [Card](docs/api/Card.md)
* [CardHeader](docs/api/CardHeader.md)

### Pages
* [ErrorPage](docs/api/ErrorPage.md)

### Modules
* [Popup](docs/api/Popup.md)
* [PopupMenu](docs/api/PopupMenu.md)
* [RevealingRow](docs/api/RevealingRow.md)

## [Themes](docs/themes.md)

You can override parts of the global theme to provide custom colours, font sizes, scales, etc. Use the `customizeTheme` function provided by Panza to supply a custom theme before registering your application. Check out the [default config](components/panza/config.js) to see which variables you can override.

```javascript
import { customizeTheme } from 'panza'

customizeTheme({
  colors: {
    primary: '#08e'
  }
})

// mount your application
```

Learn more [here](docs/themes.md)

## Examples

[UIExplorer](https://github.com/bmcmahen/panza-ui-explorer)
[bRandom - Randomize your routine](https://github.com/bmcmahen/random-routine). [App Store](https://itunes.apple.com/ca/app/brandom-randomize-your-routine/id1135088308?mt=8)
[Roast Buddy](https://github.com/bmcmahen/roast-buddy).

Built something with Panza? Let us know!

### Contributing

If you are interested in working on Panza and want to develop it locally within a react-native project, we recommend using [wml](https://github.com/wix/wml) to directly copy your local `panza` directory into your `node_modules` folder inside of your react-native project. This is the best solution until react-native fully support symlinks.

```
wml add ~/panza ~/panza-example/node_modules/panza
wml start
```

To run the tests:
```
npm test
```

## License
MIT
