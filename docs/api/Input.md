## Input 
 
A basic input
 
 __Composes__ [Text](Text.md) 


 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
tiny | bool  |   | 
large | bool  |   | 
small | bool  |   | 
medium | bool  |   | 
giant | bool  |   | 
inverted | bool  |   | 
placeholderTextColor | string  | '#888' | 
 

  ### Examples

  <script src="https://fb.me/react-15.2.1.js"></script>
  <script src="https://fb.me/react-dom-15.2.1.js"></script>
  <script src="https://rawgit.com/bmcmahen/panza/docs/docs/assets/ReactNative.js"></script>
  <script src="https://rawgit.com/bmcmahen/panza/docs/docs/assets/panza.web.js"></script>
  <link href='https://cdn.rawgit.com/driftyco/ionicons/3.0/dist/css/ionicons.css' rel='stylesheet'><link>
  <div style="position: relative; width: 375px; height: 667px; border: 1px solid #ddd;" id='react-root'></div>
  <script>
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var Input = _Panza2.Input;


  function createInput(type) {
    return function (_React$Component) {
      _inherits(InputExample, _React$Component);

      function InputExample() {
        _classCallCheck(this, InputExample);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputExample).call(this));

        _this.state = { value: '' };
        return _this;
      }

      _createClass(InputExample, [{
        key: 'render',
        value: function render() {
          var _this2 = this;

          var input = React.createElement(Input, { flex: 1, style: { width: 200, height: 40 }, value: this.state.value, placeholder: 'Placeholder', onChangeText: function onChangeText(v) {
              return _this2.setState({ value: v });
            } });
          return React.cloneElement(input, _defineProperty({}, type, true));
        }
      }]);

      return InputExample;
    }(React.Component);
  }

  return ['tiny', 'large', 'small', 'medium', 'giant'].map(function (name) {
    var Type = createInput(name);
    return {
      title: name,
      props: { px: 2 },
      render: function render() {
        return React.createElement(Type, null);
      },
      code: '<Type />'
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
