import React from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'

import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'

chai.use(chaiSubset)

import { TextBase } from '../TextBase'
import config from '../../config'

function flatten(style) {
  return StyleSheet.flatten(style)
}

function render({ ...props }) {
  return shallow(<TextBase {...props} panza={config} />).find(Text)
}

function contains(el, s) {
  const style = flatten(el.props().style)
  return expect(style).to.containSubset(s)
}

function n(p, m) {
  return contains(render(p), m)
}

describe('<TextBase />', () => {

  it('should render 1 Text component', () => {
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

  it('should convert flex props to styles', () => {
    n({ flex: 1 }, { flex: 1 })
    n({ justify: 'flex-start' }, { justifyContent: 'flex-start' })
    n({ align: 'center' }, { alignItems: 'center' })
    n({ row: true }, { flexDirection: 'row' })
    n({ column: true }, { flexDirection: 'column' })
    n({ wrap: true }, { flexWrap: 'wrap' })
  })

  it('should support text props', () => {
    n({ fontSize: 0 }, { fontSize: config.fontSizes[0] })
    n({ color: 'primary' }, { color: config.colors.primary })
    n({ color: '#eee' }, { color: '#eee' })
    n({ textAlign: 'center' }, { textAlign: 'center' })
    n({ bold: true }, { fontWeight: config.bold })
    n({ thin: true }, { fontWeight: config.thin })
    n({ inverted: true }, { color: config.colors.inverted })
    n({ thick: true }, { fontWeight: config.thick })
    n({ lineHeight: 0 }, { lineHeight: config.lineHeights[0] })
  })

  it('should set the correct defaults', () => {
    n({}, {
      color: config.colors.default,
      lineHeight: config.lineHeights[1]
    })
  })
})
