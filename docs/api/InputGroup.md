## InputGroup 
 
Wrapping components with InputGroup gives you the
option of giving Inputs dividing borders, dividing
borders with an inset, a top border (with a unique inset value),
a bottom border (with a unique inset value), shared background
colours, margins, and a label. You could supply your own
child components, too.

 
 __Composes__: [Base](Base.md), [Divider](Divider.md), [SectionHeader](SectionHeader.md) 


 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
style | object  |   | 
inset | number  | 0 | left margin inset for the divider border (excluding top and bottom)
showTopBorder | bool  | true | show the top border
showBottomBorder | bool  | true | show the bottom border
showBorder | bool  | true | whether to show the dividing border
topInset | number  | 0 | left margin inset for the top border
bottomInset | number  | 0 | left margin inset for the bottom border
label | string  |   | a label for the input group
backgroundColor | string  |   | 
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
  var _ReactNative2 = ReactNative;
  var View = _ReactNative2.View;
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

  var BasicGroup = function (_React$Component2) {
    _inherits(BasicGroup, _React$Component2);

    function BasicGroup(props) {
      _classCallCheck(this, BasicGroup);

      var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(BasicGroup).call(this, props));

      _this3.state = {
        editable: true,
        basic: '',
        label: '',
        label2: '',
        label3: '',
        label4: '',
        label5: ''
      };
      return _this3;
    }

    _createClass(BasicGroup, [{
      key: 'render',
      value: function render() {

        var First = renderInputWithProps({ placeholder: 'Basic Input ' });
        var Second = renderInputWithProps({
          label: 'Basic Input with Label',
          placeholder: 'Your Value'
        });
        var Third = renderInputWithProps({
          label: 'Basic Input with Label & Vertical',
          vertical: true,
          placeholder: 'Placeholder'
        });

        var Fourth = renderInputWithProps({
          label: 'Removable',
          removable: true,
          placeholder: 'Type here...',
          onSelectLabel: function onSelectLabel() {
            return noop;
          }
        });

        return React.createElement(
          View,
          null,
          React.createElement(
            InputGroup,
            { label: 'INPUT GROUP LABEL', inset: 16, mt: 3 },
            React.createElement(First, null),
            React.createElement(Second, null),
            React.createElement(Third, null),
            React.createElement(Fourth, null)
          ),
          React.createElement(
            InputHelpText,
            null,
            'Some help text. Aute nulla ex ea amet sunt occaecat qui fugiat cupidatat fugiat in. Veniam amet elit et tempor sit ea nulla adipisicing laboris pariatur.'
          )
        );
      }
    }]);

    return BasicGroup;
  }(React.Component);

  return [{
    title: 'Basic InputGroup',
    render: function render() {
      return React.createElement(BasicGroup, null);
    },
    code: '<BasicGroup />',
    exampleString: '\n        <View>\n          <InputGroup label=\'INPUT GROUP LABEL\' inset={16} mt={3}>\n            <InputRow\n              value={this.state.first}\n              onChangeText={(first) => this.setState({ first })}\n              placeholder=\'Basic Input\'\n            />\n            <InputRow\n              value={this.state.second}\n              onChangeText={(second) => this.setState({ second })}\n              label=\'Basic Input with Label\'\n              placeholder=\'Your Value\'\n            />\n            <InputRow\n              value={this.state.value}\n              onChangeText={(value) => this.setState({ value })}\n              label=\'Basic Input with Label & Vertical\'\n              vertical\n              placeholder=\'Placeholder\'\n            />\n            <InputRow\n              value={this.state.value}\n              onChangeText={(value) => this.setState({ value })}\n              label=\'Removable\'\n              removable\n              placeholder=\'Type here...\'\n              onSelectLabel={() => noop}\n            />\n          </InputGroup>\n          <InputHelpText>\n            Some help text. Aute nulla ex ea amet sunt occaecat qui fugiat cupidatat fugiat in. Veniam amet elit et tempor sit ea nulla adipisicing laboris pariatur.\n          </InputHelpText>\n        </View>\n      '
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
