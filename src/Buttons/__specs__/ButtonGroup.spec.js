/* eslint-env mocha */

import React from 'react'
import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'

chai.use(chaiSubset)

import { ButtonGroup } from '../ButtonGroup'
import Button from '../Button'
import { createRenderer, applyWrapper, getProps } from '../../utils/testUtils'

const renderGroup = createRenderer(
  <ButtonGroup>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>
)
const propGetter = applyWrapper(getProps)(renderGroup)
const testProps = (props, expected) => expect(propGetter(props)).to.containSubset(expected)

describe('<ButtonGroup />', () => {

  it('should render 1 component', () => {
    expect(renderGroup()).to.have.length(1)
  })

  it('should render the button children', () => {
    expect(renderGroup().children()).to.have.length(3)
  })

  it('should add certain props to children', () => {
    const group = renderGroup()
    expect(group.find('Button').first().props()).to.have.property('flex', 1)

    const seg = renderGroup({ segmented: true })
    expect(seg.find('Button').first().props()).to.have.property('rounded', false)
    expect(seg.find('Button').first().props()).to.have.property('block', true)
  })

  it('be horizontal by default', () => {
    testProps({}, {
      row: true,
      flex: 1
    })
  })

  it('should support the vertical prop', () => {
    testProps({ vertical: true }, {
      column: true,
      flex: 0
    })
  })

})
