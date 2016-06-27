import React from 'react'
import { View, Text } from 'react-native'
import {
  SubNav,
  PrimaryText,
  LargeText,
  SecondaryText,
  SmallText,
  NavBar,
  SearchIcon,
  ScrollView,
  InputPicker,
  NavTouchableIcon,
  TouchableRow,
  SectionHeader,
  TouchableRowCell,
  Base,
  PrimaryButton,
  SubtitleText,
  BackIcon,
  InputGroup,
  FadeImage,
  RemovableInput,
  InputRow,
  NavTouchableText,
  Icon,
  RevealingRow
 } from '../../components/panza'

function noop() {}

class CustomRevealingRow extends React.Component {
  state = {}

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showOptions: true })
    }, 1000)
  }

  render() {
    return (
      <RevealingRow
        revealedContent={(<View style={{ backgroundColor: 'blue'}}><Text>Hello</Text></View>)}
        showingOptions={this.state.showOptions}>
        <TouchableRow
          onPress={noop}
          image={{uri: 'https://pbs.twimg.com/profile_images/2966797788/e3f7b52206be4d11c86a32a67dfe2fab_400x400.png'}}
          primaryText='Hello world'
          secondaryText='Some secondary text'
          value='Value'
        />
      </RevealingRow>
    )
  }
}

class Home extends React.Component {

  state = {
    basic: ''
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fafafa'}}>
        <NavBar
          backgroundColor='white'
          RightButton={(
            <NavTouchableText disabled>
              Save
            </NavTouchableText>
          )}
          title='Introducing Panza'
        />
      <SubNav
        options={[
          { label: 'Option one', onPress: noop },
          { label: 'Option two', onPress: noop },
          { label: 'Option three', onPress: noop }
        ]}
      />

      <FadeImage
        height={200}
        width='100%'
        source={{uri: 'https://s-media-cache-ak0.pinimg.com/236x/d0/48/8b/d0488bf62c88505964faf542afebfd00.jpg'}}
      />

    <InputGroup backgroundColor='white' mt={4} inset={16} label='SOME TITLE OF SOME SORT'>
      <InputRow
        placeholder='Basic Input'
        value={this.state.basic}
        editable={this.state.editable}
        onChangeText={(basic) => this.setState({ basic })} />
      <InputRow
        label='Basic Input with Label'
        placeholder='Your value'
        value={this.state.label}
        editable={this.state.editable}
        onChangeText={(label) => this.setState({ label })} />
        <InputRow
          label='Basic Input with Label'
          placeholder='Your value'
          vertical
          value={this.state.label}
          editable={this.state.editable}
          onChangeText={(label) => this.setState({ label })} />
      <InputRow
        icon={<SearchIcon />}
        textAlign='left'
        editable={this.state.editable}
        placeholder='Input with icon' />
      <InputPicker
        expanded={this.state.showPicker}
        onToggleExpansion={() => this.setState({ showPicker: !this.state.showPicker })}
        value='hi'
        label='Input Picker'
        showMore>
          <View><PrimaryText>hello world</PrimaryText></View>
        </InputPicker>
    </InputGroup>

    <InputGroup backgroundColor='white' mt={4} inset={16} label='REMOVABLE INPUT DEMO'>
        <RemovableInput
          placeholder='Non removable without label'
          removable={false}
          editable={this.state.editable}
          onRemove={noop}
          onSelectLabel={noop}
          onChangeText={(removeInput) => this.setState({ removeInput })}
          value={this.state.removeInput}
        />
        <RemovableInput
          placeholder='Removable without label'
          removable={true}
          onRemove={noop}
          editable={this.state.editable}
          onSelectLabel={noop}
          onChangeText={(removeInput) => this.setState({ removeInput })}
          value={this.state.removeInput}
        />
        <RemovableInput
          label='Label'
          placeholder='Placeholder'
          onRemove={noop}
          editable={this.state.editable}
          onSelectLabel={noop}
          onChangeText={(removeInput) => this.setState({ removeInput })}
          value={this.state.removeInput}
        />

        <RemovableInput
          label='Not Removable'
          removable={false}
          labelWidth={150}
          editable={this.state.editable}
          placeholder='Placeholder'
          onRemove={noop}
          onSelectLabel={noop}
          onChangeText={(removeInput) => this.setState({ removeInput })}
          value={'I am not removable'}
        />

        <RemovableInput
          label='Not Editable'
          labelWidth={150}
          editable={this.state.editable}
          placeholder='Placeholder'
          onRemove={noop}
          onSelectLabel={() => {
            console.log('la la laaa la')
          }}
          onChangeText={(removeInput) => this.setState({ removeInput })}
          value={'I am not editable'}
        />

        <RemovableInput
          label='Removable Vertical Input'
          removable={true}
          vertical
          placeholder='Placeholder'
          onRemove={noop}
          editable={this.state.editable}
          onSelectLabel={noop}
          onChangeText={(removeInput) => this.setState({ removeInput })}
          value={''}
        />
        <RemovableInput
          label='Vertical Input'
          removable={false}
          vertical
          editable={this.state.editable}
          placeholder='Placeholder'
          onRemove={noop}
          onSelectLabel={noop}
          onChangeText={(removeInput) => this.setState({ removeInput })}
          value={''}
        />
        <RemovableInput
          label='Vertical input disabled'
          removable={false}
          editable={this.state.editable}
          vertical
          placeholder='Placeholder'
          onRemove={noop}
          onSelectLabel={noop}
          onChangeText={(removeInput) => this.setState({ removeInput })}
          value={'Some value of some sort right here'}
        />
    </InputGroup>

      <InputGroup backgroundColor='white' label='TOUCHABLE ROW' mt={4}>
        <TouchableRow
          onPress={noop}
          image={{uri: 'https://pbs.twimg.com/profile_images/2966797788/e3f7b52206be4d11c86a32a67dfe2fab_400x400.png'}}
          primaryText='Hello world'
          secondaryText='Some secondary text'
          value='Value'
        />
      <SectionHeader>SECTION HEADER</SectionHeader>
        <TouchableRowCell height={50} onPress={noop}>
          <Base flex={1} row align='center' justify='space-between'>
            <PrimaryText>PrimaryText</PrimaryText>
            <PrimaryText light>Value</PrimaryText>
          </Base>
        </TouchableRowCell>
        <TouchableRowCell height={'auto'} py={2} showMore={true} onPress={noop}>
          <Base flex={1}>
            <Base row align='center' justify='space-between'>
              <PrimaryText bold numberOfLines={1}>Ben McMahen</PrimaryText>
              <SecondaryText numberOfLines={1} light>2 weeks ago</SecondaryText>
            </Base>
            <SecondaryText numberOfLines={1}>Miss you already</SecondaryText>
            <SecondaryText numberOfLines={3} light>Do ex duis velit nisi eu ex excepteur sint irure nulla duis adipisicing minim in. Lorem ut et dolor proident nisi duis id do anim laboris non.</SecondaryText>
          </Base>
        </TouchableRowCell>
        <TouchableRowCell  onPress={noop}>
          <Base flex={1}>
            <PrimaryText>PrimaryText</PrimaryText>
            <SubtitleText light>SubtitleText</SubtitleText>
          </Base>
        </TouchableRowCell>
        <CustomRevealingRow />
      </InputGroup>

      <Base mt={4} p={2}>
        <PrimaryButton onPress={() => console.log('hello world')}>Primary Button</PrimaryButton>
        <PrimaryButton block mt={1}>Primary Button Block</PrimaryButton>
      </Base>
      </View>
    )
  }
}

export default Home
