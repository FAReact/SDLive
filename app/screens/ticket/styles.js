
import Dimension from '../../constants/dimensions'
import Colors from '../../constants/color'
import {StyleSheet} from 'react-native'

const styles =StyleSheet.create({

    linearGradient: {
        height:Dimension.px50,
        borderRadius:Dimension.px25,
        marginTop:Dimension.px20,
        justifyContent:'center',
        alignItems:'center',
      },
      buttonText: {
        fontSize: 14,
        fontWeight:'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
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
    } ,
    price:{
      fontSize:16,
      fontFamily:'FranklinGothic',
      color:Colors.grayTextColor
    } ,
    modalContainer:{
      width:Dimension.deviceWidth,
      height:Dimension.deviceHeight,
      backgroundColor:'#d7d7d8E6',
     
  },

  successContainer:{
      backgroundColor:'white',
      width:Dimension.deviceWidth,
      height:'100%',
      
  },
  successView:{
      width:'100%',
      marginTop:150,
      justifyContent:'center',
      alignItems:'center'
  },
  successIcon:{
      fontSize:150,
      color:Colors.topColor
  },
  regTitle:{
    width:'50%',
    textAlign:'center',
    fontSize:16,
    color:'#8885CE' ,
    marginTop:20
  },
  linearGradientbutton: {
      minWidth:100,
      height:Dimension.px50,
      borderRadius:Dimension.px25,
      marginTop:Dimension.px20,
      justifyContent:'center',
      alignItems:'center',
      width:100
    },

    gifCheckView:{
      marginTop:60,
      width:'100%',
      alignItems:'center'
    },
    gitTitle:{
       width:'50%',
       textAlign:'center',
       fontSize:16,
       color:'#8885CE'   
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

    gitfButton:{
      fontSize: 13,
      textAlign: 'center',
      margin: 10,
      color: '#8885CE',
      backgroundColor: 'transparent',
    }
 
});

export default styles;