import {StyleSheet} from 'react-native'
import { colorPrimary, colorTransparent } from '../../utils/colors';


const styles = StyleSheet.create({
    fabMainContainer:{
        width:'100%',
        height:'55%',
        justifyContent:'center',
        alignItems:'center',
    },
    container: {
        flexDirection: 'row',
        backgroundColor: colorTransparent,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        marginTop:8,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    fab: {
        backgroundColor: colorPrimary,
        width:68,
        height:68,
        borderRadius:34,
        justifyContent:'center',
        alignItems:'center',
    },
    fabContainer: {
        position: 'absolute',
        top: -45,
    }
});

export default styles