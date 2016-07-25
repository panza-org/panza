## Base 
 
A general purpose component that converts props into styles
defined by our theme. It's heavily inspired by the Base
component provided by [rebass](https://github.com/jxnblk/rebass).
 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
Component | any  |   | Custom Component
baseStyle | any  |   | The base style will be supplanted by style props, or regular style properties.
style | any  |   | Regular style attribute
underlayColor | string  |   | Underlay color. Use 'darken' to automatically darken the backgroundColor.
m | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin based on the configured scale
mt | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin top based on the configured scale
mr | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin right based on the configured scale
mb | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin bottom based on the configured scale
ml | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin left based on the configured scale
mx | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin x-axis based on the configured scale
my | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin y-asix based on the configured scale
p | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding based on the configured scale
pt | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding top based on the configured scale
pr | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding right based on the configured scale
pb | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding bottom based on the configured scale
pl | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding left based on the configured scale
px | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding x-axis based on the configured scale
py | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding y-axis based on the configured scale
backgroundColor | string  |   | Background color.
rounded | bool&#124;number |   | Border radius
borderColor | string  |   | Border color
flex | number  |   | Flex property
wrap | bool  |   | Flex-wrap property
column | bool  |   | Set the flex-direction to column
row | bool  |   | Set the flex-direction to row
align | string  |   | Align-items property
justify | string  |   | Justify-content property
height | number  |   | The height of the element
width | number  |   | The width of the element
 

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
  var Base = _Panza2.Base;


  return [{
    title: 'Base with padding',
    render: function render() {
      return React.createElement(Base, { backgroundColor: 'primary', p: 4 });
    },
    code: '<Base backgroundColor=\'primary\' p={4} />'
  }, {
    title: 'Base with margin',
    render: function render() {
      return React.createElement(
        Base,
        { p: 2 },
        React.createElement(Base, { backgroundColor: 'red', p: 4, mb: 2 }),
        React.createElement(Base, { backgroundColor: 'light', p: 4 })
      );
    },
    code: '<Base backgroundColor=\'light\' p={4} />',
    code: '<Base backgroundColor=\'red\' p={4} mb={2} />',
    code: '<Base p={2}>\n          <Base backgroundColor=\'red\' p={4} mb={2} />\n          <Base backgroundColor=\'light\' p={4} />\n        </Base>'
  }, {
    title: 'Base rounded',
    render: function render() {
      return React.createElement(Base, { backgroundColor: 'green', rounded: 30, p: 4 });
    },
    code: '<Base backgroundColor=\'green\' rounded={30} p={4} />'
  }, {
    title: 'Base width & height',
    render: function render() {
      return React.createElement(Base, { width: 30, height: 50, backgroundColor: 'green' });
    },
    code: '<Base width={30} height={50} backgroundColor=\'green\' />'
  }, {
    title: 'Base with flex',
    render: function render() {
      return React.createElement(
        Base,
        { height: 200, flex: 1, column: true, justify: 'space-between', align: 'center', backgroundColor: 'light' },
        React.createElement(Base, { p: 2, backgroundColor: 'primary' }),
        React.createElement(Base, { p: 2, backgroundColor: 'secondary' }),
        React.createElement(Base, { alignSelf: 'flex-start', p: 2, backgroundColor: 'positive' })
      );
    },
    code: '<Base alignSelf=\'flex-start\' p={2} backgroundColor=\'positive\' />',
    code: '<Base p={2} backgroundColor=\'secondary\' />',
    code: '<Base p={2} backgroundColor=\'primary\' />',
    code: '<Base height={200} flex={1} column justify=\'space-between\' align=\'center\' backgroundColor=\'light\'>\n          <Base p={2} backgroundColor=\'primary\' />\n          <Base p={2} backgroundColor=\'secondary\' />\n          <Base alignSelf=\'flex-start\' p={2} backgroundColor=\'positive\' />\n        </Base>'
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
