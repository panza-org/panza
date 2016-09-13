/** eslint-disable **/

const documents = require('../docs/api/components.json')
const fs = require('fs')
const buildExampleBuffer = require('./generate-examples')

function stringOfLength(string, length) {
  var newString = ''
  for (var i = 0; i < length; i++) {
    newString += string
  }
  return newString
}

function generateTitle(name) {
  return `## ${name} \n ${stringOfLength('=', name)}`
}

function generateDesciption(description) {
  return `${description} \n`
}


// we could eventually build this tree using babel.
// would be a fun hack project.
function buildCompositionLinks(description) {
  const regex = /@Composes(.*)/i
  const comp = description.match(regex)
  var newDescription = description.replace(regex, '')

  const platformRegex = /@Platform/i
  newDescription = newDescription.replace(platformRegex, '__Platforms__: ')

  if (comp && comp[1]) {
    const m = comp[1]
    const links = m.split(',').map((c) => {
      return `[${c.trim()}](${c.trim()}.md)`
    }).join(', ')

    return `${newDescription || ''} \n __Composes__: ${links} \n\n`

  }

  return newDescription || ''

}

function generatePropType(type) {

  if (!type) {
    return ''
  }

  const n = (type.name === 'union' || type.name === 'enum') ? '' : type.name

  var values
  if (Array.isArray(type.value)) {
    const t = type.value
      .map((typeValue) => typeValue.name || typeValue.value)
      .join('&#124;')

    values = `${t}`
  } else {
    values = type.value
  }

  return `${n + (values || ' ')}`
}

function generatePropDefaultValue(value) {
  if (!value) return ' '
  return value.value || ' '
}

function generateProp(propName, prop) {
  const required = prop.required ? ' (required)' : ''
  const description = prop.description || ''
  const type = generatePropType(prop.type)
  const df = generatePropDefaultValue(prop.defaultValue)

  return `${propName} | ${type + required} | ${df} | ${description}`
}

function generateProps(props) {
  if (!props) return ''

  // Table Header
  const parts = [
    '\n### Props',
    'Name | Type | Default Value | Description',
    '--- | --- | --- | --- \n'
  ].join('\n')

  // The props
  const propTable = Object.keys(props)
    .filter(name => (
      name !== 'panza' && name !== 'children'
    ))
    .map(name => (
      generateProp(name, props[name])
    ))
    .join('\n')

  return parts + propTable
}

function generateMarkdown(name, reactAPI) {
  return generateTitle(name) + '\n' + //eslint-disable-line
    buildCompositionLinks(reactAPI.description) +
    generateProps(reactAPI.props)
}

const keys = Object.keys(documents)

// Generate markdown for all of our docs
keys.forEach((key) => {
  const file = documents[key]
  file.forEach(comp => {
    const name = comp.displayName
    try {
      if (!name) {
        throw new Error(`No displayName for: ${key}`)
      }
      const md = generateMarkdown(name, comp)
      const exampleExists = fs.existsSync(
        `${__dirname}/../docs/api/examples/${name}.js`
      )
      const exampleBuffer = exampleExists
        ? fs.readFileSync(
          `${__dirname}/../docs/api/examples/${name}.js`,
          { encoding: 'utf-8' }
        ) : ''

      const processed = buildExampleBuffer(exampleBuffer)
      fs.writeFileSync(`${__dirname}/../docs/api/${name}.md`, md + '\n \n' + processed) // eslint-disable-line
    } catch (err) {
      console.warn(err) // eslint-disable-line
    }
  })
})
