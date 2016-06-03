var documents = require('../documentation/components.json')
var fs = require('fs')

function stringOfLength(string, length) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    newString += string;
  }
  return newString;
}

function generateTitle(name) {
  var title = '`' + name + '` (component)';
  return title + '\n' + stringOfLength('=', title.length) + '\n';
}

function generateDesciption(description) {
  return description + '\n';
}

function generatePropType(type) {
  var values;
  if (Array.isArray(type.value)) {
    values = '(' +
      type.value.map(function(typeValue) {
        return typeValue.name || typeValue.value;
      }).join('|') +
      ')';
  } else {
    values = type.value;
  }

  return 'type: `' + type.name + (values ? values: '') + '`\n';
}

function generatePropDefaultValue(value) {
  return 'defaultValue: `' + value.value + '`\n';
}

function generateProp(propName, prop) {
  return (
    '### `' + propName + '`' + (prop.required ? ' (required)' : '') + '\n' +
    '\n' +
    (prop.description ? prop.description + '\n\n' : '') +
    (prop.type ? generatePropType(prop.type) : '') +
    (prop.defaultValue ? generatePropDefaultValue(prop.defaultValue) : '') +
    '\n'
  );
}

function generateProps(props) {


  if (!props) return ''

  var title = 'Props';

  return (
    title + '\n' +
    stringOfLength('-', title.length) + '\n' +
    '\n' +
    Object.keys(props).sort().map(function(propName) {
      return generateProp(propName, props[propName]);
    }).join('\n')
  );
}

function generateMarkdown(name, reactAPI) {
  var markdownString =
    generateTitle(name) + '\n' +
    generateDesciption(reactAPI.description) + '\n' +
    generateProps(reactAPI.props);

  return markdownString;
}

const keys = Object.keys(documents)

keys.forEach((key) => {
  const comp = documents[key]
  const name = comp.displayName || key
  const md = generateMarkdown(name, comp)

  var exampleExists = fs.existsSync(__dirname + '/../documentation/Examples/'+name+'.md')

  var example = exampleExists ? fs.readFileSync(__dirname + '/../documentation/Examples/'+name+'.md', {
    encoding: 'utf-8'
  }) : ''

  fs.writeFileSync(__dirname + '/../documentation/'+ name + '.md', md + example)


})
