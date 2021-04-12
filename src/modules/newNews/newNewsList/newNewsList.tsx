import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useStoreActions, useStoreState} from 'easy-peasy';

import styles from './newNewsList.style';
import {NewsListCard} from '../../../commonComponents';
import {colorPrimary} from '../../../utils/colors';

const newNewsList = () => {
  const newNews = useStoreState(state => state.newNews);
  const {getNewsList, clearNewsList} = useStoreActions(
    actions => actions.newNews,
  );

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getNewsList();
    }, []),
  );

  useEffect(() => {
    if (newNews?.newsList?.length > 0) setLoading(false);
    else if (newNews?.newsList === 'error') setError(true);
  }, [newNews]);

  const onRefresh = () => {
    clearNewsList();
    setLoading(true);
    getNewsList();
  };

  const renderItem = ({item}) => {
    return <NewsListCard id={item} />;
  };

  return (
    <View style={styles.container}>
      {isError ? (
        <View style={styles.container}>
          <Text>Unable to fetch data</Text>
        </View>
      ) : isLoading ? (
        <View style={styles.container}>
          <ActivityIndicator color={colorPrimary} size={24} />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.topLabelContainer}>
            <Text style={styles.mainLabel}>New News</Text>
          </View>
          <View style={styles.flatListContainer}>
            <FlatList
              refreshControl={
                <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
              }
              style={{flex: 1}}
              data={newNews?.newsList}
              renderItem={renderItem}
              keyExtractor={item => item}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default React.memo(newNewsList);
