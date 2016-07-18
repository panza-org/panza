import React from 'react'
import {
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'

chai.use(chaiSubset)

import { ButtonGroup } from '../ButtonGroup'
import Button from '../Button'
import config from '../../config'

function flatten(style) {
  return StyleSheet.flatten(style)
}

function render(props) {
  return shallow(
    <ButtonGroup {...props} panza={config}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  )
}

function contains(el, s) {
  const props = flatten(el.props())
  return expect(props).to.containSubset(s)
}

function n(p, m) {
  return contains(render(p), m)
}

describe('<ButtonGroup />', () => {

  it('should render 1 component', () => {
    expect(render()).to.have.length(1)
  })

  it('should render the button children', () => {
    expect(render().children()).to.have.length(3)
  })

  it('should add certain props to children', () => {
    const group = render()
    expect(group.find('Button').first().props()).to.have.property('flex', 1)

    const seg = render({ segmented: true })
    expect(seg.find('Button').first().props()).to.have.property('rounded', false)
    expect(seg.find('Button').first().props()).to.have.property('block', true)
  })

  it('be horizontal by default', () => {
    const group = render()
    expect(group.props()).to.have.property('row', true)
    expect(group.props()).to.have.property('flex', 1)
  })

  it('should support the vertical prop', () => {
    const group = render({ vertical: true, rounded: true })
    expect(group.props()).to.have.property('column', true)
    expect(group.props()).to.have.property('flex', 0)
  })

})
