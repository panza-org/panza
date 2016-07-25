const Examples = () => {

  const { Base } = Panza

  return [
    {
      title: 'Base with padding',
      render: () => (
        <Base backgroundColor='primary' p={4} />
      )
    },
    {
      title: 'Base with margin',
      render: () => (
        <Base p={2}>
          <Base backgroundColor='red' p={4} mb={2} />
          <Base backgroundColor='light' p={4} />
        </Base>
      )
    },
    {
      title: 'Base rounded',
      render: () => (
        <Base backgroundColor='green' rounded={30} p={4} />
      )
    },
    {
      title: 'Base width & height',
      render: () => (
        <Base width={30} height={50} backgroundColor='green' />
      )
    },
    {
      title: 'Base with flex',
      render: () => (
        <Base height={200} flex={1} column justify='space-between' align='center' backgroundColor='light'>
          <Base p={2} backgroundColor='primary' />
          <Base p={2} backgroundColor='secondary' />
          <Base alignSelf='flex-start' p={2} backgroundColor='positive' />
        </Base>
      )
    }
  ]
}
