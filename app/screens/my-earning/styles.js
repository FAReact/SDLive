import Dimension from '../../constants/dimensions'
import Colors from '../../constants/color'
import {StyleSheet} from 'react-native'

const styles =StyleSheet.create({
     
    myearningContainer:{
        width:Dimension.pro100,
        height:Dimension.pro100,
        backgroundColor:'white',
      
    },
    linearGradient: {
        height:Dimension.px50,
        borderRadius:Dimension.px25,
        marginTop:Dimension.px20,
        justifyContent:'center',
        alignItems:'center',
        width:200
      },
      buttonText: {
        fontSize: 14,
        fontWeight:'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      withdrawButton:{
          width:Dimension.pro100,
          alignItems:'center',
          marginTop:30
      },
      amountView:{
         
         width:Dimension.pro100,
         alignItems:'center',
         marginTop:Dimension.pro20

      },
      totalTitle:{
          fontSize:16,
          color:Colors.grayTextColor,
          fontFamily:'FranklinGothic-Light'
      },
      priceView:{
          flexDirection:'row',
          marginTop:20
      },
      dollarSign:{
          fontSize:40,
          color:Colors.mainColor,
          fontFamily:'FranklinGothic'
      },
      title:{
        fontSize:16,
        color:Colors.grayTextColor,
        fontFamily:'FranklinGothic'
      },
      gitfButton:{
        fontSize: 13,
        textAlign: 'center',
        margin: 10,
        color: '#8885CE',
        backgroundColor: 'transparent',
      },
      linearGradientGift: {
        minWidth:220,
        height:Dimension.px50,
        borderRadius:Dimension.px25,
        marginTop:Dimension.px20,
        justifyContent:'center',
        alignItems:'center',
        width:200,
        borderWidth:1,
        borderColor:'#8885CE',
        backgroundColor:'white'
      },
  

})

export default styles;