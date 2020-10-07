import * as React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FbScreen from './screens/FbScreen.js';
import InsScreen from './screens/InsScreen.js';
import AppHeader from './components/AppHeader';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <AppContainer/>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FbScreen},
  Instagram:{screen:InsScreen},
})

const AppContainer = createAppContainer(TabNavigator)