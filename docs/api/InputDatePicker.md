## InputDatePicker 
 
InputDatePicker a cross-platform InputRow inputting
dates.

On iOS devices, the row examples to reveal
DatePickerIOS when selected. The humanized date should
be supplied as the value prop, and it should be
updated when the value of the date-picker changes.

On Anroid, the date-picker prompts the user to select
a date in a modal menu.

__Platforms__:  ios, android
 
 __Composes__: [InputTouchable](InputTouchable.md) 


 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
expanded | bool  (required) |   | 
onToggleExpansion | func  (required) |   | function called to toggle the visibility of the date-picker. (iOS only) *
value | string  |   | the currently selected date to be displayed in collapsed row. *
maxDate | string  |   | 
minDate | string  |   | 
label | string  |   | 
mode | string  |   | 
date | object  (required) |   | 
onDateChange | func  (required) |   | 
editable | bool  | true | 
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

  return [{
    title: 'Input Date Picker',
    render: function render() {
      return React.createElement(Base, null);
    },
    code: '<Base />',
    exampleString: '\n        <InputDatePicker\n          expanded={this.state.focusDate}\n          date={this.state.date}\n          editable={this.state.editable}\n          value={new Date(this.state.date).getFullYear().toString()}\n          onDateChange={(date) => this.setState({ date })}\n          label=\'Your Birthday\'\n          onToggleExpansion={() => {\n            LayoutAnimation.spring()\n            this.setState({ focusDate: !this.state.focusDate })\n          }}\n        />\n      '
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
