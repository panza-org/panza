const Examples = () => {

  return [
    {
      title: 'Input Date Picker',
      render: () => <Base />,
      exampleString: `
        <InputDatePicker
          expanded={this.state.focusDate}
          date={this.state.date}
          editable={this.state.editable}
          value={new Date(this.state.date).getFullYear().toString()}
          onDateChange={(date) => this.setState({ date })}
          label='Your Birthday'
          onToggleExpansion={() => {
            LayoutAnimation.spring()
            this.setState({ focusDate: !this.state.focusDate })
          }}
        />
      `
    }
  ]

}
