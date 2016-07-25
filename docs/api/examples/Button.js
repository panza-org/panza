const Examples = () => {

  const { Button } = Panza

  return (
  [
    {
      title: 'Plain Button',
      description: 'A standard Button',
      render: () => (
        <Button onPress={noop}>Bacon</Button>
      )
    },
    {
     title: 'Primary',
     description: 'A primary Button',
     render: () => (
      <Button primary onPress={noop}>
        Primary Button
      </Button>
     )
    },
    {
     title: 'Secondary',
     description: 'A secondary Button',
     render: () => <Button secondary onPress={noop}>Secondary Button</Button>
    },
    {
     title: 'Positive',
     description: 'A positive Button',
     render: () => <Button positive onPress={noop}>Positive Button</Button>
    },
    {
     title: 'Negative',
     description: 'A negative Button',
     render: () => <Button negative onPress={noop}>Negative Button</Button>
    },
    {
     title: 'Outline',
     description: 'An outline Button',
     render: () => <Button outline onPress={noop}>Outline Button</Button>
    },
    {
     title: 'Primary Outline',
     description: 'A primary, outline Button',
     render: () => <Button primary outline onPress={noop}>Primary Outline Button</Button>
    },
    {
     title: 'Block',
     description: 'A block button stretches it to the full width of the container element',
     render: () => <Button block onPress={noop}>Block Button</Button>
    },
    {
     title: 'Icon',
     description: 'A primary outline button with an icon (ios-add)',
     render: () => <Button primary outline icon='ios-add' onPress={noop}>Icon Button</Button>
    },
    {
     title: 'Rounded',
     description: 'A button with a custom rounded value',
     render: () => <Button onPress={noop} primary rounded={25}>Rounded</Button>
    },
    {
     title: 'Small',
     description: 'A small button',
     render: () => <Button onPress={noop} small>Small</Button>
    },
    {
     title: 'Large',
     description: 'A large button',
     render: () => <Button onPress={noop} large>Large</Button>
    }
  ].map((p) => {
    p.props = { px: 2 }
    return p
  })
  )

}
