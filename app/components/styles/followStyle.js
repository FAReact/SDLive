import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    followContainer:{
        width:Dimension.pro100,
        height:Dimension.px80,
        padding:Dimension.px20,
        flexDirection:'row',

     },
     concertArea:{
         width:Dimension.pro50,
         justifyContent:'space-between',
         alignItems:'center',
         flexDirection:'row'
     },
     concertView:{
         marginRight:Dimension.px30,
         justifyContent:'center',
         alignItems:'center'
     },
     followArea:{
        width:Dimension.pro50,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
     },
     followView:{
         marginLeft:Dimension.px30,
         justifyContent:'center',
         alignItems:'center'
     },
     starArea:{
         width:30,
         height:30,
         borderRadius:15,
         backgroundColor:Colors.starBack,
         justifyContent:'center',
         alignItems:'center',
     },
     star:{
         width:18,
         height:18
     },
     title:{
         fontSize:20,
         color:Colors.grayTextColor,
         fontWeight:'bold'
     },
     subscribe:{
         fontSize:13,
        //  fontFamily:'FlanklinGothic',
         color:Colors.grayTextColor,
     }
     
})

export default styles;