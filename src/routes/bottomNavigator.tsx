import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {colorPrimary} from '../utils/colors';
import { TopNewsDetail, TopNewsList, BestNewsDetail, BestNewsList, NewNewsDetail, NewNewsList } from '../modules';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomNavigator = (): React.ReactElement => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colorPrimary,
      inactiveTintColor: '#A9A9A9',
    }}>
    <Tab.Screen
      name="TopNewsNavigator"
      component={TopNewsNavigator}
      options={{
        tabBarLabel: 'Top',
        tabBarIcon: ({color, focused}) => (
          <Image
            source={require('../assets/top.png')}
            style={{width:24,height:24}}
          />
        ),
        tabBarAccessibilityLabel: 'TopNewsNavigator',
      }}
    />
    <Tab.Screen
      name="NewNewsNavigator"
      component={NewNewsNavigator}
      options={{
        tabBarLabel: 'New',
        tabBarIcon: ({color}) => (
            <Image
            source={require('../assets/new.png')}
            style={{width:24,height:24}}
          />
        ),
        tabBarAccessibilityLabel: 'NewNewsNavigator',
      }}
    />
    <Tab.Screen
      name="BestNewsNavigator"
      component={BestNewsNavigator}
      options={{
        tabBarLabel: 'Best',
        tabBarIcon: ({color}) => (
            <Image
            source={require('../assets/best.png')}
            style={{width:24,height:24}}
          />
        ),
        tabBarAccessibilityLabel: 'BestNewsNavigator',
      }}
    />
  </Tab.Navigator>
);

const TopNewsStack = createStackNavigator();
export const TopNewsNavigator = (): React.ReactElement => {
  return (
    <TopNewsStack.Navigator headerMode="none">
      <TopNewsStack.Screen name="TopNewsList" component={TopNewsList} />
      <TopNewsStack.Screen
        name="TopNewsDetail"
        component={TopNewsDetail}
      />
    </TopNewsStack.Navigator>
  );
};

const NewNewsStack = createStackNavigator();
export const NewNewsNavigator = (): React.ReactElement => (
  <NewNewsStack.Navigator
    headerMode="none"
    initialRouteName="UserBookDesk">
    <NewNewsStack.Screen name="NewNewsList" component={NewNewsList} />
    <NewNewsStack.Screen
      name="NewNewsDetail"
      component={NewNewsDetail}
    />
  </NewNewsStack.Navigator>
);

const BestNewsStack = createStackNavigator();
export const BestNewsNavigator = (): React.ReactElement => (
  <BestNewsStack.Navigator headerMode="none">
    <BestNewsStack.Screen
      name="BestNewsList"
      component={BestNewsList}
    />
    <BestNewsStack.Screen
      name="BestNewsDetail"
      component={BestNewsDetail}
    />
  </BestNewsStack.Navigator>
);
