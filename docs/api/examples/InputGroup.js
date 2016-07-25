const Examples = () => {

  const {
    View
  } = ReactNative

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


  class BasicGroup extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        editable: true,
        basic: '',
        label: '',
        label2: '',
        label3: '',
        label4: '',
        label5: ''
      }
  }

  render() {

    let First = renderInputWithProps({ placeholder: 'Basic Input '})
    let Second = renderInputWithProps({
      label: 'Basic Input with Label',
      placeholder: 'Your Value'
    })
    let Third = renderInputWithProps({
      label: 'Basic Input with Label & Vertical',
      vertical: true,
      placeholder: 'Placeholder'
    })

    let Fourth = renderInputWithProps({
      label: 'Removable',
      removable: true,
      placeholder: 'Type here...',
      onSelectLabel: () => noop
    })

    return (
      <View>
        <InputGroup label='INPUT GROUP LABEL' inset={16} mt={3}>
          <First />
          <Second />
          <Third />
          <Fourth />
        </InputGroup>
        <InputHelpText>
          Some help text. Aute nulla ex ea amet sunt occaecat qui fugiat cupidatat fugiat in. Veniam amet elit et tempor sit ea nulla adipisicing laboris pariatur.
        </InputHelpText>
      </View>
    )
  }
}


  return [
    {
      title: 'Basic InputGroup',
      render: () => (
        <BasicGroup />
      ),
      exampleString: `
        <View>
          <InputGroup label='INPUT GROUP LABEL' inset={16} mt={3}>
            <InputRow
              value={this.state.first}
              onChangeText={(first) => this.setState({ first })}
              placeholder='Basic Input'
            />
            <InputRow
              value={this.state.second}
              onChangeText={(second) => this.setState({ second })}
              label='Basic Input with Label'
              placeholder='Your Value'
            />
            <InputRow
              value={this.state.value}
              onChangeText={(value) => this.setState({ value })}
              label='Basic Input with Label & Vertical'
              vertical
              placeholder='Placeholder'
            />
            <InputRow
              value={this.state.value}
              onChangeText={(value) => this.setState({ value })}
              label='Removable'
              removable
              placeholder='Type here...'
              onSelectLabel={() => noop}
            />
          </InputGroup>
          <InputHelpText>
            Some help text. Aute nulla ex ea amet sunt occaecat qui fugiat cupidatat fugiat in. Veniam amet elit et tempor sit ea nulla adipisicing laboris pariatur.
          </InputHelpText>
        </View>
      `
    }
  ]
}
