/** eslint-disable */

import React from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'

chai.use(chaiSubset)

import { Base } from '../Base'
import config from '../../config'

function flatten(style) {
  return StyleSheet.flatten(style)
}

function render({ ...props }) {
  return shallow(<Base {...props} panza={config} />).find(View)
}

function contains(el, s) {
  const styles = flatten(el.props().style)
  return expect(styles).to.containSubset(s)
}

function n(p, m) {
  return contains(render(p), m)
}

describe('<Base />', () => {

  it('it should render 1 view component', () => {
    expect(render()).to.have.length(1)
  })

  it('should apply the proper padding', () => {
    n({ p: 1 }, { padding: config.scale[1] })
    n({ p: 2 }, { padding: config.scale[2] })
    n({ p: 3 }, { padding: config.scale[3] })
    n({ p: 4 }, { padding: config.scale[4] })
    n({ py: 1 }, { paddingVertical: config.scale[1] })
    n({ pl: 1 }, { paddingLeft: config.scale[1] })
    n({ pt: 1 }, { paddingTop: config.scale[1] })
    n({ pb: 1 }, { paddingBottom: config.scale[1] })
    n({ pr: 1 }, { paddingRight: config.scale[1] })
    n({ px: 1 }, { paddingHorizontal: config.scale[1] })
  })

  it('should apply the proper margins', () => {
    n({ m: 1 }, { margin: config.scale[1] })
    n({ m: 2 }, { margin: config.scale[2] })
    n({ m: 3 }, { margin: config.scale[3] })
    n({ m: 4 }, { margin: config.scale[4] })
    n({ my: 1 }, { marginVertical: config.scale[1] })
    n({ ml: 1 }, { marginLeft: config.scale[1] })
    n({ mt: 1 }, { marginTop: config.scale[1] })
    n({ mb: 1 }, { marginBottom: config.scale[1] })
    n({ mr: 1 }, { marginRight: config.scale[1] })
    n({ mx: 1 }, { marginHorizontal: config.scale[1] })
  })

  it('should render a custom component', () => {
    const el = shallow(
      <Base
        panza={config}
        Component={TouchableHighlight}
      />
    )
      .find(TouchableHighlight)
    expect(el).to.have.length(1)
  })

  it('should support darken underlayColors', () => {
    const el = shallow(
      <Base
        panza={config}
        Component={TouchableHighlight}
        backgroundColor='primary'
        underlayColor='darken'
      />
      ).find(TouchableHighlight)
    expect(el.props().underlayColor).to.equal('#0079D6')
  })

  it('should support other underlay colors', () => {
    const el = shallow(
      <Base
        panza={config}
        Component={TouchableHighlight}
        backgroundColor='primary'
        underlayColor='#eee'
      />
    ).find(TouchableHighlight)
    expect(el.props().underlayColor).to.equal('#eee')
  })

  it('should convert backgroundColor into style props', () => {
    n({ backgroundColor: '#eee' }, { backgroundColor: '#eee' })
  })

  it('should convert config specified colours (primary, etc.) to the appropriate colour', () => {
    Object.keys(config.colors).forEach(color => {
      contains(
        render({ backgroundColor: color }),
        { backgroundColor: config.colors[color] }
      )
    })
  })

  it('should convert flex props to styles', () => {
    n({ flex: 1 }, { flex: 1 })
    n({ justify: 'flex-start' }, { justifyContent: 'flex-start' })
    n({ align: 'center' }, { alignItems: 'center' })
    n({ row: true }, { flexDirection: 'row' })
    n({ column: true }, { flexDirection: 'column' })
    n({ wrap: true }, { flexWrap: 'wrap' })
  })

  it('should support the rounded prop', () => {
    n({ rounded: true }, { borderRadius: config.borderRadius })
    n({ rounded: 10 }, { borderRadius: 10 })
    n({ rounded: false }, { borderRadius: 0 })
  })

  it('should attach other props', () => {
    const el = shallow(
      <Base
        panza={config}
        Component={TouchableHighlight}
        activeOpacity={0.1}
        backgroundColor='primary'
        underlayColor='#eee'
      />
      ).find(TouchableHighlight)
    expect(el.props().activeOpacity).to.equal(0.1)
  })

  it('should remove base specific props to the rendered component', () => {
    const el = render({ p: 1, m: 1, backgroundColor: 'red', flex: 1, alignSelf: 'center' })
    expect(el.props()).to.not.include.keys('p', 'm', 'backgroundColor', 'flex', 'alignSelf')
  })

})
