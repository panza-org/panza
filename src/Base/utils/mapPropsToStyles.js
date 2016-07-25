import _ from 'lodash'

function mapPropsToStyleProps(props, map, def = {}) {

  const p = { ...def }

  _.forOwn(props, (v, k) => {
    if (v && map[k]) {
      Object.assign(p, _.isFunction(map[k]) ? map[k](v) : map[k])
    } else {
      p[k] = v
    }
  })

  return p
}

export default mapPropsToStyleProps
