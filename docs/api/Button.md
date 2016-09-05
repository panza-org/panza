## Button 
 
A basic button that inherits from Base, and provides colourization
based upon background color configuration.
 
 __Composes__: [Base](Base.md), [Text](Text.md), [Icon](Icon.md) 


### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
small | bool  |   | button size
medium | bool  |   | 
large | bool  |   | 
primary | bool  |   | Uses the primary colour to style the button.
secondary | bool  |   | Uses the secondary colour to style the button.
positive | bool  |   | Uses the positive colour to style the button.
negative | bool  |   | Uses the negative colour to style the button.
default | bool  |   | Uses the midgray colour to style the button.
outline | bool  | false | Use an outline button style *
disabled | bool  | false | disables the button, and reduces its opacity
rounded | number  | 6 | 
onPress | func  |   | 
underlayColor | string  |   | 
backgroundColor | string  |   | 
borderColor | string  |   | 
block | bool  | false | stretch the button width
icon | string&#124;node |   | optional icon string or node
size |  | 'medium' | 
 

### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%20Button%20%7D%20%3D%20Panza%0A%0A%20%20return%20(%0A%20%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Plain%20Button'%2C%0A%20%20%20%20%20%20description%3A%20'A%20standard%20Button'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7Bnoop%7D%3EBacon%3C%2FButton%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Primary'%2C%0A%20%20%20%20%20description%3A%20'A%20primary%20Button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%3CButton%20primary%20onPress%3D%7Bnoop%7D%3E%0A%20%20%20%20%20%20%20%20Primary%20Button%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Secondary'%2C%0A%20%20%20%20%20description%3A%20'A%20secondary%20Button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20secondary%20onPress%3D%7Bnoop%7D%3ESecondary%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Positive'%2C%0A%20%20%20%20%20description%3A%20'A%20positive%20Button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20positive%20onPress%3D%7Bnoop%7D%3EPositive%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Negative'%2C%0A%20%20%20%20%20description%3A%20'A%20negative%20Button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20negative%20onPress%3D%7Bnoop%7D%3ENegative%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Outline'%2C%0A%20%20%20%20%20description%3A%20'An%20outline%20Button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20outline%20onPress%3D%7Bnoop%7D%3EOutline%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Primary%20Outline'%2C%0A%20%20%20%20%20description%3A%20'A%20primary%2C%20outline%20Button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20primary%20outline%20onPress%3D%7Bnoop%7D%3EPrimary%20Outline%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Block'%2C%0A%20%20%20%20%20description%3A%20'A%20block%20button%20stretches%20it%20to%20the%20full%20width%20of%20the%20container%20element'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20block%20onPress%3D%7Bnoop%7D%3EBlock%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Icon'%2C%0A%20%20%20%20%20description%3A%20'A%20primary%20outline%20button%20with%20an%20icon%20(ios-add)'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20primary%20outline%20icon%3D'ios-add'%20onPress%3D%7Bnoop%7D%3EIcon%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Rounded'%2C%0A%20%20%20%20%20description%3A%20'A%20button%20with%20a%20custom%20rounded%20value'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20onPress%3D%7Bnoop%7D%20primary%20rounded%3D%7B25%7D%3ERounded%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Small'%2C%0A%20%20%20%20%20description%3A%20'A%20small%20button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20onPress%3D%7Bnoop%7D%20small%3ESmall%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Large'%2C%0A%20%20%20%20%20description%3A%20'A%20large%20button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20onPress%3D%7Bnoop%7D%20large%3ELarge%3C%2FButton%3E%0A%20%20%20%20%7D%0A%20%20%5D.map((p)%20%3D%3E%20%7B%0A%20%20%20%20p.props%20%3D%20%7B%20px%3A%202%20%7D%0A%20%20%20%20return%20p%0A%20%20%7D)%0A%20%20)%0A%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}
