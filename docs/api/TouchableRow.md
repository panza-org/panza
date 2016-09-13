## TouchableRow 
 
The basic RowCell for use within ListView. It displays
an image, primary text, secondary text, a value,
and an arrow right icon if the respective props are
specified.

__Platforms__:  ios, android, web
 
 __Composes__: [TouchableRowCell](TouchableRowCell.md), [Image](Image.md), [Text](Text.md) 


### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
primaryText | string&#124;node |   | 
secondaryText | string&#124;node |   | 
value | string&#124;node |   | A value attribute of the cell, to appear on the right
onPress | func  (required) |   | 
image | object&#124;node |   | An thumbnail to be displayed on the left of the cell
height | number  |   | 
inverted | bool  |   | 
showMore | bool  |   | Displays a right arrow on the right hand side of the cell
 

### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%0A%20%20%20%20TouchableRow%2C%0A%20%20%20%20InputGroup%0A%20%20%7D%20%3D%20Panza%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Touchable%20Row'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTouchableRow%0A%20%20%20%20%20%20%20%20%20%20%20%20primaryText%3D'Primary%20Text'%0A%20%20%20%20%20%20%20%20%20%20%20%20secondaryText%3D'Secondary%20Text'%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D'Value'%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bnoop%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Touchable%20Row'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTouchableRow%0A%20%20%20%20%20%20%20%20%20%20%20%20image%3D%7B%7B%20uri%3A%20'http%3A%2F%2Fplacehold.it%2F150x150'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20primaryText%3D'Primary%20Text'%0A%20%20%20%20%20%20%20%20%20%20%20%20secondaryText%3D'Secondary%20Text'%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D'Value'%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bnoop%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%20%20%5D%0A%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}
