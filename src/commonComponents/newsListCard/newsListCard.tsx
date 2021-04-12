import React, {useEffect, useState} from 'react';
import {View, Text,Linking} from 'react-native';

import styles from './newsListCard.style';
import {fetchNewsDetailAPI} from '../../restApi';
import {TouchableRipple} from 'react-native-paper';

const newsList = props => {
  const [storyData, setStoryData] = useState({});

  const getNewsDetails = async () => {
    const res = await fetchNewsDetailAPI(props?.id);
    setStoryData(res);
  };
  useEffect(() => {
    getNewsDetails();
  }, [props?.id]);

  const openStoryDetail = () => {
    Linking.openURL(storyData?.url)
  }
  return (
    <TouchableRipple onPress={openStoryDetail}>
      <View style={styles.container}>
        <Text style={styles.titleLabelStyle}>{storyData?.title}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.keyLabelStyle}>Comments: </Text>
          <Text>{storyData?.descendants}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.keyLabelStyle}>Points: </Text>
          <Text style={styles.valueLabelStyle}>{storyData?.score}</Text>
        </View>

        <View style={styles.divider} />
      </View>
    </TouchableRipple>
  );
};

export default React.memo(newsList);
