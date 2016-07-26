/**
 * Created by hammadjutt on 2016-07-25.
 */
import React from 'react'
import { shallow } from 'enzyme'
import { StyleSheet } from 'react-native'
import config from '../config'

const flatten = style => StyleSheet.flatten(style)

export const getProps = panzaElement => panzaElement.props()

export const getStyles = panzaElement => flatten(getProps(panzaElement).style)

export const applyWrapper = wrapper => renderer => props => wrapper(renderer(props))

export const createRenderer = panzaComponent => props => {
  if (React.isValidElement(panzaComponent)) {
    return shallow(React.cloneElement(panzaComponent, { panza: config, ...props }))
  }
  return shallow(React.createElement(panzaComponent, { panza: config, ...props }))
}
