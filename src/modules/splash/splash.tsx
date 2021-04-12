import {CommonActions} from '@react-navigation/routers';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import styles from './splash.style';

const splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props?.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'MainNavigator',
            },
          ],
        }),
      );
    }, 1500);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>Hacker News</Text>
    </View>
  );
};

export default React.memo(splash);
