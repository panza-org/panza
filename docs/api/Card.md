## Card 
 
A very basic Card wrapper
 
 __Composes__: [Base](Base.md) 


 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
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
  var _Panza2 = Panza;
  var Card = _Panza2.Card;
  var CardHeader = _Panza2.CardHeader;
  var Image = _Panza2.Image;
  var TouchableIcon = _Panza2.TouchableIcon;
  var Icon = _Panza2.Icon;
  var Divider = _Panza2.Divider;
  var Button = _Panza2.Button;
  var ButtonGroup = _Panza2.ButtonGroup;
  var Text = _Panza2.Text;
  var Base = _Panza2.Base;


  return [{
    title: 'Card',
    description: 'Using Card & CardHeader',
    render: function render() {
      return React.createElement(
        Card,
        null,
        React.createElement(
          CardHeader,
          {
            avatar: 'http://placehold.it/128/08e/fff',
            title: 'Ben McMahen',
            subtitle: 'October 7, 2016'
          },
          React.createElement(
            TouchableIcon,
            {
              accessibilityLabel: 'Show More',
              onPress: noop },
            React.createElement(Icon, { name: 'ios-arrow-down', size: 20, light: true })
          )
        ),
        React.createElement(Image, {
          backgroundColor: '#eee',
          style: { width: '100%', height: 250 },
          source: { uri: 'http://placehold.it/300/08e/fff' }
        }),
        React.createElement(
          Base,
          { p: 2 },
          React.createElement(
            Text,
            { large: true, bold: true, mb: 1 },
            'Card Title'
          ),
          React.createElement(
            Text,
            { lineHeight: 2, small: true },
            'Ad id Lorem officia reprehenderit magna commodo ut voluptate. Ex ipsum in exercitation in officia reprehenderit dolor tempor.'
          )
        ),
        React.createElement(Divider, null),
        React.createElement(
          ButtonGroup,
          { py: 1 },
          React.createElement(
            Button,
            { small: true, onPress: noop, transparent: true, icon: 'ios-heart-outline' },
            'Like'
          ),
          React.createElement(
            Button,
            { small: true, onPress: noop, transparent: true, icon: 'ios-text-outline' },
            'Comment'
          ),
          React.createElement(
            Button,
            { small: true, onPress: noop, transparent: true, icon: 'ios-share-outline' },
            'Share'
          )
        )
      );
    },
    code: '<Button small onPress={noop} transparent icon=\'ios-share-outline\'>\n            Share\n          </Button>',
    code: '<Button small onPress={noop} transparent icon=\'ios-text-outline\'>\n            Comment\n          </Button>',
    code: '<Button small onPress={noop} transparent icon=\'ios-heart-outline\'>\n            Like\n          </Button>',
    code: '<ButtonGroup py={1}>\n          <Button small onPress={noop} transparent icon=\'ios-heart-outline\'>\n            Like\n          </Button>\n          <Button small onPress={noop} transparent icon=\'ios-text-outline\'>\n            Comment\n          </Button>\n          <Button small onPress={noop} transparent icon=\'ios-share-outline\'>\n            Share\n          </Button>\n        </ButtonGroup>',
    code: '<Divider />',
    code: '<Text lineHeight={2} small>\n            Ad id Lorem officia reprehenderit magna commodo ut voluptate. Ex ipsum in exercitation in officia reprehenderit dolor tempor.\n          </Text>',
    code: '<Text large bold mb={1}>Card Title</Text>',
    code: '<Base p={2}>\n          <Text large bold mb={1}>Card Title</Text>\n          <Text lineHeight={2} small>\n            Ad id Lorem officia reprehenderit magna commodo ut voluptate. Ex ipsum in exercitation in officia reprehenderit dolor tempor.\n          </Text>\n        </Base>',
    code: '<Image\n          backgroundColor=\'#eee\'\n          style={{ width: \'100%\', height: 250 }}\n          source={{ uri: \'http://placehold.it/300/08e/fff\' }}\n        />',
    code: '<Icon name=\'ios-arrow-down\' size={20} light />',
    code: '<TouchableIcon\n            accessibilityLabel=\'Show More\'\n            onPress={noop}>\n            <Icon name=\'ios-arrow-down\' size={20} light />\n          </TouchableIcon>',
    code: '<CardHeader\n          avatar=\'http://placehold.it/128/08e/fff\'\n          title=\'Ben McMahen\'\n          subtitle=\'October 7, 2016\'\n        >\n          <TouchableIcon\n            accessibilityLabel=\'Show More\'\n            onPress={noop}>\n            <Icon name=\'ios-arrow-down\' size={20} light />\n          </TouchableIcon>\n        </CardHeader>',
    code: '<Card>\n        <CardHeader\n          avatar=\'http://placehold.it/128/08e/fff\'\n          title=\'Ben McMahen\'\n          subtitle=\'October 7, 2016\'\n        >\n          <TouchableIcon\n            accessibilityLabel=\'Show More\'\n            onPress={noop}>\n            <Icon name=\'ios-arrow-down\' size={20} light />\n          </TouchableIcon>\n        </CardHeader>\n        <Image\n          backgroundColor=\'#eee\'\n          style={{ width: \'100%\', height: 250 }}\n          source={{ uri: \'http://placehold.it/300/08e/fff\' }}\n        />\n        <Base p={2}>\n          <Text large bold mb={1}>Card Title</Text>\n          <Text lineHeight={2} small>\n            Ad id Lorem officia reprehenderit magna commodo ut voluptate. Ex ipsum in exercitation in officia reprehenderit dolor tempor.\n          </Text>\n        </Base>\n        <Divider />\n        <ButtonGroup py={1}>\n          <Button small onPress={noop} transparent icon=\'ios-heart-outline\'>\n            Like\n          </Button>\n          <Button small onPress={noop} transparent icon=\'ios-text-outline\'>\n            Comment\n          </Button>\n          <Button small onPress={noop} transparent icon=\'ios-share-outline\'>\n            Share\n          </Button>\n        </ButtonGroup>\n      </Card>'
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
