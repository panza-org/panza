## InputRow 
 
An Input field with a lot of added functionality. You'd typically
want to wrap this within an InputGroup.

__Platforms__:  ios, android, web
 
 __Composes__: [RevealingRow](RevealingRow.md), [InputRowCell](InputRowCell.md), [RemoveButton](RemoveButton.md), [Input](Input.md), [Base](Base.md), [Text](Text.md), [RowAction](RowAction.md), [RowActions](RowActions.md) 


 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
label | string  |   | 
autoFocus | bool  |   | 
removable | bool  | false | 
placeholder | string  |   | 
vertical | bool  |   | 
onSelectLabel | func  |   | 
onChangeText | func  (required) |   | 
value | string  |   | 
backgroundColor | string  | 'white' | 
editable | bool  | true | 
labelWidth | number  |   | 
verticalHeight | number  | 80 | 
onRequestRemove | func  |   | 
height | number  | 50 | 
icon | node  |   | 
inverted | bool  |   | 
condensed | bool  |   | 
multiline | bool  |   | 
 

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  var InputRow = _Panza2.InputRow;
  var InputGroup = _Panza2.InputGroup;
  var InputHelpText = _Panza2.InputHelpText;


  function renderInputWithProps(props) {

    return function (_React$Component) {
      _inherits(Example, _React$Component);

      function Example(props) {
        _classCallCheck(this, Example);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Example).call(this, props));

        _this.state = {
          value: '' || props.value
        };
        return _this;
      }

      _createClass(Example, [{
        key: 'render',
        value: function render() {
          var _this2 = this;

          return React.createElement(InputRow, _extends({
            value: this.state.value,
            onChangeText: function onChangeText(value) {
              return _this2.setState({ value: value });
            }
          }, props));
        }
      }]);

      return Example;
    }(React.Component);
  }

  return [{
    title: 'With placeholder',
    exampleString: '\n        <InputGroup>\n          <InputRow\n            value={this.state.text}\n            onChangeText={(text) => this.setState({ text })}\n            placeholder=\'Placeholder\'\n          />\n        </InputGroup>\n      ',
    render: function render() {
      var Example = renderInputWithProps({ placeholder: 'Placeholder' });
      return React.createElement(
        InputGroup,
        null,
        React.createElement(Example, null)
      );
    },
    code: '<Example />',
    code: '<InputGroup>\n            <Example />\n          </InputGroup>'
  }, {
    title: 'With label',
    exampleString: '\n        <InputGroup>\n          <InputRow\n            value={this.state.text}\n            onChangeText={(text) => this.setState({ text })}\n            label=\'With Label\'\n            placeholder=\'Placeholder\'\n          />\n        </InputGroup>\n      ',
    render: function render() {
      var Example = renderInputWithProps({
        label: 'With Label',
        placeholder: 'Placeholder'
      });

      return React.createElement(
        InputGroup,
        null,
        React.createElement(Example, null)
      );
    },
    code: '<Example />',
    code: '<InputGroup>\n            <Example />\n          </InputGroup>'
  }, {
    title: 'Removable',
    exampleString: '\n        <InputGroup>\n          <InputRow\n            value={this.state.text}\n            onChangeText={(text) => this.setState({ text })}\n            label=\'Removable\'\n            removable\n            placeholder=\'Type here...\'\n          />\n        </InputGroup>\n      ',
    render: function render() {
      var Example = renderInputWithProps({
        label: 'Removable',
        removable: true,
        placeholder: 'Type here...'
      });

      return React.createElement(
        InputGroup,
        null,
        React.createElement(Example, null)
      );
    },
    code: '<Example />',
    code: '<InputGroup>\n            <Example />\n          </InputGroup>'
  }, {
    title: 'Vertical',
    exampleString: '\n        <InputGroup>\n          <InputRow\n            value={this.state.text}\n            onChangeText={(text) => this.setState({ text })}\n            label=\'Vertical\'\n            vertical\n            placeholder=\'Type here...\'\n          />\n        </InputGroup>\n      ',
    render: function render() {
      var Example = renderInputWithProps({
        label: 'Vertical',
        vertical: true,
        placeholder: 'Type here...'
      });

      return React.createElement(
        InputGroup,
        null,
        React.createElement(Example, null)
      );
    },
    code: '<Example />',
    code: '<InputGroup>\n            <Example />\n          </InputGroup>'
  }, {
    title: 'Touchable label',
    exampleString: '\n        <InputGroup>\n          <InputRow\n            value={this.state.text}\n            onChangeText={(text) => this.setState({ text })}\n            label=\'Touchable Label\'\n            placeholder=\'Type here...\'\n            onSelectLabel={() => {\n              console.log(\'label touched\')\n            }}\n          />\n        </InputGroup>\n      ',
    render: function render() {
      var Example = renderInputWithProps({
        label: 'Touchable Label',
        placeholder: 'Type here...',
        onSelectLabel: function onSelectLabel() {
          return noop;
        }
      });

      return React.createElement(
        InputGroup,
        null,
        React.createElement(Example, null)
      );
    },
    code: '<Example />',
    code: '<InputGroup>\n            <Example />\n          </InputGroup>'
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
