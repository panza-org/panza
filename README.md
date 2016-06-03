# panza
Panza (named after the lovable squire, Sancho Panza) is a set of react-native UI widgets that I built while creating [Payback](http://payback.panzeo.com) for iOS and android devices. It's heavily influenced by [rebass](https://github.com/jxnblk/rebass). The primary goals of panza are:

1. To provide widgets that work well in both iOS and Android environments.
2. To find the right balance between simplicity and flexibility. Because of this, Panza relies heavily on composition, allowing you to build whatever widgets you'd like while still benefiting from code that's been written by someone else.

![Panza ios screen shot](images/panza-ios-large.png)

## Getting Started
```
$ npm i panza --save
$ npm i react-native-vector-icons --save
$ rnpm link react-native-vector-icons
```

## Widgets

### Inputs
* [InputRow](documentation/InputRow.md)
* [InputGroup](documentation/InputGroup.md)
* [InputHelpText](documentation/InputHelpText.md)
* [InputToggle](documentation/InputToggle.md)
* [InputPicker](documentation/InputPicker.md)
* [InputDatePicker](documentation/InputDatePicker.md)
* [RemovableInput](documentation/RemovableInput.md)
* [AddRow](documentation/AddRow.md)
* [TouchableInput](documentation/TouchableInput.md)

### Rows
* [TouchableRow](documentation/TouchableRow.md)
* [Separator](documentation/Separator.md)
* [RowImage](documentation/RowImage.md)
* [SectionHeader](documentation/SectionHeader.md)

### Navigation
* [NavBar](document/NavBar.md)
* [NavTitle](documentation/NavTitle.md)
* [NavTouchableIcon](documentation/NavTouchableIcon.md)
* [NavTouchableText](documentation/NavTouchableText.md)
* [SubNav](documentation/SubNav.md)

### Pages
* [ErrorPage](documentation/ErrorPage.md)
* [LoadingPage](documentation/LoadingPage.md)

### Buttons
* [Button](documentation/Button.md)
* [PrimaryButton](documentation/PrimaryButton.md)
* [WarningButton](documentation/WarningButton.md)
* [ErrorButton](documentation/ErrorButton.md)
* [SuccessButton](documentation/SuccessButton.md)
* [NakedButton](documentation/NakedButton.md)
* [VerticalButtonGroup](documentation/VerticalButtonGroup.md)

### Images
* [FadeImage](documentation/FadeImage.md)

### Icons
* [Icon](documentation/Button.md)
* [TouchableIcon](documentation/TouchableIcon.md)
* [PlusIcon](documentation/PlusIcon.md)
* [ArrowRightIcon](documentation/ArrowRightIcon.md)
* [CloseIcon](documentation/CloseIcon.md)
* [BackIcon](documentation/BackIcon.md)
* [SearchIcon](documentation/SearchIcon.md)
* [MoreIcon](documentation/MoreIcon.md)

### Base Components
* [Base](documentation/Base.md)
* [TextBase](documentation/TextBase.md)

## Customize

You can override parts of the global configuration to provide custom colours, font sizes, scales, etc.

```javascript
import { config } from 'panza'

class App extends React.Component {

  static childContextTypes = {
    panza: PropTypes.object
  }

  getChildContext() {
    panza: this.state.styles
  }

  state = {
    styles: {
      colors: Object.assign(
        {},
        config.colors,
        { primary: config.colors.red } // change the primary color from blue to red
      )
    }
  }

  // ... render your app
}
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
