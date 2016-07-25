const Examples = () => {

  return [
    {
      title: 'Input Picker',
      render: () => <Base />,
      exampleString: `
        <InputPicker
          expanded={this.state.focusPicker}
          value={this.state.language}
          label='Select a Language'
          editable={this.state.editable}
          onToggleExpansion={() => {
            this.setState({ focusPicker: !this.state.focusPicker })
          }}>
          <Picker
            prompt='Select a language'
            style={{ width: 300 }}
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({ language: lang })}>
              <Picker.Item label='Java' value='Java' />
              <Picker.Item label='Javascript' value='Javascript' />
          </Picker>
        </InputPicker>
      `
    }
  ]
}
