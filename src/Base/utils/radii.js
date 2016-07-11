function radii (props, r = 2) {
  const {
    rounded
  } = props || {}

  let borderRadius

  if (rounded === true) {
    borderRadius = r
  } else if (rounded === false) {
    borderRadius = 0
  } else if (typeof rounded === 'number') {
    borderRadius = rounded
  }

  if (typeof borderRadius === 'undefined') {
    return {}
  }

  return { borderRadius }
}

export default radii
