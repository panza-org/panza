import React from 'react'
import extend from 'deep-assign'
import hoistNonReactStatic from 'hoist-non-react-statics'

import theme from './theme'
let baseTheme = theme

export function customizeTheme(customTheme) {
  baseTheme = extend({}, theme, customTheme)
}

/**
 * Higher order component
 */

export function themeProvider(Component) {

  class Theme extends React.Component {

    render() {
      return <Component panza={baseTheme} {...this.props} />
    }

  }

  hoistNonReactStatic(Theme, Component)

  return Theme

}
