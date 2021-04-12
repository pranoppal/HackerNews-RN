import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomNavigator} from './bottomNavigator'

const MainStack = createStackNavigator();
export const MainNavigator = (): React.ReactElement => (
  <MainStack.Navigator headerMode="none">
    <MainStack.Screen name="BottomNavigator" component={BottomNavigator} />
  </MainStack.Navigator>
);
