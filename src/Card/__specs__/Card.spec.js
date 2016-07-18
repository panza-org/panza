import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native'

import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'

chai.use(chaiSubset)

import { Card } from '../Card'
import { CardHeader } from '../CardHeader'
import config from '../../config'

function flatten(style) {
  return StyleSheet.flatten(style)
}

function render({ ...props }) {
  return shallow(<Card {...props} panza={config}><Text>Hi</Text></Card>)
}

function contains(el, s) {
  const style = flatten(el.props().style)
  return expect(style).to.containSubset(s)
}

function n(p, m) {
  return contains(render(p), m)
}

describe('<Card />', () => {

  it('should render with props', () => {
    const props = render().props()
    expect(props.mt).to.equal(1)
  })


})

describe('<CardHeader />', () => {

  function r(props) {
    return shallow(
      <CardHeader
        avatar='hi'
        title='title'
        subtitle='subtitle'
        {...props}
      >
        <Text>Child</Text>
      </CardHeader>
    )
  }

})
