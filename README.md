# panza
Panza (named after Sancho Panza, from Don Quixote), provides a UI foundation for your react-native applications, and is inspired by the excellent [rebass](https://github.com/jxnblk/rebass) library.
 
Panza gives you:

- The standard building blocks of most mobile applications. See the [included components](#Inputs)
- Beautiful UI-styles out of the box, suitable for iOS, Android, and the web.
- Overridable themes, with suitable defaults.
- Most components extend a `Base` component, which provides useful shorthands for styling your components with props. For example, use `p={2}` to provide padding, or `backgroundColor='primary'` to set the background color of your component. You can also use the `Base` or `TextBase` as a replacement for `View` throughout your application.

<p>
<img src='images/panza-ios-large.png' width='375px' />
<img src='images/panza-android-large.png' width='360px' />
</p>

## Getting Started
```
$ npm i panza --save
$ npm i react-native-vector-icons --save
$ rnpm link react-native-vector-icons
```

## Components

### Elements
* [Base](documentation/Base.md)
* [Text](documentation/Text.md)
* [Button](documentation/Button.md)
* [Icon](documentation/Icon.md)
* [Image](documentation/Image.md)
* [Input](documentation/Input.md)
* [Divider](documentation/Divider.md)
* [Loader](documentation/Loader.md)
* [CheckMark](documentation/CheckMark.md)

### Views

#### Navigation
* [NavBar](documentation/NavBar.md)
* [NavTitle](documentation/NavTitle.md)
* [NavTouchableText](documentation/NavTouchableText.md)
* [NavTouchableIcon](documentation/NavTouchableIcon.md)

#### Input
* [InputGroup](documentation/InputGroup.md)
* [InputRow](documentation/InputRow.md)
* [InputToggle](documentation/InputToggle.md)
* [InputDatePicker](documentation/InputDatePicker.md)
* [InputExpandable](documentation/InputExpandable.md)
* [RemovableInput](documentation/RemovableInput.md)
* [TouchableInput](documentation/TouchableInput.md)
* [HelpText](documentation/HelpText.md)

#### Lists
* [TouchableRow](documentation/TouchableRow.md)
* [SectionHeader](documentation/SectionHeader.md)

#### Buttons
* [ButtonGroup](documentation/ButtonGroup.md)

#### Cards
* [Card](documentation/Card.md)
* [CardHeader](documentation/CardHeader.md)

#### Pages
* [ErrorPage](documentation/ErrorPage.md)

### Modules
* [Popup](documentation/Popup.md)
* [PopupMenu](documentation/PopupMenu.md)
* [RevealingRow](documentation/RevealingRow.md)

## Themes

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

## Example

You can install the example application contained within this repository.

```
$ git clone https://github.com/bmcmahen/panza.git
$ cd panza && npm install
$ react-native run-ios
$ react-native run-android
```

## License
MIT
