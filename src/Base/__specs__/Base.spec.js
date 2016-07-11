import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Base from '../Base'
import config from '../../config'

function flattenStyle(style) {
  var result = {}
  for (var i = 0, styleLength = style.length; i < styleLength; ++i) {
    var computedStyle = flattenStyle(style[i])
    if (computedStyle) {
      for (var key in computedStyle) {
        result[key] = computedStyle[key]
      }
    }
  }
  return result
}

describe('<Base />', () => {

  function renderWithProps({ ...props }) {
    return shallow(<Base {...props} />).find(View)
  }

  function doesContainStyle(styles, style) {
    let key = Object.keys(style)
    return styles[style]
  }

  function shouldContainStyle(base, key, value) {
    let styles = base.props().style
    if (Array.isArray(styles)) {
      styles = Object.assign.apply(null, styles)
    }

    return expect(styles[key]).to.equal(value)
  }

  it('it should render 1 view component', () => {
    expect(renderWithProps()).to.have.length(1)
  })

  it('should apply the proper padding', () => {

    shouldContainStyle(renderWithProps({ p: 1 }), 'padding', config.scale[1])
    shouldContainStyle(renderWithProps({ p: 2 }), 'padding', config.scale[2])
    shouldContainStyle(renderWithProps({ p: 3 }), 'padding', config.scale[3])
    shouldContainStyle(renderWithProps({ p: 4 }), 'padding', config.scale[4])

    shouldContainStyle(renderWithProps({ py: 1 }), 'paddingTop', config.scale[1])
    shouldContainStyle(renderWithProps({ py: 1 }), 'paddingBottom', config.scale[1])

    shouldContainStyle(renderWithProps({ pl: 1 }), 'paddingLeft', config.scale[1])
    shouldContainStyle(renderWithProps({ pt: 1 }), 'paddingTop', config.scale[1])
    shouldContainStyle(renderWithProps({ pb: 1 }), 'paddingBottom', config.scale[1])
    shouldContainStyle(renderWithProps({ pr: 1 }), 'paddingRight', config.scale[1])

    shouldContainStyle(renderWithProps({ px: 1 }), 'paddingLeft', config.scale[1])
    shouldContainStyle(renderWithProps({ px: 1 }), 'paddingRight', config.scale[1])

  })

  it('should apply the proper margins', () => {
    shouldContainStyle(renderWithProps({ m: 1 }), 'margin', config.scale[1])
    shouldContainStyle(renderWithProps({ m: 2 }), 'margin', config.scale[2])
    shouldContainStyle(renderWithProps({ m: 3 }), 'margin', config.scale[3])
    shouldContainStyle(renderWithProps({ m: 4 }), 'margin', config.scale[4])

    shouldContainStyle(renderWithProps({ my: 1 }), 'marginTop', config.scale[1])
    shouldContainStyle(renderWithProps({ my: 1 }), 'marginBottom', config.scale[1])

    shouldContainStyle(renderWithProps({ ml: 1 }), 'marginLeft', config.scale[1])
    shouldContainStyle(renderWithProps({ mt: 1, mb: 1 }), 'marginTop', config.scale[1])
    shouldContainStyle(renderWithProps({ mb: 1, mx: 1 }), 'marginBottom', config.scale[1])
    shouldContainStyle(renderWithProps({ mr: 1 }), 'marginRight', config.scale[1])

    shouldContainStyle(renderWithProps({ mx: 1 }), 'marginLeft', config.scale[1])
    shouldContainStyle(renderWithProps({ mx: 1 }), 'marginRight', config.scale[1])
  })

  it('should render a custom component', () => {
    let el = shallow(<Base Component={TouchableHighlight} />).find(TouchableHighlight)
    expect(el).to.have.length(1)
  })

  it('should support darken underlayColors', () => {
    let el = shallow(<Base Component={TouchableHighlight} backgroundColor='primary' underlayColor='darken' />).find(TouchableHighlight)
    expect(el.props().underlayColor).to.equal('#0079D6')
  })

  it('should support other underlay colors', () => {
    let el = shallow(<Base Component={TouchableHighlight} backgroundColor='primary' underlayColor='#eee' />).find(TouchableHighlight)
    expect(el.props().underlayColor).to.equal('#eee')
  })

  it('should convert backgroundColor into style props', () => {
    shouldContainStyle(renderWithProps({ backgroundColor: '#eee' }), 'backgroundColor', '#eee')
  })

  it('should convert config specified colours (primary, etc.) to the appropriate colour', () => {
    Object.keys(config.colors).forEach(color => {
      shouldContainStyle(
        renderWithProps({ backgroundColor: color }),
        'backgroundColor',
        config.colors[color]
      )
    })
  })

  it('should convert flex props to styles', () => {
    shouldContainStyle(renderWithProps({ flex: 1 }), 'flex', 1)
    shouldContainStyle(renderWithProps({ justify: 'flex-start' }), 'justifyContent', 'flex-start')
    shouldContainStyle(renderWithProps({ align: 'center' }), 'alignItems', 'center')
    shouldContainStyle(renderWithProps({ row: true }), 'flexDirection', 'row')
    shouldContainStyle(renderWithProps({ column: true }), 'flexDirection', 'column')
    shouldContainStyle(renderWithProps({ wrap: true }), 'flexWrap', 'wrap')
  })

  it('should support the rounded prop', () => {
    shouldContainStyle(renderWithProps({ rounded: true }), 'borderRadius', config.borderRadius)
    shouldContainStyle(renderWithProps({ rounded: 10 }), 'borderRadius', 10)
    shouldContainStyle(renderWithProps({ rounded: false }), 'borderRadius', 0)
  })

  it('should attach other props', () => {
    let el = shallow(<Base Component={TouchableHighlight} activeOpacity={0.1} backgroundColor='primary' underlayColor='#eee' />).find(TouchableHighlight)
    expect(el.props().activeOpacity).to.equal(0.1)
  })

})
