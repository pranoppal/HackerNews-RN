import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {colorPrimary, colorWhite} from '../utils/colors';
import { TopNewsList, BestNewsList, NewNewsList, AllProcess } from '../modules';
import { CustomBottomTabBar } from '../commonComponents';

const Tab = createBottomTabNavigator();

export const BottomNavigator = (): React.ReactElement => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colorPrimary,
      inactiveTintColor: '#A9A9A9',
    }}
    tabBar={(props) => (
      <View
          style={{
              width: '100%',
              height: 60,
              position: 'absolute',
              zIndex: 999,
              bottom: 0,
              backgroundColor:colorWhite,
          }}
      >
          <CustomBottomTabBar {...props} />
      </View>
  )}
    >
    <Tab.Screen
      name="TopNewsNavigator"
      component={TopNewsNavigator}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({color, focused}) => (
          <MaterialCommunityIcons name="view-dashboard" color={color} size={24} />
        ),
        tabBarAccessibilityLabel: 'TopNewsNavigator',
      }}
    />
    <Tab.Screen
      name="AllProcessNavigator"
      component={AllProcessNavigator}
      options={{
        tabBarLabel: 'All Process',
        tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="folder" color={color} size={24} />
        ),
        tabBarAccessibilityLabel: 'AllProcessNavigator',
      }}
    />
    <Tab.Screen
      name="NewNewsNavigator"
      component={NewNewsNavigator}
      options={{
        tabBarLabel: 'New Instance',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons
          name="plus"
          color={color}
          size={26}
      />
        ),
        tabBarAccessibilityLabel: 'NewNewsNavigator',
      }}
    />
    <Tab.Screen
      name="TestNewsNavigator"
      component={NewNewsNavigator}
      options={{
        tabBarLabel: 'Notifications',
        tabBarIcon: ({color}) => (
          <MaterialIcons
          name="notifications"
          color={color}
          size={26}
      />
        ),
        tabBarAccessibilityLabel: 'NewNewsNavigator',
      }}
    />
    <Tab.Screen
      name="BestNewsNavigator"
      component={BestNewsNavigator}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({color}) => (
            <Ionicons name="md-settings" color={color} size={24} />
        ),
        tabBarAccessibilityLabel: 'BestNewsNavigator',
      }}
    />
  </Tab.Navigator>
);


const AllProcessStack = createStackNavigator();
export const AllProcessNavigator = (): React.ReactElement => {
  return (
    <AllProcessStack.Navigator headerMode="none">
      <AllProcessStack.Screen name="AllProcess" component={AllProcess} />
    </AllProcessStack.Navigator>
  );
};


const TopNewsStack = createStackNavigator();
export const TopNewsNavigator = (): React.ReactElement => {
  return (
    <TopNewsStack.Navigator headerMode="none">
      <TopNewsStack.Screen name="TopNewsList" component={TopNewsList} />
    </TopNewsStack.Navigator>
  );
};

const NewNewsStack = createStackNavigator();
export const NewNewsNavigator = (): React.ReactElement => (
  <NewNewsStack.Navigator
    headerMode="none"
    initialRouteName="UserBookDesk">
    <NewNewsStack.Screen name="NewNewsList" component={NewNewsList} />
  </NewNewsStack.Navigator>
);

const BestNewsStack = createStackNavigator();
export const BestNewsNavigator = (): React.ReactElement => (
  <BestNewsStack.Navigator headerMode="none">
    <BestNewsStack.Screen
      name="BestNewsList"
      component={BestNewsList}
    />
  </BestNewsStack.Navigator>
);
