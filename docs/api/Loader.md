## Loader 
 
Displays a loading indicator, and on iOS an optional
loading message.
### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
isLoading | bool  | true | 
large | bool  | false | 
color | string  | 'gray' | 
showText | bool  | true | 
loadingText | string  | 'Loading...' | 
alignTop | bool  | false | 
inverted | bool  |   | 
 

### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%20Loader%20%7D%20%3D%20Panza%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Loader'%2C%0A%20%20%20%20%20%20description%3A%20'Loader'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CLoader%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Large%20loader'%2C%0A%20%20%20%20%20%20description%3A%20'Loader'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CLoader%20large%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Loader%20without%20text'%2C%0A%20%20%20%20%20%20description%3A%20'Loader'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CLoader%20showText%3D%7Bfalse%7D%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}
