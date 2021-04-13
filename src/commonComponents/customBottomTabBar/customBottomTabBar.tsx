import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colorPrimary} from '../../utils/colors';
// import { BOTTOM_NAV_BULLET } from '../../utils/constants';
import {FAB} from 'react-native-paper';
// import { AddMenu } from '..';
import styles from './customBottomTabBar.style';

const CustomBottomTabBar = ({
  state,
  descriptors,
  navigation,
  activeTintColor,
  inactiveTintColor,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const color = isFocused ? activeTintColor : inactiveTintColor;

        let TabScene = {
          focused: isFocused,
          route: route,
          tintColor: color,
          color: color,
          size: 26,
        };

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : '';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const addFAB = () => {
          return (
            <View style={styles.fabContainer}>
              <FAB style={styles.fab} icon="plus" onPress={() => {}} />
            </View>
          );
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.iconContainer}>
            {/* {isRotated && (
                            <AddMenu
                                visible={isRotated}
                                setVisible={setRotated}
                                navigation={navigation}
                            />
                        )} */}
            {route.name === 'NewNewsNavigator' ? (
              <View style={styles.fabMainContainer}>{addFAB()}</View>
            ) : (
              options.tabBarIcon(TabScene)
            )}

            <Text
              style={{
                color: isFocused ? colorPrimary : '#222',
                fontSize: 10,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default React.memo(CustomBottomTabBar);
