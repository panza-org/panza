/* eslint-env mocha */

import React from 'react'
import {
  Text
} from 'react-native'

import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'

chai.use(chaiSubset)

import { CardHeader } from '../CardHeader'
import { createRenderer, applyWrapper, getProps } from '../../utils/testUtils'

const renderHeader = createRenderer(
  <CardHeader
    avatar='hi'
    title='title'
    subtitle='subtitle'
  >
    <Text>Child</Text>
  </CardHeader>
)

const propGetter = applyWrapper(getProps)(renderHeader)
const testProps = (props, expected) => expect(propGetter(props)).to.containSubset(expected)

describe('<CardHeader />', () => {

  it('should render with props', () => {
    testProps({ mt: 1 }, {
      mt: 1
    })
  })

})
