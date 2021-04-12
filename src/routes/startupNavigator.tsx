import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Splash } from '../modules'

const AppStack = createStackNavigator();

export const StartupNavigator = (): React.ReactElement => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="Splash" component={Splash} />
  </AppStack.Navigator>
);
