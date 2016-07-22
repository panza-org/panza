const Examples = () => {

  const { Text } = Panza

  return [
    'tiny',
    'small',
    'medium',
    'large',
    'giant'
  ].map(size => {
    const props = {
      [size]: true
    }

    return {
      title: size,
      props: { px: 2 },
      render: () => <Text {...props}>Id ad commodo veniam labore ut anim quis aliqua consequat voluptate irure cillum elit.</Text>
    }
  })

}
