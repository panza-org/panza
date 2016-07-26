/* eslint-env mocha */

import React from 'react'
import {
  TouchableHighlight
} from 'react-native'

import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'

chai.use(chaiSubset)

import { Button } from '../Button'
import { createRenderer, applyWrapper, getProps } from '../../utils/testUtils'

const renderButton = createRenderer(<Button>Hello</Button>)
const propGetter = applyWrapper(getProps)(renderButton)
const testProps = (props, expected) => expect(propGetter(props)).to.containSubset(expected)


// todo: the HOC makes testing with enyme
// shallow renderer more difficult. Hopefully enzyme
// eventually allows an option to shallow render
// multiple levels deep.

describe('<Button />', () => {

  it('should render 1 component', () => {
    expect(renderButton()).to.have.length(1)
  })

  it('should add default props', () => {
    testProps({}, {
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
    testProps({ outline: true }, {
      backgroundColor: 'transparent',
      textColor: 'default',
      borderColor: 'midgray',
      underlayColor: '#eee'
    })

    testProps({ primary: true, outline: true }, {
      borderColor: 'primary',
      backgroundColor: 'transparent'
    })

  })

  it('should render different sizes', () => {
    testProps({ small: true }, { height: 30 })
    testProps({ large: true }, { height: 55 })
  })

})
