import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    
    flatlistContainer:{
        width:Dimension.pro100,
        height:Dimension.deviceHeight-100
    },
    eventTitle:{
        color:Colors.grayTextColor,
        fontSize:12,
        fontFamily:'FranklinGothic-Light'
    },
    eventName:{
       color:'#707070',
       fontFamily:'FranklinGothic',
       fontSize:13
    }    
})
export default styles;
