## Base 
 
A general purpose component that converts props into styles
defined by our theme. It's heavily inspired by the Base
component provided by [rebass](https://github.com/jxnblk/rebass).
### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
Component | any  |   | Custom Component
baseStyle | any  |   | The base style will be supplanted by style props, or regular style properties.
style | any  |   | Regular style attribute
underlayColor | string  |   | Underlay color. Use 'darken' to automatically darken the backgroundColor.
m | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin based on the configured scale
mt | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin top based on the configured scale
mr | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin right based on the configured scale
mb | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin bottom based on the configured scale
ml | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin left based on the configured scale
mx | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin x-axis based on the configured scale
my | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin y-asix based on the configured scale
p | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding based on the configured scale
pt | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding top based on the configured scale
pr | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding right based on the configured scale
pb | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding bottom based on the configured scale
pl | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding left based on the configured scale
px | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding x-axis based on the configured scale
py | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding y-axis based on the configured scale
backgroundColor | string  |   | Background color.
rounded | bool&#124;number |   | Border radius
borderColor | string  |   | Border color
flex | number  |   | Flex property
wrap | bool  |   | Flex-wrap property
column | bool  |   | Set the flex-direction to column
row | bool  |   | Set the flex-direction to row
align | string  |   | Align-items property
justify | string  |   | Justify-content property
height | number  |   | The height of the element
width | number  |   | The width of the element
 

### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%20Base%20%7D%20%3D%20Panza%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20with%20padding'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'primary'%20p%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20with%20margin'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20p%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'red'%20p%3D%7B4%7D%20mb%3D%7B2%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'light'%20p%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20rounded'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'green'%20rounded%3D%7B30%7D%20p%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20width%20%26%20height'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20width%3D%7B30%7D%20height%3D%7B50%7D%20backgroundColor%3D'green'%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20with%20flex'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20height%3D%7B200%7D%20flex%3D%7B1%7D%20column%20justify%3D'space-between'%20align%3D'center'%20backgroundColor%3D'light'%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20p%3D%7B2%7D%20backgroundColor%3D'primary'%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20p%3D%7B2%7D%20backgroundColor%3D'secondary'%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20alignSelf%3D'flex-start'%20p%3D%7B2%7D%20backgroundColor%3D'positive'%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}
