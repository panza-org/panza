## Text 
 
Basic Text Component that provides shorthands for sizing,
lineHeight, and fontWeights.
 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
tiny | bool  |   | 
small | bool  |   | 
medium | bool  |   | 
large | bool  |   | 
giant | bool  |   | 
thin | bool  |   | 
thick | bool  |   | 
bold | bool  |   | 
inverted | bool  |   | 
 

  ### Examples

  <script src="https://fb.me/react-15.2.1.js"></script>
  <script src="https://fb.me/react-dom-15.2.1.js"></script>
  <script src="https://rawgit.com/bmcmahen/panza/docs/docs/assets/ReactNative.js"></script>
  <script src="https://rawgit.com/bmcmahen/panza/docs/docs/assets/panza.web.js"></script>
  <link href='https://cdn.rawgit.com/driftyco/ionicons/3.0/dist/css/ionicons.css' rel='stylesheet'><link>
  <div style="position: relative; width: 375px; height: 667px; border: 1px solid #ddd;" id='react-root'></div>
  <script>
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var Text = _Panza2.Text;


  return ['tiny', 'small', 'medium', 'large', 'giant'].map(function (size) {
    var props = _defineProperty({}, size, true);

    return {
      title: size,
      props: { px: 2 },
      render: function render() {
        return React.createElement(
          Text,
          props,
          'Id ad commodo veniam labore ut anim quis aliqua consequat voluptate irure cillum elit.'
        );
      },
      code: '<Text {...props}>Id ad commodo veniam labore ut anim quis aliqua consequat voluptate irure cillum elit.</Text>'
    };
  });
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
