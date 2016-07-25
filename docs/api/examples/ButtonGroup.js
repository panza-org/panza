const examples = () => {

const {
  ButtonGroup,
  Button
} = Panza

return [
    {
      title: 'Segmented Controls',
      description: 'iOS style segmented controls',
      render: () => (
        <ButtonGroup segmented rounded={5}>
          <Button primary>One</Button>
          <Button primary outline onPress={noop}>Two</Button>
          <Button primary outline onPress={noop}>Three</Button>
        </ButtonGroup>
      )
    },
    {
      title: 'Segmented Positive',
      description: 'Segmented controls with 2 positive buttons',
      render: () => (
        <ButtonGroup mt={2} segmented rounded={5}>
          <Button positive>One</Button>
          <Button positive outline onPress={noop}>Two</Button>
        </ButtonGroup>
      )
    },
    {
      title: 'Vertical ButtonGroup',
      render: () => (
        <ButtonGroup mt={2} vertical>
          <Button primary onPress={noop}>Primary Vertical</Button>
          <Button transparent mt={1} onPress={noop}>Secondary Option</Button>
        </ButtonGroup>
      )
    },
    {
      title: 'Transparent ButtonGroup',
      render: () => (
        <ButtonGroup py={1}>
          <Button small onPress={noop} transparent icon='ios-heart-outline'>
            Like
          </Button>
          <Button small onPress={noop} transparent icon='ios-text-outline'>
            Comment
          </Button>
          <Button small onPress={noop} transparent icon='ios-share-outline'>
            Share
          </Button>
        </ButtonGroup>
      )
    }
  ]

}
