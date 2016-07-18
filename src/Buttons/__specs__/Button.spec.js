import React from 'react'
import {
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'

chai.use(chaiSubset)

import { Button } from '../Button'
import config from '../../config'

function flatten(style) {
  return StyleSheet.flatten(style)
}

function render(props) {
  return shallow(
    <Button {...props} panza={config}>Hello</Button>
  )
}

function contains(el, s) {
  const props = flatten(el.props())
  return expect(props).to.containSubset(s)
}

function n(p, m) {
  return contains(render(p), m)
}

// todo: the HOC makes testing with enyme
// shallow renderer more difficult. Hopefully enzyme
// eventually allows an option to shallow render
// multiple levels deep.

describe('<Button />', () => {

  it('should render 1 component', () => {
    expect(render()).to.have.length(1)
  })

  it('should add default props', () => {
    expect(render().props()).to.containSubset({
      Component: TouchableHighlight,
      accessibilityComponentType: 'button',
      disabled: false,
      backgroundColor: 'midgray',
      textColor: 'white',
      borderColor: 'midgray',
      underlayColor: 'darken',
      height: 40,
      px: 2,
      size: 'medium',
      outline: false,
      rounded: 6
    })
  })


  it('should render outline buttons', () => {
    n({ outline: true }, {
      backgroundColor: 'transparent',
      textColor: 'default',
      borderColor: 'midgray',
      underlayColor: '#eee'
    })

    n({ primary: true, outline: true }, {
      borderColor: 'primary',
      backgroundColor: 'transparent'
    })

  })

  it('should render different sizes', () => {
    n({ small: true }, { height: 30 })
    n({ large: true }, { height: 55 })
  })

})
