import React, { PropTypes } from 'react'
import {
  View,
  Text,
  ScrollView,
  Platform
} from 'react-native'

import {
  NavBar,
  NavTouchableIcon,
  BackIcon,
  PlusIcon,
  SearchIcon,
  RightNavTouchableText,
  LeftNavTouchableText,
  Base,
  NavTouchableText,
  SubNav
} from '../panza'

function noop() {}

export default class NavBarExample extends React.Component {

  render() {
    return (
      <ScrollView style={{ paddingTop: 20}}>

        <View style={{ position: 'relative'}}>
        <NavBar
          backgroundColor='gray'
          LeftButton={(
            <NavTouchableIcon onPress={() => navigator.pop()}>
              <BackIcon />
            </NavTouchableIcon>
          )}
          RightButton={(
            <NavTouchableIcon onPress={noop}>
              <SearchIcon size={25} androidSize={25} />
            </NavTouchableIcon>
          )}
          title='Title'
        />

</View>
      {Platform.OS === 'ios' && (
        <View>

          <NavBar
            backgroundColor='gray'
            LeftButton={(
              <NavTouchableIcon onPress={() => navigator.pop()}>
                <BackIcon />
              </NavTouchableIcon>
            )}
            RightButton={(
              <NavTouchableIcon onPress={noop}>
                <PlusIcon size={35} />
              </NavTouchableIcon>
            )}
            title='Title'
          />


        <NavBar
          backgroundColor='primary'
          mt={2}
          LeftButton={(
            <NavTouchableIcon onPress={() => navigator.pop()}>
              <BackIcon color='white' />
            </NavTouchableIcon>
          )}
          RightButton={(
            <NavTouchableText color='white'>
              Save
            </NavTouchableText>
          )}
          title='Title'
          titleColor='white'
        />

        <NavBar
          mt={2}
          LeftButton={(
            <NavTouchableText>
              Cancel
            </NavTouchableText>
          )}
          RightButton={(
            <NavTouchableText disabled>
              Save
            </NavTouchableText>
          )}
          title='Touchable Text'
        />
      
    </View>
        )}

        {Platform.OS === 'android' && (
          <NavBar
            backgroundColor='primary'
            mt={2}
            LeftButton={(
              <NavTouchableIcon onPress={() => navigator.pop()}>
                <BackIcon color='white' />
              </NavTouchableIcon>
            )}
            title='Primary Title'
            titleColor='white'
          />
        )}

        <View style={{ position: 'relative'}}>
        <NavBar
          mt={2}
          LeftButton={(
            <NavTouchableIcon onPress={() => navigator.pop()}>
              <BackIcon />
            </NavTouchableIcon>
          )}
          RightButton={(
            <Base row flex={1} align='center' >
              <NavTouchableIcon onPress={noop}>
                <SearchIcon size={25} />
              </NavTouchableIcon>
              <NavTouchableIcon onPress={noop}>
                <PlusIcon size={40} androidSize={25} />
              </NavTouchableIcon>
            </Base>
          )}
          title='Touchable Text'
        />
      </View>



      </ScrollView>
    )
  }
}
