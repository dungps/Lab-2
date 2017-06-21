import React, { Component } from "react";
import { View, Text } from "react-native";

import { StackNavigator } from "react-navigation";

import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import SettingScreen from "./components/SettingScreen";

const NavigatorConfigs = {
  HomeScreen: {
    screen: HomeScreen
  },
  SettingScreen: {
    screen: SettingScreen
  },
  LoginScreen: {
    screen: LoginScreen
  }
};

const AppNavigator = StackNavigator(NavigatorConfigs);

class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default App;
