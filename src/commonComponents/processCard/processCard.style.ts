import {StyleSheet} from 'react-native'
import { colorAccent0_4, colorBlackActive, colorBlackActive0_6, colorWhite } from '../../utils/colors'

const styles = StyleSheet.create({
    divider:{
        width:'100%',
        height:1,
        backgroundColor:colorBlackActive,
    },
    instanceLabelStyle:{
        fontSize:12,
        color:colorBlackActive0_6,
        marginStart:4,
        fontFamily:'CircularStd-Medium'
    },
    instanceButtonLabelStyle:{
        fontWeight:'bold',
        fontSize:14,
        color:colorAccent0_4,
        fontFamily:'CircularStd-Medium',
        marginStart:4,
    },
    instanceButtonContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    instanceLabelContainer:{
        flex:1,
        justifyContent:'center',
    },
    processLabelContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    processLabelStyle:{
        fontSize:16,
        color:colorBlackActive,
        fontFamily:'CircularStd-Medium'
    },
    proceedIconContainer:{
        backgroundColor:colorBlackActive0_6,
        width:24,
        height:24,
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',
    },
    processDetailContainer:{
        flex:2,
    },
    container:{
        backgroundColor:colorWhite,
        marginHorizontal:8,
        paddingHorizontal:16,
        marginBottom:8,
        borderRadius:12,
        height:150,
    }
})

export default styles