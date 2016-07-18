## Examples

### RowSeparator with inset

![RowSeparator with inset image](images/RowSeparator.png)

```javascript

<ListView
  dataSource={dataSource}
  style={styles.list}
  renderSeparator={(a, b) => ((Platform.OS === 'ios') && <RowSeparator inset={16} key={a + b} />)}
  renderRow={(rowData) => (
    <TouchableRow
      onPress={() => onSelect(rowData)}
      primaryText={rowData.name}
      key={rowData.name} />
  )}
/>

```
