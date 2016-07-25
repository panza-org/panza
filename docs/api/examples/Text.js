const Examples = () => {

  const { Text } = Panza

  return [
    {
      title: 'Tiny',
      render: () => <Text tiny>Hello world</Text>
    },
    {
      title: 'Small',
      render: () => <Text small>Hello world</Text>
    },
    {
      title: 'Medium',
      render: () => <Text>Hello world</Text>
    },
    {
      title: 'Large',
      render: () => <Text large>Hello world</Text>
    },
    {
      title: 'Giant',
      render: () => <Text giant>Hello world</Text>
    },
    {
      title: 'Primary color',
      render: () => <Text color='primary'>Hello world</Text>
    },
    {
      title: 'Bold',
      render: () => <Text bold>Hello world</Text>
    },
    {
      title: 'All together now',
      render: () => <Text giant color='primary' thin>Hello world</Text>
    }
  ].map((p) => {
    p.props = { px: 2 }
    return p
  })

}
