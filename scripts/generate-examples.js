const PANZA_SRC = '[["panza", "Panza", "https://rawgit.com/bmcmahen/panza/docs/docs/assets/panza.web.js"]]'

const iframe = (code) => (`
### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=${encodeURIComponent(PANZA_SRC)}&code=${encodeURIComponent(code)}"
></iframe>
  {% endraw %}
`)

const template = (examples) => (`
  import {
    Button,
    Divider,
    Base,
    Text
  } from 'panza'
  
  ${examples}
  
  import {
    ListView
  } from 'react-native'

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
          <Base py={2}>
            <Base px={2}>
              <Text mb={1} bold>{row.title}</Text>
            </Base>
            <Base {...row.props}>
              {row.render()}
            </Base>
          </Base>
        )}
        renderSeparator={(a, b) => <Divider key={a + b} />}
      />
    )
  }

  const App = () => <Module examples={Examples()} />

  ReactNative.AppRegistry.registerComponent('App', () => App)
`)

module.exports = function transform(exampleBuffer) {

  if (exampleBuffer.length === 0) {
    return ''
  }

  const buf = template(exampleBuffer)

  return iframe(buf)
}
