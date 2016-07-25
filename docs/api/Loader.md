## Loader 
 
Displays a loading indicator, and on iOS an optional
loading message.
 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
isLoading | bool  | true | 
large | bool  | false | 
color | string  | 'gray' | 
showText | bool  | true | 
loadingText | string  | 'Loading...' | 
alignTop | bool  | false | 
inverted | bool  |   | 
 

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
  var Loader = _Panza2.Loader;


  return [{
    title: 'Loader',
    description: 'Loader',
    render: function render() {
      return React.createElement(Loader, null);
    },
    code: '<Loader />'
  }, {
    title: 'Large loader',
    description: 'Loader',
    render: function render() {
      return React.createElement(Loader, { large: true });
    },
    code: '<Loader large />'
  }, {
    title: 'Loader without text',
    description: 'Loader',
    render: function render() {
      return React.createElement(Loader, { showText: false });
    },
    code: '<Loader showText={false} />'
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
