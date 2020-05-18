
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
    availableTicketTitleView:{
        alignItems:'center',
        width:'100%'
    },
    availableTicketTitle:{
        fontSize:20,
        color:Colors.grayTextColor,
        fontFamily:'FranklinGothic'
    },
    infoView:{
      marginTop:20
    },
    textInfo:{
       fontSize:16,
       color:'#707070'
    }, 
    textInput:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        borderRadius:20,
        padding:10,
        borderWidth:1,
        marginTop:10,
        
    },
   
});

export default styles;