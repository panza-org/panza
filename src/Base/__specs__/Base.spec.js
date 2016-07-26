/* eslint-env mocha */
import React from 'react'
import { TouchableHighlight } from 'react-native'
import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'

chai.use(chaiSubset)

import { Base } from '../Base'
import config from '../../config'
import { createRenderer, applyWrapper, getStyles } from '../../utils/testUtils'

const renderBase = createRenderer(<Base />)
const styleGetter = applyWrapper(getStyles)(renderBase)
const testStyles = (props, styles) => expect(styleGetter(props)).to.containSubset(styles)


describe('<Base />', () => {

  it('it should render 1 view component', () => {
    expect(renderBase()).to.have.length(1)
  })

  it('should apply the proper padding', () => {
    testStyles({ p: 1 }, { padding: config.scale[1] })
    testStyles({ p: 2 }, { padding: config.scale[2] })
    testStyles({ p: 3 }, { padding: config.scale[3] })
    testStyles({ p: 4 }, { padding: config.scale[4] })
    testStyles({ py: 1 }, { paddingVertical: config.scale[1] })
    testStyles({ pl: 1 }, { paddingLeft: config.scale[1] })
    testStyles({ pt: 1 }, { paddingTop: config.scale[1] })
    testStyles({ pb: 1 }, { paddingBottom: config.scale[1] })
    testStyles({ pr: 1 }, { paddingRight: config.scale[1] })
    testStyles({ px: 1 }, { paddingHorizontal: config.scale[1] })
  })

  it('should apply the proper margins', () => {
    testStyles({ m: 1 }, { margin: config.scale[1] })
    testStyles({ m: 2 }, { margin: config.scale[2] })
    testStyles({ m: 3 }, { margin: config.scale[3] })
    testStyles({ m: 4 }, { margin: config.scale[4] })
    testStyles({ my: 1 }, { marginVertical: config.scale[1] })
    testStyles({ ml: 1 }, { marginLeft: config.scale[1] })
    testStyles({ mt: 1 }, { marginTop: config.scale[1] })
    testStyles({ mb: 1 }, { marginBottom: config.scale[1] })
    testStyles({ mr: 1 }, { marginRight: config.scale[1] })
    testStyles({ mx: 1 }, { marginHorizontal: config.scale[1] })
  })

  it('should render a custom component', () => {
    const el = renderBase({
      Component: TouchableHighlight
    })
    .find(TouchableHighlight)
    expect(el).to.have.length(1)
  })

  it('should support darken underlayColors', () => {
    const el = renderBase({
      Component: TouchableHighlight,
      backgroundColor: 'primary',
      underlayColor: 'darken'
    })
    .find(TouchableHighlight)
    expect(el.props().underlayColor).to.equal('#0079D6')
  })

  it('should support other underlay colors', () => {
    const el = renderBase({
      Component: TouchableHighlight,
      backgroundColor: 'primary',
      underlayColor: '#eee'
    }).find(TouchableHighlight)
    expect(el.props().underlayColor).to.equal('#eee')
  })

  it('should convert backgroundColor into style props', () => {
    testStyles({ backgroundColor: '#eee' }, { backgroundColor: '#eee' })
  })

  it('should convert config specified colours (primary, etc.) to the appropriate colour', () => {
    Object.keys(config.colors).forEach(color => {
      testStyles({ backgroundColor: color }, { backgroundColor: config.colors[color] })
    })
  })

  it('should convert flex props to styles', () => {
    testStyles({ flex: 1 }, { flex: 1 })
    testStyles({ justify: 'flex-start' }, { justifyContent: 'flex-start' })
    testStyles({ align: 'center' }, { alignItems: 'center' })
    testStyles({ row: true }, { flexDirection: 'row' })
    testStyles({ column: true }, { flexDirection: 'column' })
    testStyles({ wrap: true }, { flexWrap: 'wrap' })
  })

  it('should convert other layout props to styles', () => {
    testStyles({ height: 40 }, { height: 40 })
    testStyles({ width: 50 }, { width: 50 })
  })

  it('should support the rounded prop', () => {
    testStyles({ rounded: true }, { borderRadius: config.borderRadius })
    testStyles({ rounded: 10 }, { borderRadius: 10 })
    testStyles({ rounded: false }, { borderRadius: 0 })
  })

  it('should attach other props', () => {
    const el = renderBase({
      Component: TouchableHighlight,
      activeOpacity: 0.1,
      backgroundColor: 'primary',
      underlayColor: '#eee'
    }).find(TouchableHighlight)
    expect(el.props().activeOpacity).to.equal(0.1)
  })

  it('should remove base specific props to the rendered component', () => {
    const el = renderBase({ p: 1, m: 1, backgroundColor: 'red', flex: 1, alignSelf: 'center' })
    expect(el.props()).to.not.include.keys('p', 'm', 'backgroundColor', 'flex', 'alignSelf')
  })

})
