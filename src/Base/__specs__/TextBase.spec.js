/* eslint-env mocha */

import React from 'react'
import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'

chai.use(chaiSubset)

import { TextBase } from '../TextBase'
import config from '../../config'
import { createRenderer, applyWrapper, getStyles } from '../../utils/testUtils'

const renderText = createRenderer(<TextBase />)
const styleGetter = applyWrapper(getStyles)(renderText)
const testStyles = (props, expected) => expect(styleGetter(props)).to.containSubset(expected)

describe('<TextBase />', () => {

  it('should render 1 Text component', () => {
    expect(renderText()).to.have.length(1)
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

  it('should convert flex props to styles', () => {
    testStyles({ flex: 1 }, { flex: 1 })
    testStyles({ justify: 'flex-start' }, { justifyContent: 'flex-start' })
    testStyles({ align: 'center' }, { alignItems: 'center' })
    testStyles({ row: true }, { flexDirection: 'row' })
    testStyles({ column: true }, { flexDirection: 'column' })
    testStyles({ wrap: true }, { flexWrap: 'wrap' })
  })

  it('should support text props', () => {
    testStyles({ fontSize: 0 }, { fontSize: config.fontSizes[0] })
    testStyles({ color: 'primary' }, { color: config.colors.primary })
    testStyles({ color: '#eee' }, { color: '#eee' })
    testStyles({ textAlign: 'center' }, { textAlign: 'center' })
    testStyles({ bold: true }, { fontWeight: config.bold })
    testStyles({ thin: true }, { fontWeight: config.thin })
    testStyles({ inverted: true }, { color: config.colors.inverted })
    testStyles({ thick: true }, { fontWeight: config.thick })
  })

  it('should set the correct defaults', () => {
    testStyles({}, {
      color: config.colors.default
    })
  })
})
