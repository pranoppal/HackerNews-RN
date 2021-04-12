import {StyleSheet} from 'react-native'
import { colorPrimary } from '../../utils/colors'

const styles = StyleSheet.create({
    labelStyle:{
        fontSize:25,
        color:colorPrimary,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default styles