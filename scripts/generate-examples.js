const babel = require('babel-core')
const react = require('babel-preset-react')
const es2015 = require('babel-preset-es2015')

/**
 * Make a copy of our react code as a string
 */

function plugin(src) {

  return function run(b) {
    const t = b.types

    return {
      visitor: {
        JSXElement(path) {
          const start = path.node.start
          const end = path.node.end
          path.findParent(function(p) { //eslint-disable-line
            if (p.node.type === 'ObjectProperty' && p.node.key.name === 'render') {
              p.insertAfter(t.ObjectProperty( //eslint-disable-line
                t.identifier('code'),
                t.stringLiteral(
                  src.slice(start, end)
                )
              ))
            }
          })
        }
      }
    }
  }
}


// this is really hacky, but works for now.
const top = `
  ### Examples

  <script src="https://fb.me/react-15.2.1.js"></script>
  <script src="https://fb.me/react-dom-15.2.1.js"></script>
  <script src="https://rawgit.com/bmcmahen/panza/docs/docs/assets/ReactNative.js"></script>
  <script src="https://rawgit.com/bmcmahen/panza/docs/docs/assets/panza.web.js"></script>
  <link href='https://cdn.rawgit.com/driftyco/ionicons/3.0/dist/css/ionicons.css' rel='stylesheet'><link>
  <div style="position: relative; width: 375px; height: 667px; border: 1px solid #ddd;" id='react-root'></div>
  <script>
`

const template = (examples) => (`
  const {
    Button,
    Divider,
    Base,
    Text
  } = Panza

  const {
    ListView
  } = ReactNative

  function noop() {
    console.log('button pressed')
  }

  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  })

  const Module = ({ examples }) => {

    const datas = ds.cloneWithRows(examples)

    return (
      <Base
        Component={ListView}
        dataSource={datas}
        renderRow={(row) => (
          <Base p={2}>
            <Text mb={1} bold>{row.title}</Text>
            {row.render()}
            <Base mt={1}>
              <code>
                <pre>
                  {row.code}
                </pre>
              </code>
            </Base>
          </Base>
        )}
        renderSeparator={(a, b) => <Divider key={a + b} />}
      />
    )
  }

  ${examples}

  const App = () => <Module examples={Examples()} />

  ReactNative.AppRegistry.registerComponent('MyApp', () => App)
  ReactNative.AppRegistry.runApplication('MyApp', {
    rootTag: document.getElementById('react-root')
  })
`)

const bottom = `
  </script>
`

module.exports = function transform(exampleBuffer) {

  if (exampleBuffer.length === 0) {
    return ''
  }

  const buf = template(exampleBuffer)

  const out = babel.transform(buf, {
    presets: [react, es2015],
    plugins: [plugin(buf)],
    comments: false
  })

  return top + out.code + bottom
}
