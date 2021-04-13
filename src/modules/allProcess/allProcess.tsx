import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {ProcessCard} from '../../commonComponents';
import {colorBlackDisabled} from '../../utils/colors';

import styles from './allProcess.style';

const allProcess = () => {
  const data = [
    {
      processLabel: '💼 Employee Onboarding',
      instances: '4 Instances',
    },
    {
      processLabel: '📝 Content Promotion Checklist',
      instances: '4 Instances',
    },
    {
      processLabel: '🚂 Marketing Request Process',
      instances: '17 Instances',
    },
  ];

  return (
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/avatar.png')}
              style={styles.profileDpStyle}
            />
            <Image
              source={require('../../assets/breakout.png')}
              style={styles.breakoutIconStyle}
            />
          </View>
          <View style={styles.labelsContainer}>
            <Text style={styles.titleHeaderLabel}>All Process</Text>
            <View style={styles.adjustIconContainer}>
              <SimpleLineIcons
                name="equalizer"
                color={colorBlackDisabled}
                size={24}
              />
            </View>
          </View>
        </View>
        <View style={styles.processCardsContainer}>
          <ProcessCard data={data[0]} />
          <ProcessCard data={data[1]} />
          <ProcessCard data={data[2]} />
        </View>
      </View>
  );
};

export default React.memo(allProcess);
