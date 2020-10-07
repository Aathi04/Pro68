import * as React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FbScreen from './screens/FbScreen.js';
import InsScreen from './screens/InsScreen.js';


export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FbScreen},
  Instagram:{screen:InsScreen},
})

const AppContainer = createAppContainer(TabNavigator)