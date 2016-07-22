## InputPicker 
 
InputPicker provides a unified API for Android and iOS
picker rows.

On iOS, when the user selects the picker row,
we want the row to expand to reveal the picker, which is the
child passed to this component. The value prop appears
on the top right of the picker row. It should be the humanized
version of the selected value in the picker.

On Android, we display the picker as the row itself. When
selected, the picker prompt will occur. A label is
rendered above the picker. The value prop is ignored,
since the Android picker already prints the value for us.

@composes InputTouchable, InputExpandable### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
onToggleExpansion | func  (required) |   | a function called when toggling the visibility of the picker. (iOS only) *
editable | bool  | true | 
value | string  |   | the picker value displayed in the row. (iOS only) *
label | string  (required) |   | the label for the picker *
expanded | bool  |   | controls whether the picker is visible. (iOS only) *
children | node  |   | 
backgroundColor | string  |   | 
panza | object  (required) |   | theme provided by higher order component *
 

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
