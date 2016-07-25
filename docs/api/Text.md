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
lineHeight | number  |   | 
 

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
  var Text = _Panza2.Text;


  return [{
    title: 'Tiny',
    render: function render() {
      return React.createElement(
        Text,
        { tiny: true },
        'Hello world'
      );
    },
    code: '<Text tiny>Hello world</Text>'
  }, {
    title: 'Small',
    render: function render() {
      return React.createElement(
        Text,
        { small: true },
        'Hello world'
      );
    },
    code: '<Text small>Hello world</Text>'
  }, {
    title: 'Medium',
    render: function render() {
      return React.createElement(
        Text,
        null,
        'Hello world'
      );
    },
    code: '<Text>Hello world</Text>'
  }, {
    title: 'Large',
    render: function render() {
      return React.createElement(
        Text,
        null,
        'Hello world'
      );
    },
    code: '<Text>Hello world</Text>'
  }, {
    title: 'Giant',
    render: function render() {
      return React.createElement(
        Text,
        { giant: true },
        'Hello world'
      );
    },
    code: '<Text giant>Hello world</Text>'
  }, {
    title: 'Primary color',
    render: function render() {
      return React.createElement(
        Text,
        { color: 'primary' },
        'Hello world'
      );
    },
    code: '<Text color=\'primary\'>Hello world</Text>'
  }, {
    title: 'Bold',
    render: function render() {
      return React.createElement(
        Text,
        { bold: true },
        'Hello world'
      );
    },
    code: '<Text bold>Hello world</Text>'
  }, {
    title: 'All together now',
    render: function render() {
      return React.createElement(
        Text,
        { giant: true, color: 'primary', thin: true },
        'Hello world'
      );
    },
    code: '<Text giant color=\'primary\' thin>Hello world</Text>'
  }].map(function (p) {
    p.props = { px: 2 };
    return p;
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
  {% endraw %}
