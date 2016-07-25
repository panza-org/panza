const Examples = () => {

  const { Loader } = Panza

  return [
    {
      title: 'Loader',
      description: 'Loader',
      render: () => (
        <Loader />
      )
    },
    {
      title: 'Large loader',
      description: 'Loader',
      render: () => (
        <Loader large />
      )
    },
    {
      title: 'Loader without text',
      description: 'Loader',
      render: () => (
        <Loader showText={false} />
      )
    }
  ]
}
