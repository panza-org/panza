import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import config from '../../config'
import Button from '../Button'
import { Text, Icon } from '../../index'
import {TouchableHighlight} from 'react-native'
import { View } from 'react-native'

export function flattenStyle(style) {
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

export function shouldContainStyle(base, key, value) {
  let styles = base.props().style
  if (Array.isArray(styles)) {
    styles = Object.assign.apply(null, styles)
  }

  return expect(styles[key]).to.equal(value)
}

describe('<Button />', () => {

  function render({ ...props }, child) {
    return shallow(<Button {...props}>{child || 'Hi'}</Button>).find(TouchableHighlight)
  }
  
  it('should render 1 TouchableHighlight component', () => {
    expect(render()).to.have.length(1)
  })

  it('should render different types', () => {
    shouldContainStyle(render(), 'backgroundColor', config.colors.default)
    shouldContainStyle(render({ primary: true }), 'backgroundColor', config.colors.primary)
    shouldContainStyle(render({ secondary: true }), 'backgroundColor', config.colors.secondary)
    shouldContainStyle(render({ positive: true }), 'backgroundColor', config.colors.positive)
    shouldContainStyle(render({ negative: true }), 'backgroundColor', config.colors.negative)
  })

  it('should render outline types', () => {
    const outline = render({ outline: true })
    shouldContainStyle(outline, 'backgroundColor', 'transparent')
    shouldContainStyle(outline, 'borderColor', config.colors.default)
    const outlinePrimary = render({ primary: true, outline: true })
    shouldContainStyle(outlinePrimary, 'borderColor', config.colors.primary)
    shouldContainStyle(outlinePrimary, 'backgroundColor', 'transparent')
  })

  it('should render different sizes', () => {

    // small
    const small = render({ small: true })
    shouldContainStyle(small, 'height', '30')
    const text = small.find(Text)
    shouldContainStyle(text, 'fontSize', config.fontSizes[6])

    // large
    shouldContainStyle(render({ large: true }), 'height', '55')
    shouldContainStyle(render({ large: true }).find(Text), 'fontSize', config.fontSizes[3])


  })

  it('should render the correct children', () => {
    const basic = render().find(Text)
    expect(basic).to.have.length(1)
    const custom = render({}, <View />).find(View)
    expect(custom).to.have.length(1)
  })

  it('should render icons', () => {
    const basic = render({ icon: 'ios-arrow-left' })
    expect(basic.find(Icon)).to.have.length(1)

    const withIcon = render({ icon: <Icon name='ios-arrow-left' /> })
    expect(withIcon.find(Icon)).to.have.length(1)
  })

})
