## InputPicker 
 
InputPicker provides a unified API for Android and iOS
picker rows.

On iOS, when the user selects the picker row, the row expands to
reveal the children. The value prop that appears alongside
the right of the picker row will typically be a humanized
version of the selected value in the picker.

On Android, we display the picker as the row itself. When
selected, the picker prompt will occur. A label is
rendered above the picker. The value prop is ignored,
since the Android picker already prints the value for us.

__Platforms__:  ios, android
 
 __Composes__: [InputTouchable](InputTouchable.md), [InputExpandable](InputExpandable.md) 


 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
onToggleExpansion | func  (required) |   | a function called when toggling the visibility of the picker. (iOS only)
editable | bool  | true | 
value | string  |   | the picker value displayed in the row. (iOS only)
label | string  (required) |   | the label for the picker *
expanded | bool  |   | controls whether the picker is visible. (iOS only)
backgroundColor | string  |   | 
 

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

  return [{
    title: 'Input Picker',
    render: function render() {
      return React.createElement(Base, null);
    },
    code: '<Base />',
    exampleString: '\n        <InputPicker\n          expanded={this.state.focusPicker}\n          value={this.state.language}\n          label=\'Select a Language\'\n          editable={this.state.editable}\n          onToggleExpansion={() => {\n            this.setState({ focusPicker: !this.state.focusPicker })\n          }}>\n          <Picker\n            prompt=\'Select a language\'\n            style={{ width: 300 }}\n            selectedValue={this.state.language}\n            onValueChange={(lang) => this.setState({ language: lang })}>\n              <Picker.Item label=\'Java\' value=\'Java\' />\n              <Picker.Item label=\'Javascript\' value=\'Javascript\' />\n          </Picker>\n        </InputPicker>\n      '
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
