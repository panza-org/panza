## NavBar 
 
Static navigation bar that mimics that found
within ReactNative. To be used when you want a static
representation of the NavBar, without transitions.

 
 __Composes__ [Base](Base.md), [NavTitle](NavTitle.md) 


 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
title | string  |   | 
LeftButton | node  |   | 
RightButton | node  |   | 
style | any  |   | 
transparent | bool  |   | 
backgroundColor | string  |   | 
titleColor | string  |   | 
inverted | bool  |   | 
 

  ### Examples

  <script src="https://fb.me/react-15.2.1.js"></script>
  <script src="https://fb.me/react-dom-15.2.1.js"></script>
  <script src="https://rawgit.com/bmcmahen/panza/docs/docs/assets/ReactNative.js"></script>
  <script src="https://rawgit.com/bmcmahen/panza/docs/docs/assets/panza.web.js"></script>
  <link href='https://cdn.rawgit.com/driftyco/ionicons/3.0/dist/css/ionicons.css' rel='stylesheet'><link>
  <div style="position: relative; width: 375px; height: 667px; border: 1px solid #ddd;" id='react-root'></div>
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
  var NavBar = _Panza2.NavBar;
  var NavTouchableText = _Panza2.NavTouchableText;
  var NavTouchableIcon = _Panza2.NavTouchableIcon;
  var CloseIcon = _Panza2.CloseIcon;
  var ButtonGroup = _Panza2.ButtonGroup;
  var Button = _Panza2.Button;
  var Divider = _Panza2.Divider;
  var _ReactNative2 = ReactNative;
  var View = _ReactNative2.View;


  var styles = { paddingVertical: 4 };
  var log = function log() {
    console.log('hello');
  };

  return [{
    title: 'NavBar',
    description: 'A basic NavBar',
    render: function render() {
      return React.createElement(NavBar, {
        RightButton: React.createElement(
          NavTouchableText,
          { onPress: log },
          'Save'
        ),
        LeftButton: React.createElement(
          NavTouchableIcon,
          {
            accessibilityLabel: 'Close',
            onPress: log },
          React.createElement(CloseIcon, null)
        ),
        title: 'Hello World',
        backgroundColor: '#fafafa'
      });
    },
    code: '<CloseIcon />',
    code: '<NavTouchableIcon\n            accessibilityLabel=\'Close\'\n            onPress={log}>\n            <CloseIcon />\n          </NavTouchableIcon>',
    code: '<NavTouchableText onPress={log}>\n            Save\n          </NavTouchableText>',
    code: '<NavBar\n        RightButton={\n          <NavTouchableText onPress={log}>\n            Save\n          </NavTouchableText>\n        }\n        LeftButton={\n          <NavTouchableIcon\n            accessibilityLabel=\'Close\'\n            onPress={log}>\n            <CloseIcon />\n          </NavTouchableIcon>\n        }\n        title=\'Hello World\'\n        backgroundColor=\'#fafafa\'\n      />'
  }, {
    title: 'Inverted NavBar',
    render: function render() {
      return React.createElement(NavBar, {
        inverted: true,
        backgroundColor: 'primary',
        RightButton: React.createElement(
          NavTouchableText,
          { color: 'white', onPress: log },
          'Save'
        ),
        LeftButton: React.createElement(
          NavTouchableIcon,
          {
            accessibilityLabel: 'Close',
            onPress: log },
          React.createElement(CloseIcon, { color: 'white' })
        ),
        title: 'Hello World'
      });
    },
    code: '<CloseIcon color=\'white\' />',
    code: '<NavTouchableIcon\n            accessibilityLabel=\'Close\'\n            onPress={log}>\n            <CloseIcon color=\'white\' />\n          </NavTouchableIcon>',
    code: '<NavTouchableText color=\'white\' onPress={log}>\n            Save\n          </NavTouchableText>',
    code: '<NavBar\n        inverted\n        backgroundColor=\'primary\'\n        RightButton={\n          <NavTouchableText color=\'white\' onPress={log}>\n            Save\n          </NavTouchableText>\n        }\n        LeftButton={\n          <NavTouchableIcon\n            accessibilityLabel=\'Close\'\n            onPress={log}>\n            <CloseIcon color=\'white\' />\n          </NavTouchableIcon>\n        }\n        title=\'Hello World\'\n      />'
  }, {
    title: 'With Button Group',
    render: function render() {
      return React.createElement(
        View,
        null,
        React.createElement(NavBar, {
          RightButton: React.createElement(
            NavTouchableText,
            { onPress: log },
            'Save'
          ),
          LeftButton: React.createElement(
            NavTouchableIcon,
            {
              accessibilityLabel: 'Close',
              onPress: log },
            React.createElement(CloseIcon, null)
          ),
          title: 'Hello World',
          backgroundColor: '#fafafa'
        }),
        React.createElement(
          ButtonGroup,
          { style: styles, backgroundColor: '#fafafa' },
          React.createElement(
            Button,
            { small: true, onPress: log, transparent: true, icon: 'ios-heart-outline' },
            'Like'
          ),
          React.createElement(
            Button,
            { small: true, onPress: log, transparent: true, icon: 'ios-text-outline' },
            'Comment'
          ),
          React.createElement(
            Button,
            { small: true, onPress: log, transparent: true, icon: 'ios-share-outline' },
            'Share'
          )
        ),
        React.createElement(Divider, null)
      );
    },
    code: '<Divider />',
    code: '<Button small onPress={log} transparent icon=\'ios-share-outline\'>\n            Share\n          </Button>',
    code: '<Button small onPress={log} transparent icon=\'ios-text-outline\'>\n            Comment\n          </Button>',
    code: '<Button small onPress={log} transparent icon=\'ios-heart-outline\'>\n            Like\n          </Button>',
    code: '<ButtonGroup style={styles} backgroundColor=\'#fafafa\'>\n          <Button small onPress={log} transparent icon=\'ios-heart-outline\'>\n            Like\n          </Button>\n          <Button small onPress={log} transparent icon=\'ios-text-outline\'>\n            Comment\n          </Button>\n          <Button small onPress={log} transparent icon=\'ios-share-outline\'>\n            Share\n          </Button>\n        </ButtonGroup>',
    code: '<CloseIcon />',
    code: '<NavTouchableIcon\n              accessibilityLabel=\'Close\'\n              onPress={log}>\n              <CloseIcon />\n            </NavTouchableIcon>',
    code: '<NavTouchableText onPress={log}>\n              Save\n            </NavTouchableText>',
    code: '<NavBar\n          RightButton={\n            <NavTouchableText onPress={log}>\n              Save\n            </NavTouchableText>\n          }\n          LeftButton={\n            <NavTouchableIcon\n              accessibilityLabel=\'Close\'\n              onPress={log}>\n              <CloseIcon />\n            </NavTouchableIcon>\n          }\n          title=\'Hello World\'\n          backgroundColor=\'#fafafa\'\n        />',
    code: '<View>\n        <NavBar\n          RightButton={\n            <NavTouchableText onPress={log}>\n              Save\n            </NavTouchableText>\n          }\n          LeftButton={\n            <NavTouchableIcon\n              accessibilityLabel=\'Close\'\n              onPress={log}>\n              <CloseIcon />\n            </NavTouchableIcon>\n          }\n          title=\'Hello World\'\n          backgroundColor=\'#fafafa\'\n        />\n        <ButtonGroup style={styles} backgroundColor=\'#fafafa\'>\n          <Button small onPress={log} transparent icon=\'ios-heart-outline\'>\n            Like\n          </Button>\n          <Button small onPress={log} transparent icon=\'ios-text-outline\'>\n            Comment\n          </Button>\n          <Button small onPress={log} transparent icon=\'ios-share-outline\'>\n            Share\n          </Button>\n        </ButtonGroup>\n        <Divider />\n      </View>'
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
