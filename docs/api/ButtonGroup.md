## ButtonGroup 
 

 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
rounded | bool&#124;number |   | 
vertical | bool  |   | 
segmented | bool  |   | A helper to create segemented controls that align together *
 

  ### Examples

  {% raw %}

  <script src="https://fb.me/react-15.2.1.js"></script>
  <script src="https://fb.me/react-dom-15.2.1.js"></script>
  <script src="https://rawgit.com/bmcmahen/panza/docs/docs/assets/ReactNative.js"></script>
  <script src="https://rawgit.com/bmcmahen/panza/docs/docs/assets/panza.web.js"></script>
  <link href='https://cdn.rawgit.com/driftyco/ionicons/3.0/dist/css/ionicons.css' rel='stylesheet'><link>
  <div style="position: relative; width: 400px; height: 667px; border: 1px solid #ddd;" id='react-root'></div>
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
        { py: 2 },
        React.createElement(
          Base,
          { px: 2 },
          React.createElement(
            Text,
            { mb: 1, bold: true },
            row.title
          )
        ),
        React.createElement(
          Base,
          row.props,
          row.render()
        ),
        React.createElement(
          Base,
          { p: 2, mt: 1 },
          React.createElement(
            'code',
            null,
            React.createElement(
              'pre',
              null,
              row.exampleString || row.code
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

var examples = function examples() {
  var _Panza2 = Panza;
  var ButtonGroup = _Panza2.ButtonGroup;
  var Button = _Panza2.Button;


  return [{
    title: 'Segmented Controls',
    description: 'iOS style segmented controls',
    render: function render() {
      return React.createElement(
        ButtonGroup,
        { segmented: true, rounded: 5 },
        React.createElement(
          Button,
          { primary: true },
          'One'
        ),
        React.createElement(
          Button,
          { primary: true, outline: true, onPress: noop },
          'Two'
        ),
        React.createElement(
          Button,
          { primary: true, outline: true, onPress: noop },
          'Three'
        )
      );
    },
    code: '<Button primary outline onPress={noop}>Three</Button>',
    code: '<Button primary outline onPress={noop}>Two</Button>',
    code: '<Button primary>One</Button>',
    code: '<ButtonGroup segmented rounded={5}>\n          <Button primary>One</Button>\n          <Button primary outline onPress={noop}>Two</Button>\n          <Button primary outline onPress={noop}>Three</Button>\n        </ButtonGroup>'
  }, {
    title: 'Segmented Positive',
    description: 'Segmented controls with 2 positive buttons',
    render: function render() {
      return React.createElement(
        ButtonGroup,
        { mt: 2, segmented: true, rounded: 5 },
        React.createElement(
          Button,
          { positive: true },
          'One'
        ),
        React.createElement(
          Button,
          { positive: true, outline: true, onPress: noop },
          'Two'
        )
      );
    },
    code: '<Button positive outline onPress={noop}>Two</Button>',
    code: '<Button positive>One</Button>',
    code: '<ButtonGroup mt={2} segmented rounded={5}>\n          <Button positive>One</Button>\n          <Button positive outline onPress={noop}>Two</Button>\n        </ButtonGroup>'
  }, {
    title: 'Vertical ButtonGroup',
    render: function render() {
      return React.createElement(
        ButtonGroup,
        { mt: 2, vertical: true },
        React.createElement(
          Button,
          { primary: true, onPress: noop },
          'Primary Vertical'
        ),
        React.createElement(
          Button,
          { transparent: true, mt: 1, onPress: noop },
          'Secondary Option'
        )
      );
    },
    code: '<Button transparent mt={1} onPress={noop}>Secondary Option</Button>',
    code: '<Button primary onPress={noop}>Primary Vertical</Button>',
    code: '<ButtonGroup mt={2} vertical>\n          <Button primary onPress={noop}>Primary Vertical</Button>\n          <Button transparent mt={1} onPress={noop}>Secondary Option</Button>\n        </ButtonGroup>'
  }, {
    title: 'Transparent ButtonGroup',
    render: function render() {
      return React.createElement(
        ButtonGroup,
        { py: 1 },
        React.createElement(
          Button,
          { small: true, onPress: noop, transparent: true, icon: 'ios-heart-outline' },
          'Like'
        ),
        React.createElement(
          Button,
          { small: true, onPress: noop, transparent: true, icon: 'ios-text-outline' },
          'Comment'
        ),
        React.createElement(
          Button,
          { small: true, onPress: noop, transparent: true, icon: 'ios-share-outline' },
          'Share'
        )
      );
    },
    code: '<Button small onPress={noop} transparent icon=\'ios-share-outline\'>\n            Share\n          </Button>',
    code: '<Button small onPress={noop} transparent icon=\'ios-text-outline\'>\n            Comment\n          </Button>',
    code: '<Button small onPress={noop} transparent icon=\'ios-heart-outline\'>\n            Like\n          </Button>',
    code: '<ButtonGroup py={1}>\n          <Button small onPress={noop} transparent icon=\'ios-heart-outline\'>\n            Like\n          </Button>\n          <Button small onPress={noop} transparent icon=\'ios-text-outline\'>\n            Comment\n          </Button>\n          <Button small onPress={noop} transparent icon=\'ios-share-outline\'>\n            Share\n          </Button>\n        </ButtonGroup>'
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
  {% endraw %}
