## TouchableRow 
 
The basic RowCell for use within ListView. It displays
an image, primary text, secondary text, a value,
and an arrow right icon if the respective props are
specified.

__Platforms__:  ios, android, web
 
 __Composes__: [TouchableRowCell](TouchableRowCell.md), [Image](Image.md), [Text](Text.md) 


 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
primaryText | string&#124;node |   | 
secondaryText | string&#124;node |   | 
value | string&#124;node |   | A value attribute of the cell, to appear on the right
onPress | func  (required) |   | 
image | object&#124;node |   | An thumbnail to be displayed on the left of the cell
height | number  |   | 
inverted | bool  |   | 
showMore | bool  |   | Displays a right arrow on the right hand side of the cell
 

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

var Examples = function Examples() {
  var _Panza2 = Panza;
  var TouchableRow = _Panza2.TouchableRow;
  var InputGroup = _Panza2.InputGroup;


  return [{
    title: 'Touchable Row',
    render: function render() {
      return React.createElement(
        InputGroup,
        null,
        React.createElement(TouchableRow, {
          primaryText: 'Primary Text',
          secondaryText: 'Secondary Text',
          value: 'Value',
          onPress: noop
        })
      );
    },
    code: '<TouchableRow\n            primaryText=\'Primary Text\'\n            secondaryText=\'Secondary Text\'\n            value=\'Value\'\n            onPress={noop}\n          />',
    code: '<InputGroup>\n          <TouchableRow\n            primaryText=\'Primary Text\'\n            secondaryText=\'Secondary Text\'\n            value=\'Value\'\n            onPress={noop}\n          />\n        </InputGroup>'
  }, {
    title: 'Touchable Row',
    render: function render() {
      return React.createElement(
        InputGroup,
        null,
        React.createElement(TouchableRow, {
          image: { uri: 'http://placehold.it/150x150' },
          primaryText: 'Primary Text',
          secondaryText: 'Secondary Text',
          value: 'Value',
          onPress: noop
        })
      );
    },
    code: '<TouchableRow\n            image={{ uri: \'http://placehold.it/150x150\' }}\n            primaryText=\'Primary Text\'\n            secondaryText=\'Secondary Text\'\n            value=\'Value\'\n            onPress={noop}\n          />',
    code: '<InputGroup>\n          <TouchableRow\n            image={{ uri: \'http://placehold.it/150x150\' }}\n            primaryText=\'Primary Text\'\n            secondaryText=\'Secondary Text\'\n            value=\'Value\'\n            onPress={noop}\n          />\n        </InputGroup>'
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
