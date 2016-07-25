const Examples = () => {

  const {
    InputRow,
    InputGroup,
    InputHelpText
  } = Panza

  function renderInputWithProps(props) {

    return class Example extends React.Component {

      constructor(props) {
        super(props)
        this.state = {
          value: '' || props.value
        }
      }

      render() {
        return (
          <InputRow
            value={this.state.value}
            onChangeText={(value) => this.setState({ value })}
            {...props}
          />
        )
      }
    }
  }

  return [
    {
      title: 'With placeholder',
      exampleString: `
        <InputGroup>
          <InputRow
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
            placeholder='Placeholder'
          />
        </InputGroup>
      `,
      render: () => {
        const Example = renderInputWithProps({ placeholder: 'Placeholder' })
        return (
          <InputGroup>
            <Example />
          </InputGroup>
        )
      }
    },
    {
      title: 'With label',
      exampleString: `
        <InputGroup>
          <InputRow
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
            label='With Label'
            placeholder='Placeholder'
          />
        </InputGroup>
      `,
      render: () => {
        const Example = renderInputWithProps({
          label: 'With Label',
          placeholder: 'Placeholder'
        })

        return (
          <InputGroup>
            <Example />
          </InputGroup>
        )
      }
    },
    {
      title: 'Removable',
      exampleString: `
        <InputGroup>
          <InputRow
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
            label='Removable'
            removable
            placeholder='Type here...'
          />
        </InputGroup>
      `,
      render: () => {
        const Example = renderInputWithProps({
          label: 'Removable',
          removable: true,
          placeholder: 'Type here...'
        })

        return (
          <InputGroup>
            <Example />
          </InputGroup>
        )
      }
    },
    {
      title: 'Vertical',
      exampleString: `
        <InputGroup>
          <InputRow
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
            label='Vertical'
            vertical
            placeholder='Type here...'
          />
        </InputGroup>
      `,
      render: () => {
        const Example = renderInputWithProps({
          label: 'Vertical',
          vertical: true,
          placeholder: 'Type here...'
        })

        return (
          <InputGroup>
            <Example />
          </InputGroup>
        )
      }
    },
    {
      title: 'Touchable label',
      exampleString: `
        <InputGroup>
          <InputRow
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
            label='Touchable Label'
            placeholder='Type here...'
            onSelectLabel={() => {
              console.log('label touched')
            }}
          />
        </InputGroup>
      `,
      render: () => {
        const Example = renderInputWithProps({
          label: 'Touchable Label',
          placeholder: 'Type here...',
          onSelectLabel: () => noop
        })

        return (
          <InputGroup>
            <Example />
          </InputGroup>
        )
      }
    }

  ]

}
