/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import ThirdScreen from './ThirdScreen'

let Tab = createBottomTabNavigator({
  First:{
    screen: FirstScreen,
    navigationOptions: {
      tabBarLabel: "First",
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={24} />
        )
    }
  },

  Second:{
    screen: SecondScreen,
    navigationOptions: {
      tabBarLabel: "Second",
      tabBarIcon: ({tintColor}) => (
        <Icon name="md-person" color={tintColor} size={24} />
        )
    }
  },

  Third:{
    screen: ThirdScreen,
    navigationOptions: {
      tabBarLabel: "Third",
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-call" color={tintColor} size={24} />
        )
    }
  }

},{
  tabBarOptions: {
    activeTintColor: "#283593",
    inactiveTintColor: "grey",
    labelStyle: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }
})

export default class App extends Component {
  render() {
    return (
      <Tab/>
      
    );
  }
}



