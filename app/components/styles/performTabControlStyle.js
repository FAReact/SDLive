import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    tabContainer:{
        width:Dimension.pro100,
        height:50,
        backgroundColor:'#e7e8e9',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    playIcon:{
        color:'gray',
        fontSize:22
    },
    storeIcon:{
        color:'#7d18cf',
        fontSize:22
    }


})

export default styles;