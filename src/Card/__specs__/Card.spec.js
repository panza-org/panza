import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import config from '../../config'
import {
  Text,
  Image,
  Card,
  CardHeader
} from '../../index'
import {
  View,
  StyleSheet
} from 'react-native'

import { shouldContainStyle } from '../../Buttons/__specs__/Button.spec'

describe('<Card />', () => {

  function render({ ...props }) {
    return shallow(
      <Card {...props}><Text>Hi</Text></Card>
    ).find(View)
  }

  it('should render with certain props', () => {
    let card = render()
    expect(card.props).to.have.properties('mt', 1)
    shouldContainStyle(card, 'backgroundColor', 'white')
    shouldContainStyle(card, 'borderTopWidth', StyleSheet.hairlineWidth)
    shouldContainStyle(card, 'borderBottomWidth', StyleSheet.hairlineWidth)
  })
})

describe('<CardHeader />', () => {

  function render({ ...props }) {
    return shallow(
      <CardHeader
        avatar='hi'
        title='title'
        subtitle='subtitle'
        {...props}
      ><Text>Child</Text></CardHeader>
    ).find(View)
  }

  it('should render the appropriate widgets', () => {
    const header = render()
    expect(header.find(Image)).to.have.length(1)
    expect(header.find(Text)).to.have.length(3)
  })

})
