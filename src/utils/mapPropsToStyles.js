import forOwn from 'lodash/forOwn'
import isFunction from 'lodash/isFunction'

function mapPropsToStyles(props, map, defaults = {}) {

  const styleProps = { ...defaults }

  forOwn(props, (v, k) => {
    if (v && map[k]) {
      Object.assign(styleProps, isFunction(map[k]) ? map[k](v) : map[k])
    } else {
      styleProps[k] = v
    }
  })

  return styleProps
}

export default mapPropsToStyles
