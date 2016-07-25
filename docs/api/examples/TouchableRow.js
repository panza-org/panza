const Examples = () => {

  const {
    TouchableRow,
    InputGroup
  } = Panza

  return [
    {
      title: 'Touchable Row',
      render: () => (
        <InputGroup>
          <TouchableRow
            primaryText='Primary Text'
            secondaryText='Secondary Text'
            value='Value'
            onPress={noop}
          />
        </InputGroup>
      )
    },
    {
      title: 'Touchable Row',
      render: () => (
        <InputGroup>
          <TouchableRow
            image={{ uri: 'http://placehold.it/150x150' }}
            primaryText='Primary Text'
            secondaryText='Secondary Text'
            value='Value'
            onPress={noop}
          />
        </InputGroup>
      )
    }
  ]

}
