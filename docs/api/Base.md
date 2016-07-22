## Base 
 
A general purpose component that converts our props into styles
defined by the user. Heavily inspired by (and somewhat directly copied)
from rebass.### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
Component | any  |   | Custom Component *
style | any  |   | Regular style attribute *
baseStyle | any  |   | Base style *
underlayColor | string  |   | Underlay color. Use 'darken' to automatically darken the backgroundColor. *
m | enum0&#124;1&#124;2&#124;3&#124;4 |   | Margin *
mt | enum0&#124;1&#124;2&#124;3&#124;4 |   | Margin top *
mr | enum0&#124;1&#124;2&#124;3&#124;4 |   | Margin right *
mb | enum0&#124;1&#124;2&#124;3&#124;4 |   | Margin bottom *
ml | enum0&#124;1&#124;2&#124;3&#124;4 |   | Margin left *
mx | enum0&#124;1&#124;2&#124;3&#124;4 |   | Margin x-axis *
my | enum0&#124;1&#124;2&#124;3&#124;4 |   | Margin y-asix *
p | enum0&#124;1&#124;2&#124;3&#124;4 |   | Padding *
pt | enum0&#124;1&#124;2&#124;3&#124;4 |   | Padding top *
pr | enum0&#124;1&#124;2&#124;3&#124;4 |   | Padding right *
pb | enum0&#124;1&#124;2&#124;3&#124;4 |   | Padding bottom *
pl | enum0&#124;1&#124;2&#124;3&#124;4 |   | Padding left *
px | enum0&#124;1&#124;2&#124;3&#124;4 |   | Padding x-axis *
py | enum0&#124;1&#124;2&#124;3&#124;4 |   | Padding y-axis *
backgroundColor | string  |   | Background color *
rounded | bool&#124;number |   | Border radius *
borderColor | string  |   | Border color *
flex | number  |   | flex property *
wrap | bool  |   | flex-wrap property *
column | bool  |   | set flex-direction to column *
row | bool  |   | set flex-direction to row *
align | string  |   | set align-items property *
justify | string  |   | set justify-content property *
height | number  |   | set the height of the element *
width | number  |   | set the width of the element *
panza | object  |   | theme provided by a higher order component *
 

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

const App = () => React.createElement(Module, { examples: Examples() });

ReactNative.AppRegistry.registerComponent('MyApp', () => App);
ReactNative.AppRegistry.runApplication('MyApp', {
  rootTag: document.getElementById('react-root')
});
  </script>
