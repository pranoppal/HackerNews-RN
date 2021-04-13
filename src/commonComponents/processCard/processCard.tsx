import React from 'react'
import {View, Text} from 'react-native'
import { colorBlackActive0_6, colorWhite } from '../../utils/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './processCard.style'
import { Button } from 'react-native-paper'

const processCard = (props) => {
    return (
    <View style={styles.container}>
        <View style={styles.processDetailContainer}>
            <View style={styles.processLabelContainer}>
                <Text style={styles.processLabelStyle}>{props?.data?.processLabel}</Text>
                <View style={styles.proceedIconContainer}>
                    <MaterialCommunityIcons name="play-outline" color={colorWhite} size={20} />
                </View>
            </View>
            <View style={styles.instanceLabelContainer}>
                <Text style={styles.instanceLabelStyle}>{props?.data?.instances}</Text>
            </View>
        </View>
        <View style={styles.divider} opacity={0.08}/>
        <View style={styles.instanceButtonContainer}>
            <Button labelStyle={styles.instanceButtonLabelStyle} mode="text" uppercase={false}>View All Instances</Button>
            <MaterialCommunityIcons name="chevron-right" color={colorBlackActive0_6} size={24} />
        </View>
    </View>)
}

export default React.memo(processCard)