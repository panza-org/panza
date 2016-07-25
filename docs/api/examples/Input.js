const Examples = () => {

  const {
    Input
  } = Panza

  function createInput(type) {
    return class InputExample extends React.Component {
      constructor() {
        super()
        this.state = { value: '' }
      }
      render() {
        let input = <Input flex={1} style={{ width: 200, height: 40}} value={this.state.value} placeholder='Placeholder' onChangeText={(v) => this.setState({ value: v })} />
        return React.cloneElement(input, {
          [type]: true
        })
      }
    }
  }

  return [
    {
      title: 'Tiny',
      props: { px: 2 },
      render: () => {
        const Type = createInput('tiny')
        return <Type />
      },
      exampleString: `
        <Input
          tiny
          placeholder='Placeholder'
          onChangeText={onChange}
          value={this.state.value}
        />
      `
    },
    {
      title: 'Small',
      props: { px: 2 },
      render: () => {
        const Type = createInput('small')
        return <Type />
      },
      exampleString: `
        <Input
          small
          placeholder='Placeholder'
          onChangeText={onChange}
          value={this.state.value}
        />
      `
    },
    {
      title: 'Medium',
      props: { px: 2 },
      render: () => {
        const Type = createInput('medium')
        return <Type />
      },
      exampleString: `
        <Input
          placeholder='Placeholder'
          onChangeText={onChange}
          value={this.state.value}
        />
      `
    },
    {
      title: 'Large',
      props: { px: 2 },
      render: () => {
        const Type = createInput('large')
        return <Type />
      },
      exampleString: `
        <Input
          large
          placeholder='Placeholder'
          onChangeText={onChange}
          value={this.state.value}
        />
      `
    },
    {
      title: 'Giant',
      props: { px: 2 },
      render: () => {
        const Type = createInput('giant')
        return <Type />
      },
      exampleString: `
        <Input
          giant
          placeholder='Placeholder'
          onChangeText={onChange}
          value={this.state.value}
        />
      `
    }
  ]

}
