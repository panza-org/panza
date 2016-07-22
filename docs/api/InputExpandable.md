## InputExpandable 
 
A touchable input field that expands (iOS) or
pops up (Android) to reveal a picker widget.### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
expanded | bool  (required) |   | 
Row | node  (required) |   | 
children | node  |   | 
 

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
