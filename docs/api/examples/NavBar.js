const Examples = () => {

  const {
    NavBar,
    NavTouchableText,
    NavTouchableIcon,
    CloseIcon,
    ButtonGroup,
    Button,
    Divider
  } = Panza

  const {
    View
  } = ReactNative

  const styles = { paddingVertical: 4 }
  const log = () => {
    console.log('hello')
  }

return [
  {
    title: 'NavBar',
    description: 'A basic NavBar',
    render: () => (
      <NavBar
        RightButton={
          <NavTouchableText onPress={log}>
            Save
          </NavTouchableText>
        }
        LeftButton={
          <NavTouchableIcon
            accessibilityLabel='Close'
            onPress={log}>
            <CloseIcon />
          </NavTouchableIcon>
        }
        title='Hello World'
        backgroundColor='#fafafa'
      />
    )
  },
  {
    title: 'Inverted NavBar',
    render: () => (
      <NavBar
        inverted
        backgroundColor='primary'
        RightButton={
          <NavTouchableText color='white' onPress={log}>
            Save
          </NavTouchableText>
        }
        LeftButton={
          <NavTouchableIcon
            accessibilityLabel='Close'
            onPress={log}>
            <CloseIcon color='white' />
          </NavTouchableIcon>
        }
        title='Hello World'
      />
    )
  },
  {
    title: 'With Button Group',
    render: () => (
      <View>
        <NavBar
          RightButton={
            <NavTouchableText onPress={log}>
              Save
            </NavTouchableText>
          }
          LeftButton={
            <NavTouchableIcon
              accessibilityLabel='Close'
              onPress={log}>
              <CloseIcon />
            </NavTouchableIcon>
          }
          title='Hello World'
          backgroundColor='#fafafa'
        />
        <ButtonGroup style={styles} backgroundColor='#fafafa'>
          <Button small onPress={log} transparent icon='ios-heart-outline'>
            Like
          </Button>
          <Button small onPress={log} transparent icon='ios-text-outline'>
            Comment
          </Button>
          <Button small onPress={log} transparent icon='ios-share-outline'>
            Share
          </Button>
        </ButtonGroup>
        <Divider />
      </View>
    )
  }
]

}
