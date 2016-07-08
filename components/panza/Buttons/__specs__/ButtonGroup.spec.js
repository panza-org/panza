import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import config from '../../config'
import {
  ButtonGroup,
  Text,
  Button
} from '../../index'
import {
  View
} from 'react-native'

import { shouldContainStyle } from './Button.spec'

describe('<ButtonGroup />', () => {

  function render({ ...props }, children) {
    return shallow(
      <ButtonGroup {...props}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    ).find(View)
  }


  it('should render 1 component', () => {
    expect(render()).to.have.length(1)
  })

  it('should render the button children', () => {
    expect(render().children).to.have.length(3)
  })

  it('should add certain props to children', () => {
    const group = render()
    expect(group.find('Button').props).to.have.property('flex', 1)

    const seg = render({ segmented: true })
    expect(seg.find('Button').props).to.have.property('rounded', false)
    expect(seg.find('Button').props).to.have.property('block', true)
  })

  it('should support the rounded prop', () => {
    const group = render({ rounded: 5 })
    shouldContainStyle(group.find('Button'), 'borderTopLeftRadius', 5)
    shouldContainStyle(group.find('Button'), 'borderBottomLeftRadius', 5)
  })

  it('be horizontal by default', () => {
    const group = render()
    expect(group.props).to.have.property('flexDirection', 'row')
    expect(group.props).to.have.property('flex', 1)
  })

  it('should support vertical prop', () => {
    const group = render({ vertical: true, rounded: true })
    shouldContainStyle(group.find('Button'), 'borderTopLeftRadius', 5)
    shouldContainStyle(group.find('Button'), 'borderTopRightRadius', 5)
    expect(group.props).to.have.property('flexDirection', 'column')
    expect(group.props).to.have.property('flex', 0)
  })
})
