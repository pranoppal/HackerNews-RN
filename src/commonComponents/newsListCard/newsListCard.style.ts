import {StyleSheet} from 'react-native'
import { colorLightGreyText, colorPrimary } from '../../utils/colors'

const styles = StyleSheet.create({
    detailsContainer:{
        flexDirection:'row',
    },
    valueLabelStyle:{
        fontSize:14,
    },
    keyLabelStyle:{
        fontSize:14,
        color:colorLightGreyText,
    },
    divider:{
        height:1,
        width:'100%',
        backgroundColor:colorPrimary,
        marginTop:8,
    },
    titleLabelStyle:{
        color:colorPrimary,
        fontSize:17,
    },
    container:{
        flex:1,
        marginVertical:8,
        marginHorizontal:24,
    }
})

export default styles