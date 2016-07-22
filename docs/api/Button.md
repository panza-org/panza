## Button 
 
A basic button that inherits from Base, and provides colourization
based upon background color configuration.
 
 __Composes__ [Base](Base.md), [Text](Text.md), [Icon](Icon.md) 


 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
small | bool  |   | button size
medium | bool  |   | 
large | bool  |   | 
primary | bool  |   | Uses the primary colour to style the button.
secondary | bool  |   | Uses the secondary colour to style the button.
positive | bool  |   | Uses the positive colour to style the button.
negative | bool  |   | Uses the negative colour to style the button.
default | bool  |   | Uses the midgray colour to style the button.
outline | bool  | false | Use an outline button style *
disabled | bool  | false | disables the button, and reduces its opacity
rounded | number  | 6 | 
onPress | func  |   | 
underlayColor | string  |   | 
backgroundColor | string  |   | 
borderColor | string  |   | 
block | bool  | false | stretch the button width
icon | string&#124;node |   | optional icon string or node
size |  | 'medium' | 
 

  ### Examples

  <script src="https://fb.me/react-15.2.1.js"></script>
  <script src="https://fb.me/react-dom-15.2.1.js"></script>
  <script src="https://rawgit.com/bmcmahen/panza/docs/docs/assets/ReactNative.js"></script>
  <script src="https://rawgit.com/bmcmahen/panza/docs/docs/assets/panza.web.js"></script>
  <link href='https://cdn.rawgit.com/driftyco/ionicons/3.0/dist/css/ionicons.css' rel='stylesheet'><link>
  <div style="position: relative; width: 375px; height: 667px; border: 1px solid #ddd;" id='react-root'></div>
  <script>
'use strict';

var _Panza = Panza;
var Button = _Panza.Button;
var Divider = _Panza.Divider;
var Base = _Panza.Base;
var Text = _Panza.Text;
var _ReactNative = ReactNative;
var ListView = _ReactNative.ListView;


function noop() {
  console.log('button pressed');
}

var ds = new ListView.DataSource({
  rowHasChanged: function rowHasChanged(r1, r2) {
    return r1 !== r2;
  }
});

var Module = function Module(_ref) {
  var examples = _ref.examples;


  var datas = ds.cloneWithRows(examples);

  return React.createElement(Base, {
    Component: ListView,
    dataSource: datas,
    renderRow: function renderRow(row) {
      return React.createElement(
        Base,
        { p: 2 },
        React.createElement(
          Text,
          { mb: 1, bold: true },
          row.title
        ),
        row.render(),
        React.createElement(
          Base,
          { mt: 1 },
          React.createElement(
            'code',
            null,
            React.createElement(
              'pre',
              null,
              row.code
            )
          )
        )
      );
    },
    renderSeparator: function renderSeparator(a, b) {
      return React.createElement(Divider, { key: a + b });
    }
  });
};

var Examples = function Examples() {
  var _Panza2 = Panza;
  var Button = _Panza2.Button;


  return [{
    title: 'Plain Button',
    description: 'A standard Button',
    render: function render() {
      return React.createElement(
        Button,
        { onPress: noop },
        'Bacon'
      );
    },
    code: '<Button onPress={noop}>Bacon</Button>'
  }, {
    title: 'Primary',
    description: 'A primary Button',
    render: function render() {
      return React.createElement(
        Button,
        { primary: true, onPress: noop },
        'Primary Button'
      );
    },
    code: '<Button primary onPress={noop}>\n        Primary Button\n      </Button>'
  }, {
    title: 'Secondary',
    description: 'A secondary Button',
    render: function render() {
      return React.createElement(
        Button,
        { secondary: true, onPress: noop },
        'Secondary Button'
      );
    },
    code: '<Button secondary onPress={noop}>Secondary Button</Button>'
  }, {
    title: 'Positive',
    description: 'A positive Button',
    render: function render() {
      return React.createElement(
        Button,
        { positive: true, onPress: noop },
        'Positive Button'
      );
    },
    code: '<Button positive onPress={noop}>Positive Button</Button>'
  }, {
    title: 'Negative',
    description: 'A negative Button',
    render: function render() {
      return React.createElement(
        Button,
        { negative: true, onPress: noop },
        'Negative Button'
      );
    },
    code: '<Button negative onPress={noop}>Negative Button</Button>'
  }, {
    title: 'Outline',
    description: 'An outline Button',
    render: function render() {
      return React.createElement(
        Button,
        { outline: true, onPress: noop },
        'Outline Button'
      );
    },
    code: '<Button outline onPress={noop}>Outline Button</Button>'
  }, {
    title: 'Primary Outline',
    description: 'A primary, outline Button',
    render: function render() {
      return React.createElement(
        Button,
        { primary: true, outline: true, onPress: noop },
        'Primary Outline Button'
      );
    },
    code: '<Button primary outline onPress={noop}>Primary Outline Button</Button>'
  }, {
    title: 'Block',
    description: 'A block button stretches it to the full width of the container element',
    render: function render() {
      return React.createElement(
        Button,
        { block: true, onPress: noop },
        'Block Button'
      );
    },
    code: '<Button block onPress={noop}>Block Button</Button>'
  }, {
    title: 'Icon',
    description: 'A primary outline button with an icon (ios-add)',
    render: function render() {
      return React.createElement(
        Button,
        { primary: true, outline: true, icon: 'ios-add', onPress: noop },
        'Icon Button'
      );
    },
    code: '<Button primary outline icon=\'ios-add\' onPress={noop}>Icon Button</Button>'
  }, {
    title: 'Rounded',
    description: 'A button with a custom rounded value',
    render: function render() {
      return React.createElement(
        Button,
        { onPress: noop, primary: true, rounded: 25 },
        'Rounded'
      );
    },
    code: '<Button onPress={noop} primary rounded={25}>Rounded</Button>'
  }, {
    title: 'Small',
    description: 'A small button',
    render: function render() {
      return React.createElement(
        Button,
        { onPress: noop, small: true },
        'Small'
      );
    },
    code: '<Button onPress={noop} small>Small</Button>'
  }, {
    title: 'Large',
    description: 'A large button',
    render: function render() {
      return React.createElement(
        Button,
        { onPress: noop, large: true },
        'Large'
      );
    },
    code: '<Button onPress={noop} large>Large</Button>'
  }];
};

var App = function App() {
  return React.createElement(Module, { examples: Examples() });
};

ReactNative.AppRegistry.registerComponent('MyApp', function () {
  return App;
});
ReactNative.AppRegistry.runApplication('MyApp', {
  rootTag: document.getElementById('react-root')
});
  </script>
