import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { StartupNavigator } from './startupNavigator'
import { MainNavigator } from './mainNavigator'

const AppStack = createStackNavigator();

export const AppNavigator = (): React.ReactElement => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="StartupNavigator" component={StartupNavigator} />
    <AppStack.Screen name="MainNavigator" component={MainNavigator} />
  </AppStack.Navigator> 
);
