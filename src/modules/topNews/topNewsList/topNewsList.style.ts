import {StyleSheet} from 'react-native'
import { colorPrimary,colorWhite } from '../../../utils/colors'

const styles = StyleSheet.create({
    topLabelContainer:{
        flex:1,
        backgroundColor:colorPrimary,
        width:'100%',
        borderBottomEndRadius:24,
        borderBottomStartRadius:24,
        justifyContent:'center',
    },
    flatListContainer:{
        marginVertical:16,
        flex:7,
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },
    mainLabel:{
        textAlign:'center',
        fontSize:23,
        color:colorWhite,
    }
})

export default styles