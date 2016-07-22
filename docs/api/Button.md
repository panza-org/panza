## Button 
 
A basic button that inherits from Base, and provides colourization
based upon background color configuration.
 
 __Composes__ [Base](/docs/api/Base.md), [Text](/docs/api/Text.md), [Icon](/docs/api/Icon.md) 
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
children | node  |   | Accepts either a text string or a custom node
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
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.10.3/babel.min.js"></script>
  <div style="position: relative; width: 375px; height: 667px; border: 1px solid #ddd;" id='react-root'></div>
  <script type="text/babel">

const {
  Button,
  Divider,
  Base,
  Text
} = Panza;

const {
  ListView
} = ReactNative;

function noop() {
  console.log('button pressed');
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const Module = ({ examples }) => {

  const datas = ds.cloneWithRows(examples);

  return React.createElement(Base, {
    Component: ListView,
    dataSource: datas,
    renderRow: row => React.createElement(
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
          Text,
          null,
          row.code
        )
      )
    ),
    renderSeparator: (a, b) => React.createElement(Divider, { key: a + b })
  });
};

const Examples = () => {

  const { Button } = Panza;

  return [{
    title: 'Plain Button',
    description: 'A standard Button',
    render: () => React.createElement(
      Button,
      { onPress: noop },
      'Bacon'
    ),
    code: '<Button onPress={noop}>Bacon</Button>'
  }, {
    title: 'Primary',
    description: 'A primary Button',
    render: () => React.createElement(
      Button,
      { primary: true, onPress: noop },
      'Primary Button'
    ),
    code: '<Button primary onPress={noop}>\n        Primary Button\n      </Button>'
  }, {
    title: 'Secondary',
    description: 'A secondary Button',
    render: () => React.createElement(
      Button,
      { secondary: true, onPress: noop },
      'Secondary Button'
    ),
    code: '<Button secondary onPress={noop}>Secondary Button</Button>'
  }, {
    title: 'Positive',
    description: 'A positive Button',
    render: () => React.createElement(
      Button,
      { positive: true, onPress: noop },
      'Positive Button'
    ),
    code: '<Button positive onPress={noop}>Positive Button</Button>'
  }, {
    title: 'Negative',
    description: 'A negative Button',
    render: () => React.createElement(
      Button,
      { negative: true, onPress: noop },
      'Negative Button'
    ),
    code: '<Button negative onPress={noop}>Negative Button</Button>'
  }, {
    title: 'Outline',
    description: 'An outline Button',
    render: () => React.createElement(
      Button,
      { outline: true, onPress: noop },
      'Outline Button'
    ),
    code: '<Button outline onPress={noop}>Outline Button</Button>'
  }, {
    title: 'Primary Outline',
    description: 'A primary, outline Button',
    render: () => React.createElement(
      Button,
      { primary: true, outline: true, onPress: noop },
      'Primary Outline Button'
    ),
    code: '<Button primary outline onPress={noop}>Primary Outline Button</Button>'
  }, {
    title: 'Block',
    description: 'A block button stretches it to the full width of the container element',
    render: () => React.createElement(
      Button,
      { block: true, onPress: noop },
      'Block Button'
    ),
    code: '<Button block onPress={noop}>Block Button</Button>'
  }, {
    title: 'Icon',
    description: 'A primary outline button with an icon (ios-add)',
    render: () => React.createElement(
      Button,
      { primary: true, outline: true, icon: 'ios-add', onPress: noop },
      'Icon Button'
    ),
    code: '<Button primary outline icon=\'ios-add\' onPress={noop}>Icon Button</Button>'
  }, {
    title: 'Rounded',
    description: 'A button with a custom rounded value',
    render: () => React.createElement(
      Button,
      { onPress: noop, primary: true, rounded: 25 },
      'Rounded'
    ),
    code: '<Button onPress={noop} primary rounded={25}>Rounded</Button>'
  }, {
    title: 'Small',
    description: 'A small button',
    render: () => React.createElement(
      Button,
      { onPress: noop, small: true },
      'Small'
    ),
    code: '<Button onPress={noop} small>Small</Button>'
  }, {
    title: 'Large',
    description: 'A large button',
    render: () => React.createElement(
      Button,
      { onPress: noop, large: true },
      'Large'
    ),
    code: '<Button onPress={noop} large>Large</Button>'
  }];
};

const App = () => React.createElement(Module, { examples: Examples() });

ReactNative.AppRegistry.registerComponent('MyApp', () => App);
ReactNative.AppRegistry.runApplication('MyApp', {
  rootTag: document.getElementById('react-root')
});
  </script>
