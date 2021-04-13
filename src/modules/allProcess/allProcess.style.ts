import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    processCardsContainer:{
        flex:5,
    },
    adjustIconContainer:{
        transform:[{rotate:'90deg'}],
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginTop:4,
    },
    titleHeaderLabel:{
        fontSize:24,
        fontFamily:'CircularStd-Medium'
    },  
    breakoutIconStyle:{
        width:130,
        height:24,
        marginTop:8,
    },
    profileDpStyle:{
        width:40,
        height:40,
        marginStart:24,
        marginEnd:16,
    },
    labelsContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:24,
    },
    imageContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',    
    },
    descriptionContainer:{
        flex:1,
    },
    container:{
        flex:1,
        marginTop:24,
    }
})

export default styles