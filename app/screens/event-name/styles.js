import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
   
     eventContentContainer:{
         width:Dimension.pro100,
         height:Dimension.pro100,
         backgroundColor:'white'
     },
     timeView:{
         width:Dimension.pro100,
         backgroundColor:'black',
         padding:10,
         justifyContent:"center",
         alignItems:'center'
     },
     timeTitle:{
         color:'white',
         fontSize:18,
         textAlign:'center',
         fontFamily:'FranklinGothic-Light',
     },
     showTimeView:{
         width:Dimension.pro100,
         height:250,
         backgroundColor:'#707070'
     },
     showTime:{
       width:'100%',
       justifyContent:'center',
       alignItems:'center',
       marginTop:85
     },
     showTimeTitle:{
        fontSize:20,
        color:'white'
     },
     socialView:{
         position:'absolute',
         bottom:0,
         marginBottom:10,
         width:Dimension.pro100,
         justifyContent:'center',
         alignItems:'center'
     },
     socialTitle:{
         fontSize:16,
         color:'white'
     },
     socialIconView:{
         flexDirection:'row'
     },
     socialIcon:{
         fontSize:22,
         color:'white',
         marginLeft:5
     },
     performerView:{
         width:'100%',
         padding:10,
         flexDirection:'row',
         justifyContent:'space-between',
         
     },
     performer:{
         width:'50%',
        //  alignItems:'center',
        marginHorizontal:10
     },
     category:{
         width:'50%',
        //  alignItems:'center',
     },
     mainTitle:{
         fontSize:13,
         color:Colors.grayTextColor,
         fontFamily:'FranklinGothic'
     },
     title:{
         fontSize:12,
         color:Colors.grayTextColor,
         marginLeft:5,
         fontFamily:'FranklinGothic-Light'
     },
     performerImageView:{
         width:'100%',
         flexDirection:'row',
         marginTop:10,
         alignItems:'center'
     },
     performerImage:{
         width:40,
         height:40,
         borderRadius:20
     },
     description:{
        fontSize:12,
        color:Colors.grayTextColor
     }
})

export default styles;
